import { BALL_SPAWN_INTERVAL } from "shared/constants/ball";
import { spawnRandomBall } from "../utils";
import { observeTag } from "@rbxts/observers";
import { TAGS } from "shared/constants/tags";

export async function initSpawnerService() {
	observeTag(TAGS.BALL_SPAWNER, (ballSpawner: BasePart) => {
		const ballSpawnPosition = ballSpawner.Position;

		const ballSpawnerThread = task.spawn(() => {
			for (;;) {
				task.wait(BALL_SPAWN_INTERVAL);
				spawnRandomBall(true, ballSpawnPosition);
			}
		});

		return () => task.cancel(ballSpawnerThread);
	});
}
