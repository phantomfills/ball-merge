import React from "@rbxts/react";
import { InferState, combineProducers } from "@rbxts/reflex";
import { ReflexProvider } from "@rbxts/react-reflex";
import { ballSlice } from "./ball";
import { pageSlice } from "./page";

export type RootState = InferState<typeof producer>;

export const producer = combineProducers({
	ball: ballSlice,
	page: pageSlice,
});

export function RootProvider(props: React.PropsWithChildren) {
	return <ReflexProvider producer={producer}>{props.children}</ReflexProvider>;
}
