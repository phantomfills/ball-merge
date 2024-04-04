import { BALL_SPAWN_INTERVAL } from "shared/constants/ball";
import { spawnBall } from "../utils";

export async function initSpawnerService() {
	for (;;) {
		spawnBall(1, true);
		task.wait(BALL_SPAWN_INTERVAL);
	}
}
