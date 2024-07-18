import React from "@rbxts/react";
import { Frame } from "../ui/frame";
import { style } from "client/constants/style";
import { Shadow } from "../ui/shadow";
import { Outline } from "../ui/outline";
import { BALL_PRODUCTS } from "shared/constants/products";
import { Image } from "../ui/image";
import { Text } from "../ui/text";
import { fonts } from "client/constants/fonts";
import { useProductPrice } from "client/hooks/use-product-price";
import { MarketplaceService, Players } from "@rbxts/services";

export function Store() {
	const promptPurchase = (id: number) => {
		return async () => MarketplaceService.PromptProductPurchase(Players.LocalPlayer, id);
	};

	return (
		<Frame
			size={new UDim2(0, 450, 0, 300)}
			position={new UDim2(0.5, 0, 0.5, 0)}
			anchorPoint={new Vector2(0.5, 0.5)}
			backgroundColor={style.background}
			cornerRadius={new UDim(0, 8)}
		>
			<Shadow shadowBlur={1} shadowSize={new UDim2(0, 10, 0, 10)} shadowColor={new Color3(0, 0, 0)} zIndex={0} />
			<Outline
				innerThickness={1}
				outerThickness={1}
				innerColor={style.outline}
				outerColor={style.outline}
				innerTransparency={0}
				outerTransparency={0.8}
			/>
			<Frame size={new UDim2(1, 0, 1, 0)} backgroundTransparency={1}>
				<uipadding PaddingTop={new UDim(0, 10)} PaddingLeft={new UDim(0, 10)} />
				<uigridlayout CellSize={new UDim2(1, 0, 0, 50)} CellPadding={new UDim2(0, 0, 0, 10)} />
				{BALL_PRODUCTS.map(({ name, id, icon }) => {
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
									size={new UDim2(0, 260, 0, 30)}
									text={name}
									textColor={style.text}
									textScaled={true}
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
