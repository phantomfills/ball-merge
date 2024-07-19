import React, { useEffect, useState } from "@rbxts/react";
import { Frame } from "../ui/frame";
import { Image } from "../ui/image";
import { images } from "shared/assets";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";
import { Shadow } from "../ui/shadow";
import { style } from "client/constants/style";
import { producer } from "client/store";
import { useSelector } from "@rbxts/react-reflex";
import { selectPage } from "client/store/page";
import { lerpBinding, Spring, useMotor } from "@rbxts/pretty-react-hooks";
import { selectBallCount } from "client/store/ball";
import { playSound } from "client/utils/sound";
import { SOUNDS } from "client/constants/sounds";

export function BallCounter() {
	const page = useSelector(selectPage);
	const count = useSelector(selectBallCount);

	const [clicking, setClicking] = useState(false);
	const [clickTransition, setClickTransition] = useMotor(0);

	useEffect(() => {
		setClickTransition(
			new Spring(clicking ? 1 : 0, {
				dampingRatio: 0.4,
				frequency: 5,
			}),
		);
	}, [clicking]);

	return (
		<Frame
			size={lerpBinding(clickTransition, new UDim2(0, 110, 0, 50), new UDim2(0, 120, 0, 60))}
			position={new UDim2(0, 10, 1, -10)}
			backgroundColor={style.overlay}
			backgroundTransparency={0.25}
			cornerRadius={new UDim(0, 8)}
			anchorPoint={new Vector2(0, 1)}
		>
			<Shadow shadowBlur={1} shadowSize={new UDim2(0, 10, 0, 10)} shadowColor={new Color3(0, 0, 0)} />
			<Frame size={new UDim2(0, 10, 1, 0)} backgroundColor={style.outline} cornerRadius={new UDim(0, 8)}>
				<Frame size={new UDim2(0, 5, 1, 0)} position={new UDim2(0, 5, 0, 0)} backgroundColor={style.outline} />
			</Frame>
			<Image size={new UDim2(0, 30, 0, 30)} position={new UDim2(0, 15, 0, 10)} image={images.ui.ball} />

			<Text
				size={new UDim2(0, 30, 0, 20)}
				position={new UDim2(0, 45, 0, 5)}
				textScaled={true}
				textColor={style.text}
				text="Balls"
				font={fonts.inter.bold}
			/>
			<Text
				size={new UDim2(0, 100, 0, 25)}
				position={new UDim2(0, 50, 0, 20)}
				textScaled={true}
				textColor={style.text}
				text={tostring(count)}
				font={fonts.robotoMono.regular}
				textXAlignment="Left"
			/>
			<Text
				size={new UDim2(0, 25, 0, 25)}
				position={new UDim2(1, -25, 0, 0)}
				textScaled
				text="+"
				font={fonts.inter.bold}
				textColor={style.text}
			/>

			<textbutton
				Size={new UDim2(1, 0, 1, 0)}
				BackgroundTransparency={1}
				Text=""
				Event={{
					MouseButton1Down: () => {
						setClicking(true);

						page !== "STORE" ? producer.setPage("STORE") : producer.setPage(undefined);

						playSound(SOUNDS.tap);
					},
					MouseButton1Up: () => {
						setClicking(false);
					},
					MouseLeave: () => {
						setClicking(false);
					},
				}}
			/>
		</Frame>
	);
}
