import React from "@rbxts/react";
import { InferState, combineProducers } from "@rbxts/reflex";
import { ReflexProvider } from "@rbxts/react-reflex";
import { ballSlice } from "./ball";

export type RootState = InferState<typeof producer>;

export const producer = combineProducers({
	ball: ballSlice,
});

export function RootProvider(props: React.PropsWithChildren) {
	return <ReflexProvider producer={producer}>{props.children}</ReflexProvider>;
}
