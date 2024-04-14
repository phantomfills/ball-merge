import { CollectionService } from "@rbxts/services";
import { TAGS } from "shared/constants/tags";
import { spawnBall } from "../utils";
import { ATTRIBUTES } from "shared/constants/attributes";
import { ballNumberIsOutOfBounds, BALLS } from "shared/constants/ball";
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

		// Find max velocity of the two balls and apply it to the new ball
		const ballVelocity1 = ball.AssemblyLinearVelocity;
		const ballVelocity2 = touchedBall.AssemblyLinearVelocity;

		const ballVelocityMagnitude1 = ballVelocity1.Magnitude;
		const ballVelocityMagnitude2 = ballVelocity2.Magnitude;

		const maxBallVelocityMagnitude = math.max(ballVelocityMagnitude1, ballVelocityMagnitude2);
		const impulseToApply = (
			maxBallVelocityMagnitude === ballVelocityMagnitude1 ? ballVelocity1 : ballVelocity2
		).mul(10); // Multiply by 10 to make the new ball go faster

		const newPosition = ball.Position.add(new Vector3(0, 2.5, 0));
		spawnBall(ballNumber + 1, impulseToApply, newPosition);
		createMergeParticles(
			newPosition,
			newBallNumber * 2,
			0.5,
			(newBallNumber * 10) ^ 0.75,
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
