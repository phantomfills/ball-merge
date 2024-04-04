import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { BallCounter } from "client/components/ball";

export = (target: Frame) => {
	const ballCounter = <BallCounter count={99} />;

	const root = createRoot(target);
	root.render(ballCounter);

	return () => {
		root.unmount();
	};
};
