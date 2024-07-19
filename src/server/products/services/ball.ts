import { BALL_PRODUCTS } from "shared/constants/products";
import { createProduct } from "./process-receipt";
import { spawnBall } from "server/balls/utils";

function spawnBalls(amount: number) {
	for (let i = 0; i < amount; i++) {
		task.wait(0.01);

		const x = math.random(-30, 30);
		const z = math.random(-30, 30);
		spawnBall(1, new Vector3(0, 0, 0), new Vector3(x, 5, z));
	}
}

export async function initBallProductService() {
	createProduct(BALL_PRODUCTS.BUCKET.id, () => spawnBalls(BALL_PRODUCTS.BUCKET.value));
	createProduct(BALL_PRODUCTS.POOL.id, () => spawnBalls(BALL_PRODUCTS.POOL.value));
	createProduct(BALL_PRODUCTS.CITY.id, () => spawnBalls(BALL_PRODUCTS.CITY.value));
	createProduct(BALL_PRODUCTS.WORLD.id, () => spawnBalls(BALL_PRODUCTS.WORLD.value));
}
