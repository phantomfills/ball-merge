import { useEventListener } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { createSound } from "shared/utils/sound";
import { shuffle } from "shared/utils/object";

const MUSIC = [
	"rbxassetid://9046863253", // Poolside
	"rbxassetid://9046863960", // Beachwave
	"rbxassetid://9039767824", // Confession
	"rbxassetid://9039769202", // Santa Ervilio
	"rbxassetid://9039768724", // Friends
	"rbxassetid://9047050075", // Lo Fi Dreams Hip Hop
	"rbxassetid://9039771403", // Opportunity
	"rbxassetid://9039770227", // It s For Me
	"rbxassetid://9047105000", // I'll Show Ya
	"rbxassetid://9046863579", // City Lights
	"rbxassetid://9047105308", // Dusk To Dawn
	"rbxassetid://9047105702", // Light Dreamer
	"rbxassetid://9047105533", // No Smoking
];

export function Music() {
	const [queue, setQueue] = useState(() => shuffle(MUSIC));
	const [index, setIndex] = useState(0);
	const [sound, setSound] = useState<Sound>();

	// Advance the queue when the song ends
	useEventListener(sound?.Ended, () => {
		setIndex(index + 1);
	});

	// Create the next song when the index changes
	useEffect(() => {
		if (index >= queue.size()) {
			// Shuffle the queue if we've reached the end
			setQueue(shuffle(MUSIC));
			setIndex(0);
			return;
		}

		const newSound = createSound(queue[index], { volume: 0.2 });

		setSound(newSound);

		return () => {
			newSound.Destroy();
		};
	}, [index]);

	// Destroy sounds not in use
	useEffect(() => {
		sound?.Play();

		return () => {
			sound?.Destroy();
		};
	}, [sound]);

	return <></>;
}