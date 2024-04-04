import { CollectionService, Workspace } from "@rbxts/services";
import { ATTRIBUTES } from "server/constants/attributes";
import { BALLS } from "server/constants/ball";
import { TAGS } from "server/constants/tags";

function applyRandomImpulse(ball: BasePart, min: number, max: number) {
	const impulseX = math.random(min, max);
	const impulseY = math.random(min, max);
	const impulseZ = math.random(min, max);

	const impulse = new Vector3(impulseX, impulseY, impulseZ);

	ball.ApplyImpulse(impulse);
}

export function spawnBall(ballNumber: number, impulse: boolean = false, position: Vector3 = new Vector3(0, 10, 0)) {
	const ballIndex = ballNumber - 1;
	const ball1Template = BALLS[ballIndex];

	const ball = ball1Template.Clone();
	ball.PivotTo(new CFrame(position));
	ball.SetAttribute(ATTRIBUTES.BALL_NUMBER, ballNumber);
	ball.Parent = Workspace;
	ball.SetNetworkOwner(undefined);

	CollectionService.AddTag(ball, TAGS.BALL);

	if (!impulse) return;

	applyRandomImpulse(ball, -10, 10);
}
