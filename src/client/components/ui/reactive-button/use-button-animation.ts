import { Spring, useUpdateEffect } from "@rbxts/pretty-react-hooks";
import React, { useMemo } from "@rbxts/react";
import { useMotor } from "@rbxts/pretty-react-hooks";
import { SPRING_PROPS } from "client/constants/spring-props";

export interface ButtonAnimation {
	/**
	 * An underdamped spring. `-1` is fully hovered, `0` is neutral, and `1` is
	 * fully pressed. Values outside of this range are possible.
	 */
	readonly position: React.Binding<number>;
	/**
	 * A critically damped spring that is `1` when the button is pressed.
	 */
	readonly press: React.Binding<number>;
	/**
	 * A critically damped spring that is `1` when the button is hovered.
	 */
	readonly hover: React.Binding<number>;
	/**
	 * Same as `hover`, but `pressed` must be `false`.
	 */
	readonly hoverOnly: React.Binding<number>;
}

/**
 * Returns a `ButtonAnimation` object that can be used to animate a button.
 * The values provided by the object are:
 *
 * - `position`: An underdamped spring. `-1` is fully hovered, `0` is neutral,
 *  and `1` is fully pressed. Values outside of this range are possible.
 * - `press`: A critically damped spring that is `1` when the button is pressed.
 * - `hover`: A critically damped spring that is `1` when the button is hovered.
 * - `hoverExclusive`: Same as `hover`, but `pressed` must also be `false`.
 *
 * @param pressedState Whether the button is pressed.
 * @param hoveredState Whether the button is hovered.
 * @returns A `ButtonAnimation` object.
 */
export function useButtonAnimation(pressedState: boolean, hoveredState: boolean): ButtonAnimation {
	const [pressTransition, setPressTransition] = useMotor(0);
	const [hoverTransition, setHoverTransition] = useMotor(0);
	const [hoverExclusiveTransition, setHoverExclusiveTransition] = useMotor(0);
	const [positionTransition, setPositionTransition] = useMotor(0);

	useUpdateEffect(() => {
		setPressTransition(new Spring(pressedState ? 1 : 0, SPRING_PROPS.bubbly));
		setHoverExclusiveTransition(new Spring(hoveredState && !pressedState ? 1 : 0, SPRING_PROPS.responsive));
	}, [pressedState, hoveredState]);

	useUpdateEffect(() => {
		setHoverTransition(new Spring(hoveredState ? 1 : 0, SPRING_PROPS.responsive));
	}, [hoveredState]);

	useUpdateEffect(() => {
		if (pressedState) {
			// hovered -> pressed
			setPositionTransition(new Spring(1, SPRING_PROPS.responsive));
		} else if (hoveredState) {
			// pressed -> hovered
			setPositionTransition(new Spring(-1, SPRING_PROPS.bubbly));
		} else {
			// pressed -> unhovered, but 'hover' was not true
			setPositionTransition(new Spring(0, SPRING_PROPS.bubbly));
		}
	}, [pressedState]);

	useUpdateEffect(() => {
		if (hoveredState) {
			// unhovered -> hovered
			setPositionTransition(new Spring(-1, SPRING_PROPS.responsive));
		} else {
			// hovered -> unhovered
			setPositionTransition(new Spring(0, SPRING_PROPS.responsive));
		}
	}, [hoveredState]);

	return useMemo<ButtonAnimation>(() => {
		return {
			press: pressTransition,
			hover: hoverTransition.map((t) => math.clamp(t, 0, 1)),
			hoverOnly: hoverExclusiveTransition.map((t) => math.clamp(t, 0, 1)),
			position: positionTransition,
		};
	}, []);
}
