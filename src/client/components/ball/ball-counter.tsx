import React = require("@rbxts/react");
import { Frame } from "../ui/frame";
import { Outline } from "../ui/outline";
import { Image } from "../ui/image";
import { images } from "shared/assets";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";
import { Shadow } from "../ui/shadow";
import { style } from "client/constants/style";

interface BallCounterProps {
	count: number;
}

export function BallCounter({ count }: BallCounterProps) {
	return (
		<Frame
			size={new UDim2(0, 100, 0, 50)}
			position={new UDim2(0, 10, 1, -60)}
			backgroundColor={style.overlay}
			backgroundTransparency={0.5}
			cornerRadius={new UDim(0, 8)}
		>
			<Shadow shadowBlur={1} shadowSize={new UDim2(0, 10, 0, 10)} shadowColor={new Color3(0, 0, 0)} />
			<Outline
				innerThickness={1}
				outerThickness={1}
				innerColor={style.outline}
				outerColor={style.outline}
				innerTransparency={0}
				outerTransparency={0.8}
				cornerRadius={new UDim(0, 3)}
			/>
			<Image size={new UDim2(0, 30, 0, 30)} position={new UDim2(0, 10, 0, 10)} image={images.ui.ball} />
			<Text
				size={new UDim2(0, 40, 0, 40)}
				position={new UDim2(0, 50, 0, 5)}
				textScaled={true}
				textColor={style.text}
				text={tostring(count)}
				font={fonts.robotoMono.regular}
			/>
		</Frame>
	);
}
