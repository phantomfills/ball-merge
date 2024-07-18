import React from "@rbxts/react";
import Object from "@rbxts/object-utils";
import { BALL_PRODUCTS } from "shared/constants/products";
import { Shadow } from "../ui/shadow";
import { Frame } from "../ui/frame";
import { useProductPrice } from "client/hooks/use-product-price";
import { Image } from "../ui/image";
import { Text } from "../ui/text";
import { style } from "client/constants/style";
import { fonts } from "client/constants/fonts";
import { MarketplaceService, Players } from "@rbxts/services";

export function StoreContent() {
	const promptPurchase = (id: number) => {
		return async () => MarketplaceService.PromptProductPurchase(Players.LocalPlayer, id);
	};

	return (
		<Frame
			size={new UDim2(0, 450, 0, 50)}
			position={new UDim2(0.5, 0, 0.5, 0)}
			anchorPoint={new Vector2(0.5, 0.5)}
			backgroundTransparency={1}
		>
			<Shadow shadowBlur={1} shadowSize={new UDim2(0, 10, 0, 10)} shadowColor={new Color3(0, 0, 0)} zIndex={0} />
			<Frame size={new UDim2(1, 0, 1, 0)} backgroundTransparency={1}>
				<uipadding PaddingTop={new UDim(0, 10)} PaddingLeft={new UDim(0, 10)} />
				<uigridlayout
					CellSize={new UDim2(1, 0, 0, 50)}
					CellPadding={new UDim2(0, 0, 0, 10)}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				{Object.values(BALL_PRODUCTS).map(({ name, id, icon, value }) => {
					const price = useProductPrice(id);

					return (
						<>
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
									size={new UDim2(0, 260, 0, 30)}
									text={`${name} <b>(${value})</b>`}
									textColor={style.text}
									textScaled
									font={fonts.robotoMono.regular}
									textXAlignment="Left"
								/>
								<Frame
									size={new UDim2(0, 100, 0, 30)}
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
										Size={new UDim2(1, 0, 1, 0)}
										BackgroundTransparency={1}
										ZIndex={2}
										Event={{ MouseButton1Click: promptPurchase(id) }}
									/>
								</Frame>
							</Frame>
						</>
					);
				})}
			</Frame>
		</Frame>
	);
}
