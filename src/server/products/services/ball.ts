import { BALL_PRODUCTS } from "shared/constants/products";
import { createProduct } from "./process-receipt";
import { spawnBall } from "server/balls/utils";

function spawnBalls(amount: number) {
	for (let i = 0; i < amount; i++) {
		task.wait(0.01);

		spawnBall(1);
	}
}

export async function initBallProductService() {
	createProduct(BALL_PRODUCTS.BUCKET.id, () => spawnBalls(BALL_PRODUCTS.BUCKET.value));
	createProduct(BALL_PRODUCTS.POOL.id, () => spawnBalls(BALL_PRODUCTS.POOL.value));
	createProduct(BALL_PRODUCTS.CITY.id, () => spawnBalls(BALL_PRODUCTS.CITY.value));
	createProduct(BALL_PRODUCTS.WORLD.id, () => spawnBalls(BALL_PRODUCTS.WORLD.value));
}
