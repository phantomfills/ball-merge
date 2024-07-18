import { createProducer } from "@rbxts/reflex";

const PAGES = ["STORE"] as const;
type Page = (typeof PAGES)[number];

interface PageState {
	page: Page | undefined;
}

const initialState: PageState = {
	page: undefined,
};

export const pageSlice = createProducer(initialState, {
	setPage: (state, page: Page | undefined) => {
		return {
			...state,
			page,
		};
	},
});
