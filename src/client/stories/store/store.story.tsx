import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { Store } from "client/components/store/store";

export = (target: Frame) => {
	const store = <Store />;

	const root = createRoot(target);
	root.render(store);

	return () => {
		root.unmount();
	};
};
