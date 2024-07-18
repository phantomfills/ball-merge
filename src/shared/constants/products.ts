import { images } from "shared/assets";

interface Product {
	icon: string;
	name: string;
	id: number;
}

export const BALL_PRODUCTS: Product[] = [
	{
		icon: images.ui.bucket,
		name: "Ball Bucket",
		id: 1879629620,
	},
	{
		icon: images.ui.pool,
		name: "Ball Pool",
		id: 1879630349,
	},
	{
		icon: images.ui.city,
		name: "City O' Balls",
		id: 1879632424,
	},
	{
		icon: images.ui.world,
		name: "Ball World",
		id: 1879634560,
	},
] as const;
