import { initCombinerService } from "./combiner";
import { initNetworkOwnershipService } from "./network-ownership";
import { initSpawnerService } from "./spawner";

export function initBallServices() {
	initSpawnerService();
	initCombinerService();
	initNetworkOwnershipService();
}
