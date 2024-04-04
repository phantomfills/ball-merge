import { ReplicatedStorage } from "@rbxts/services";

const ballsFolder = ReplicatedStorage.assets.balls;

export const BALLS = [
	ballsFolder.ball_1,
	ballsFolder.ball_2,
	ballsFolder.ball_3,
	ballsFolder.ball_4,
	ballsFolder.ball_5,
] as const;
