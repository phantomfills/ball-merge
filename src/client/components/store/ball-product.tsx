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
import { ReactiveButton } from "../ui/reactive-button";

interface BallProductProps {
	name: string;
	icon: string;
	id: number;
	value: number;
}

export function BallProduct({ name, icon, id, value }: BallProductProps) {
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
			<ReactiveButton
				size={new UDim2(0, 100, 0, 30)}
				cornerRadius={new UDim(0, 8)}
				backgroundColor={style.text}
				onClick={() => {
					playSound(SOUNDS.buy);
					promptPurchase();
				}}
			>
				<Text
					size={new UDim2(1, 0, 1, 0)}
					text={`${RobloxEmoji.Robux}${price}`}
					font={fonts.robotoMono.regular}
					textColor={style.background}
				/>
			</ReactiveButton>
		</Frame>
	);
}
