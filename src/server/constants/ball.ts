import { ReplicatedStorage } from "@rbxts/services";

const ballsFolder = ReplicatedStorage.assets.balls;

export const BALL_SPAWN_INTERVAL = 10;

export const BALLS = [
	ballsFolder.ball_1,
	ballsFolder.ball_2,
	ballsFolder.ball_3,
	ballsFolder.ball_4,
	ballsFolder.ball_5,
	ballsFolder.ball_6,
	ballsFolder.ball_7,
	ballsFolder.ball_8,
	ballsFolder.ball_9,
	ballsFolder.ball_10,
] as const;

export function ballNumberIsOutOfBounds(ballNumber: number) {
	return ballNumber < 1 || ballNumber > BALLS.size();
}
