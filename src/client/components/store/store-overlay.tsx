import React from "@rbxts/react";
import { Frame } from "../ui/frame";

export function StoreOverlay() {
	return (
		<Frame
			size={new UDim2(1, 0, 1, 0)}
			backgroundColor={Color3.fromRGB(0, 3, 92)}
			backgroundTransparency={0.4}
			zIndex={0}
		/>
	);
}
