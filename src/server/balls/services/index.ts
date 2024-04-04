import { initCombinerService } from "./combiner";
import { initSpawnerService } from "./spawner";

export function initBallServices() {
	initSpawnerService();
	initCombinerService();
}
