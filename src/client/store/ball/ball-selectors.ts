import { RootState } from "..";

export function selectBallCount(state: RootState) {
	return state.ball.ballCount;
}
