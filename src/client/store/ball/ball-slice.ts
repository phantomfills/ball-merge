import { createProducer } from "@rbxts/reflex";

interface BallState {
	ballCount: number;
}

const initialState: BallState = {
	ballCount: 0,
};

export const ballSlice = createProducer(initialState, {
	setBallCount: (state, ballCount: number) => ({
		...state,
		ballCount,
	}),
});
