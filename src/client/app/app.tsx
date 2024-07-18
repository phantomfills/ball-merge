import React from "@rbxts/react";
import { BallCounter } from "client/components/ball";
import { Menu } from "client/components/menu/menu";
import { Music } from "client/components/music";
import { Layer } from "client/components/ui/layer";

export function App() {
	return (
		<>
			<Music />

			<Layer displayOrder={1}>
				<Menu />
			</Layer>

			<Layer displayOrder={2}>
				<BallCounter />
			</Layer>
		</>
	);
}
