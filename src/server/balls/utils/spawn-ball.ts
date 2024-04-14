import { CollectionService, Workspace } from "@rbxts/services";
import { ATTRIBUTES } from "shared/constants/attributes";
import { BALLS } from "shared/constants/ball";
import { TAGS } from "shared/constants/tags";

export function getRandomImpulse(min: number, max: number) {
	const impulseX = math.random(min, max);
	const impulseY = math.random(min, max);
	const impulseZ = math.random(min, max);

	const impulse = new Vector3(impulseX, impulseY, impulseZ);

	return impulse;
}

export function spawnBall(
	ballNumber: number,
	impulse: Vector3 = new Vector3(0, 0, 0),
	position: Vector3 = new Vector3(0, 10, 0),
) {
	const ballIndex = ballNumber - 1;
	const ballTemplate = BALLS[ballIndex];

	const ball = ballTemplate.Clone();
	ball.PivotTo(new CFrame(position));
	ball.SetAttribute(ATTRIBUTES.BALL_NUMBER, ballNumber);
	ball.Parent = Workspace;
	ball.SetNetworkOwner(undefined);
	ball.Massless = true;

	CollectionService.AddTag(ball, TAGS.BALL);

	ball.ApplyImpulse(impulse);
}

export function spawnRandomBall(impulse?: Vector3, position?: Vector3) {
	const ballNumber = math.random(1, 3);
	spawnBall(ballNumber, impulse, position);
}
