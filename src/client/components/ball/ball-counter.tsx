import React = require("@rbxts/react");
import { Frame } from "../ui/frame";
import { Outline } from "../ui/outline";
import { Image } from "../ui/image";
import { images } from "shared/assets";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";

interface BallCounterProps {
	count: number;
}

export function BallCounter({ count }: BallCounterProps) {
	return (
		<Frame
			size={new UDim2(0, 100, 0, 50)}
			position={new UDim2(0, 10, 1, -60)}
			backgroundColor={Color3.fromRGB(0, 5, 23)}
			backgroundTransparency={0.5}
			cornerRadius={new UDim(0, 8)}
		>
			<Outline
				innerThickness={1}
				outerThickness={1}
				innerColor={Color3.fromRGB(255, 255, 255)}
				outerColor={Color3.fromRGB(255, 255, 255)}
				innerTransparency={0}
				outerTransparency={0.5}
				cornerRadius={new UDim(0, 8)}
			/>
			<Image size={new UDim2(0, 30, 0, 30)} position={new UDim2(0, 10, 0, 10)} image={images.ui.ball} />
			<Text
				size={new UDim2(0, 40, 0, 40)}
				position={new UDim2(0, 50, 0, 5)}
				textScaled={true}
				textColor={Color3.fromRGB(255, 255, 255)}
				text={tostring(count)}
				font={fonts.inter.medium}
			/>
		</Frame>
	);
}
