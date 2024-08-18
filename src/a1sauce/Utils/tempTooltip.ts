import { timeout } from "./timeout";

/* Must only be called after `window.onload` checks for `window.alt1` */
export const tempTooltip = (msg: string, time: number): void => {
	if (window.alt1 === undefined) throw new Error('Alt1 not detected in window object');
	alt1.setTooltip(msg);
	timeout(time).then(() => {
		alt1.clearTooltip();
	});
};
