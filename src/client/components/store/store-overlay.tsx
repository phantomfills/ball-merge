import React, { useEffect } from "@rbxts/react";
import { Frame } from "../ui/frame";
import { lerpBinding, Spring, useMotor } from "@rbxts/pretty-react-hooks";
import { springProps } from "client/constants/spring-props";

export function StoreOverlay() {
	const [showTransition, setShowTransition] = useMotor(0);

	useEffect(() => {
		setShowTransition(new Spring(1, springProps.responsive));
	}, []);

	return (
		<Frame
			size={new UDim2(1, 0, 1, 0)}
			backgroundColor={Color3.fromRGB(0, 3, 92)}
			backgroundTransparency={lerpBinding(showTransition, 1, 0.4)}
			zIndex={0}
		/>
	);
}
