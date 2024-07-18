import React from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";
import { Lighting } from "@rbxts/services";

export function StoreBlur() {
	return createPortal(<blureffect />, Lighting);
}
