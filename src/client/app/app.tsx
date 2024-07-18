import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { BallCounter } from "client/components/ball";
import { Menu } from "client/components/menu/menu";
import { Music } from "client/components/music";
import { Layer } from "client/components/ui/layer";
import { selectBallCount } from "client/store/ball";

export function App() {
	const count = useSelector(selectBallCount);

	return (
		<>
			<Music />

			<Layer displayOrder={1}>
				<Menu />
			</Layer>

			<Layer displayOrder={2}>
				<BallCounter count={count} />
			</Layer>
		</>
	);
}
