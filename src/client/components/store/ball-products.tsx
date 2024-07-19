import React from "@rbxts/react";
import Object from "@rbxts/object-utils";
import { BallProduct } from "./ball-product";
import { BALL_PRODUCTS } from "shared/constants/products";

export function BallProducts() {
	return Object.values(BALL_PRODUCTS).map(({ name, id, icon, value }) => {
		return <BallProduct key={id} name={name} id={id} icon={icon} value={value} />;
	});
}
