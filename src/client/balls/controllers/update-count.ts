import { CollectionService } from "@rbxts/services";
import { producer } from "client/store";
import { TAGS } from "shared/constants/tags";

function updateCount() {
	const count = CollectionService.GetTagged(TAGS.BALL).size();
	producer.setBallCount(count);
}

export function initCountService() {
	CollectionService.GetInstanceAddedSignal(TAGS.BALL).Connect(updateCount);
	CollectionService.GetInstanceRemovedSignal(TAGS.BALL).Connect(updateCount);
}
