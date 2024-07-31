import { CollectionService, TweenService } from "@rbxts/services";
import { ATTRIBUTES } from "shared/constants/attributes";
import { BallPart, BALLS } from "shared/constants/ball";
import { TAGS } from "shared/constants/tags";

const BALL_TWEEN_INFO = new TweenInfo(0.15, Enum.EasingStyle.Sine, Enum.EasingDirection.Out, 0, false, 0);

export function playBallMergeAnimation(ballA: BallPart, ballB: BallPart, mergedBallNumber: number) {
	CollectionService.RemoveTag(ballA, TAGS.BALL);
	CollectionService.RemoveTag(ballB, TAGS.BALL);

	ballA.Anchored = true;
	ballB.Anchored = true;

	// Tween ballA's position to ballB's position
	const ballATweenProps = {
		CFrame: ballB.GetPivot(),
		Transparency: 1,
	};
	const ballTween = TweenService.Create(ballA, BALL_TWEEN_INFO, ballATweenProps);
	ballTween.Play();
	ballTween.Completed.Once(() => {
		ballA.Destroy();
	});

	// Tween ballB's size to the size of the merged ball
	const mergedBall = BALLS[mergedBallNumber];

	const ballBTweenProps = {
		Size: mergedBall.Size,
		Color: mergedBall.Color,
		CFrame: ballB.GetPivot().add(new Vector3(0, 0.25, 0)),
	};
	const ballBTween = TweenService.Create(ballB, BALL_TWEEN_INFO, ballBTweenProps);
	ballBTween.Play();
	ballBTween.Completed.Once(() => {
		ballB.SetAttribute(ATTRIBUTES.BALL_NUMBER, mergedBallNumber);
		CollectionService.AddTag(ballB, TAGS.BALL);

		ballB.face.Texture = mergedBall.face.Texture;
		ballB.Anchored = false;
	});
}
