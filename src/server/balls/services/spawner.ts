import { BALL_SPAWN_INTERVAL, MAX_BALLS } from "shared/constants/ball";
import { getRandomImpulse, spawnRandomBall } from "../utils";
import { observeTag } from "@rbxts/observers";
import { TAGS } from "shared/constants/tags";
import { CollectionService } from "@rbxts/services";

const BALL_IMPULSE_MIN = -35;
const BALL_IMPULSE_MAX = 35;

function getMaxBallsReached() {
	return CollectionService.GetTagged(TAGS.BALL).size() >= MAX_BALLS;
}

export async function initSpawnerService() {
	observeTag(TAGS.BALL_SPAWNER, (ballSpawner: BasePart) => {
		const ballSpawnPosition = ballSpawner.Position;

		const ballSpawnerThread = task.spawn(() => {
			for (;;) {
				task.wait(BALL_SPAWN_INTERVAL);

				const maxBallsReached = getMaxBallsReached();
				if (maxBallsReached) continue;

				const impulse = getRandomImpulse(BALL_IMPULSE_MIN, BALL_IMPULSE_MAX);
				spawnRandomBall(impulse, ballSpawnPosition);
			}
		});

		return () => task.cancel(ballSpawnerThread);
	});
}
