import React from "@rbxts/react";
import { Frame } from "../ui/frame";
import { Image } from "../ui/image";
import { images } from "shared/assets";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";
import { Shadow } from "../ui/shadow";
import { style } from "client/constants/style";
import { Outline } from "../ui/outline";

interface BallCounterProps {
	count: number;
}

export function BallCounter({ count }: BallCounterProps) {
	return (
		<Frame
			size={new UDim2(0, 110, 0, 50)}
			position={new UDim2(0, 10, 1, -60)}
			backgroundColor={style.overlay}
			backgroundTransparency={0.25}
			cornerRadius={new UDim(0, 8)}
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
		</Frame>
	);
}
