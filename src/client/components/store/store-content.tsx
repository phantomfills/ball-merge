import React from "@rbxts/react";
import { Shadow } from "../ui/shadow";
import { Frame } from "../ui/frame";
import { BallProducts } from "./ball-products";

export function StoreContent() {
	return (
		<Frame
			size={new UDim2(0, 450, 0, 50)}
			position={new UDim2(0.5, 0, 0.5, -10)}
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
				<BallProducts />
			</Frame>
		</Frame>
	);
}
