import React, { useEffect, useState } from "@rbxts/react";
import { Frame } from "../ui/frame";
import { playSound } from "client/utils/sound";
import { MarketplaceService, Players } from "@rbxts/services";
import { Text } from "../ui/text";
import { Image } from "../ui/image";
import { style } from "client/constants/style";
import { fonts } from "client/constants/fonts";
import { SOUNDS } from "client/constants/sounds";
import { useProductPrice } from "client/hooks/use-product-price";
import { lerpBinding, Spring, useMotor } from "@rbxts/pretty-react-hooks";

interface BallProductProps {
	name: string;
	icon: string;
	id: number;
	value: number;
}

export function BallProduct({ name, icon, id, value }: BallProductProps) {
	const [buyHover, setBuyHover] = useState(false);
	const [buyTransition, setBuyTransition] = useMotor(0);

	useEffect(() => {
		setBuyTransition(
			new Spring(buyHover ? 1 : 0, {
				dampingRatio: 0.4,
				frequency: 5,
			}),
		);
	}, [buyHover]);

	const price = useProductPrice(id);

	const promptPurchase = async () => {
		MarketplaceService.PromptProductPurchase(Players.LocalPlayer, id);
	};

	return (
		<Frame backgroundTransparency={1} key={id}>
			<uilistlayout
				FillDirection="Horizontal"
				HorizontalAlignment="Left"
				VerticalAlignment="Center"
				Padding={new UDim(0, 10)}
			/>
			<Image size={new UDim2(0, 50, 0, 50)} image={icon} />
			<Text
				richText
				size={new UDim2(0, 260, 0, 25)}
				text={`${name} <b>(${value})</b>`}
				textColor={style.text}
				textScaled
				font={fonts.robotoMono.regular}
				textXAlignment="Left"
			/>
			<Frame
				size={lerpBinding(buyTransition, new UDim2(0, 100, 0, 30), new UDim2(0, 110, 0, 33))}
				cornerRadius={new UDim(0, 8)}
				backgroundColor={style.text}
			>
				<Text
					size={new UDim2(1, 0, 1, 0)}
					text={`${RobloxEmoji.Robux}${price}`}
					font={fonts.robotoMono.regular}
					textColor={style.background}
				/>
				<textbutton
					Text=""
					Size={new UDim2(1, 20, 1, 20)}
					Position={new UDim2(0, -10, 0, -10)}
					BackgroundTransparency={1}
					ZIndex={2}
					Event={{
						MouseButton1Click: () => {
							playSound(SOUNDS.buy);
							promptPurchase();
						},
						MouseEnter: () => {
							setBuyHover(true);
						},
						MouseLeave: () => {
							setBuyHover(false);
						},
					}}
				/>
			</Frame>
		</Frame>
	);
}
