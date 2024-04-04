import { CollectionService } from "@rbxts/services";
import { TAGS } from "server/constants/tags";
import { spawnBall } from "../utils";
import { ATTRIBUTES } from "server/constants/attributes";
import { ballNumberIsOutOfBounds, BALLS } from "server/constants/ball";
import { createMergeParticles } from "shared/utils/vfx";

function handleBallAdded(ball: Instance) {
	if (!ball.IsA("BasePart")) return;

	const ballNumber = ball.GetAttribute(ATTRIBUTES.BALL_NUMBER);
	if (ballNumber === undefined || !typeIs(ballNumber, "number")) return;

	ball.Touched.Connect((touchedBall) => {
		if (!CollectionService.HasTag(touchedBall, TAGS.BALL)) return;
		if (!touchedBall.IsA("BasePart")) return;

		const touchedBallNumber = touchedBall.GetAttribute(ATTRIBUTES.BALL_NUMBER);
		if (touchedBallNumber === undefined || !typeIs(touchedBallNumber, "number")) return;
		if (ballNumber !== touchedBallNumber) return;

		const newBallNumber = ballNumber + 1;
		if (ballNumberIsOutOfBounds(newBallNumber)) return;

		const newPosition = ball.Position.add(new Vector3(0, 2.5, 0));
		spawnBall(ballNumber + 1, false, newPosition);
		createMergeParticles(
			newPosition,
			newBallNumber,
			newBallNumber / 5,
			newBallNumber * 2.5,
			BALLS[newBallNumber - 1].Color,
		);

		ball.Destroy();
		touchedBall.Destroy();
	});
}

export function initCombinerService() {
	CollectionService.GetTagged(TAGS.BALL).forEach(handleBallAdded);
	CollectionService.GetInstanceAddedSignal(TAGS.BALL).Connect(handleBallAdded);
}
