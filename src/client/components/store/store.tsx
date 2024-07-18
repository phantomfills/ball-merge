import React from "@rbxts/react";
import { StoreOverlay } from "./store-overlay";
import { StoreBlur } from "./store-blur";
import { StoreContent } from "./store-content";
import { StoreFooter } from "./store-footer";

export function Store() {
	return (
		<>
			<StoreBlur />
			<StoreOverlay />

			<StoreContent />
			<StoreFooter />
		</>
	);
}
