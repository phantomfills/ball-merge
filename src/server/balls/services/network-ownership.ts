import { observeTag } from "@rbxts/observers";
import { Players } from "@rbxts/services";
import { TAGS } from "shared/constants/tags";

export function initNetworkOwnershipService() {
	observeTag(TAGS.BALL, (part: BasePart) => {
		const connection = part.Touched.Connect((hitPart) => {
			const character = hitPart.Parent;
			if (!character) return;
			if (!character.IsA("Model")) return;

			const humanoid = character.FindFirstChildWhichIsA("Humanoid");
			if (!humanoid) return;

			const player = Players.GetPlayerFromCharacter(character);
			if (!player) return;

			part.SetNetworkOwner(player);
		});

		return () => {
			connection.Disconnect();
		};
	});
}
