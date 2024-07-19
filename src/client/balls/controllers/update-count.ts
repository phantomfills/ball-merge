import { CollectionService } from "@rbxts/services";
import { SOUNDS } from "client/constants/sounds";
import { producer } from "client/store";
import { playSound } from "client/utils/sound";
import { TAGS } from "shared/constants/tags";

let prevCount = 0;

function updateCount() {
	const count = CollectionService.GetTagged(TAGS.BALL).size();
	producer.setBallCount(count);

	if (prevCount < count) {
		playSound(SOUNDS.pop);
	} else {
		playSound(SOUNDS.merge);
	}

	prevCount = count;
}

export function initCountService() {
	CollectionService.GetInstanceAddedSignal(TAGS.BALL).Connect(updateCount);
	CollectionService.GetInstanceRemovedSignal(TAGS.BALL).Connect(updateCount);
}
