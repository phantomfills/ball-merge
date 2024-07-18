import React from "@rbxts/react";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";
import { useRem } from "client/hooks/use-rem";
import { style } from "client/constants/style";

const colorize = (text: string, color: Color3) => {
	return `<font transparency="0" color="#${color.ToHex()}">${text}</font>`;
};

export function StoreFooter() {
	const rem = useRem();

	return (
		<Text
			richText
			font={fonts.inter.medium}
			text={[
				"Your support helps me to make",
				[
					colorize("m", Color3.fromRGB(166, 48, 48)),
					colorize("a", Color3.fromRGB(145, 110, 41)),
					colorize("g", Color3.fromRGB(156, 156, 33)),
					colorize("i", Color3.fromRGB(0, 128, 0)),
					colorize("c", Color3.fromRGB(0, 120, 255)),
					colorize("a", Color3.fromRGB(120, 56, 168)),
					colorize("l", Color3.fromRGB(171, 69, 171)),
				].join(""),
				'experiences <font transparency="0">✨</font>',
			].join(" ")}
			textColor={style.text}
			textTransparency={0.5}
			textSize={rem(1.25)}
			textXAlignment="Center"
			textYAlignment="Bottom"
			position={new UDim2(0.5, 0, 1, -rem(3))}
		/>
	);
}
