import { CollectionService, Workspace } from "@rbxts/services";
import { ATTRIBUTES } from "server/constants/attributes";
import { BALLS } from "server/constants/ball";
import { TAGS } from "server/constants/tags";

export function spawnBall(ballNumber: number) {
	const ballIndex = ballNumber - 1;
	const ball1Template = BALLS[ballIndex];

	const ball = ball1Template.Clone();
	ball.Position = new Vector3(0, 10, 0);
	ball.Parent = Workspace;
	ball.SetNetworkOwner(undefined);

	CollectionService.AddTag(ball, TAGS.BALL);
	ball.SetAttribute(ATTRIBUTES.BALL_NUMBER, ballNumber);
}
