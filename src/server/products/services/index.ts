import { initBallProductService } from "./ball";
import { initProcessReceiptService } from "./process-receipt";

export function initProductServices() {
	initProcessReceiptService();
	initBallProductService();
}
