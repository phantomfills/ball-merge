import { images } from "shared/assets";

interface Product {
	icon: string;
	name: string;
	id: number;
}

interface BallProduct extends Product {
	value: number;
}

export const BALL_PRODUCTS: Record<string, BallProduct> = {
	BUCKET: {
		icon: images.ui.bucket,
		name: "Bucket O' Balls",
		id: 1879629620,
		value: 100,
	},
	POOL: {
		icon: images.ui.pool,
		name: "Pool O' Balls",
		id: 1879630349,
		value: 500,
	},
	CITY: {
		icon: images.ui.city,
		name: "City O' Balls",
		id: 1879632424,
		value: 2500,
	},
	WORLD: {
		icon: images.ui.world,
		name: "Planet Ball",
		id: 1879634560,
		value: 15000,
	},
} as const;
