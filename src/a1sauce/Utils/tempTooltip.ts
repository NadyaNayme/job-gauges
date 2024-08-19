import { timeout } from "./timeout";

/* Must only be called after `window.onload` checks for `window.alt1` */
export const tempTooltip = (msg: string, time: number): void => {
	if (window.alt1 === undefined)
		throw new Error('Alt1 not detected in window object');

	/*
	 * It isn't possible to mock the alt1 call and since window.alt1 must exist
	 * for apps to work the below code is guaranteed to work if we get past the above check
	 */
	/* c8 ignore start */
	alt1.setTooltip(msg);
	timeout(time).then(() => {
		alt1.clearTooltip();
	});
	/* c8 ignore end */
};
