import { spawnBall } from "../utils";

export async function initSpawnerService() {
	for (;;) {
		spawnBall(1);
		task.wait(5);
	}
}
