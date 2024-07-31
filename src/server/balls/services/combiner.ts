import { TAGS } from "shared/constants/tags";
import { ATTRIBUTES } from "shared/constants/attributes";
import { BallPart, ballNumberIsOutOfBounds, isBallPart } from "shared/constants/ball";
import { playBallMergeAnimation } from "shared/utils/vfx";
import { observeTag } from "@rbxts/observers";

function handleBallAdded(part: BallPart) {
	const ballNumber = part.GetAttribute(ATTRIBUTES.BALL_NUMBER);
	if (ballNumber === undefined || !typeIs(ballNumber, "number")) return;

	const connection = part.Touched.Connect((touchedBall) => {
		if (!isBallPart(touchedBall)) return;

		const touchedBallNumber = touchedBall.GetAttribute(ATTRIBUTES.BALL_NUMBER);
		if (touchedBallNumber === undefined || !typeIs(touchedBallNumber, "number")) return;
		if (ballNumber !== touchedBallNumber) return;

		const newBallNumber = ballNumber + 1;
		if (ballNumberIsOutOfBounds(newBallNumber)) return;

		playBallMergeAnimation(part, touchedBall, newBallNumber);
	});

	return () => connection.Disconnect();
}

export function initCombinerService() {
	observeTag(TAGS.BALL, (part: BallPart) => {
		const disconnect = handleBallAdded(part);
		if (!disconnect) return () => {};
		return disconnect;
	});
}
