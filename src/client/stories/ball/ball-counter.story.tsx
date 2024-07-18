import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { BallCounter } from "client/components/ball";
import { RootProvider } from "client/store";

export = (target: Frame) => {
	const ballCounter = (
		<RootProvider>
			<BallCounter />
		</RootProvider>
	);

	const root = createRoot(target);
	root.render(ballCounter);

	return () => {
		root.unmount();
	};
};
