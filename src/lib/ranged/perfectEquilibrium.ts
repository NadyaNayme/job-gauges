/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const bolgImage = a1lib.webpackImages({
	active: require('../.././asset/data/ranged/perfectEquilibrium.data.png'),
	inactive: require('../.././asset/data/ranged/perfectEquilibrium-inactive.data.png'),
});

let scaledOnce = false;
let lastStacks = 0;

export async function peOverlay(gauges: Overlay) {
	const { perfectEquilibrium } = gauges.ranged;
	const { stacks } = gauges.ranged.perfectEquilibrium;

	if (!perfectEquilibrium.isActiveOverlay) {
		return;
	}

	await bolgImage.promise;

	if (!scaledOnce) {
		Object.keys(bolgImage).forEach(async (key) => {
			bolgImage[key] = await utility.resizeImageData(
				bolgImage[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	const { position } = perfectEquilibrium;
	const { x, y } = position.active_orientation;

	alt1.overLaySetGroup('PerfectEquilibrium');

	if (gauges.ranged.balanceByForce) {
		displayBuffImage(bolgImage.active);
	} else {
		displayBuffImage(bolgImage.inactive);
	}

	if (stacks !== lastStacks) {
		displayStacks(stacks);
		lastStacks = stacks;
	}

	function displayBuffImage(image: ImageData): void {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.ranged.position.x + x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.ranged.position.y + y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(image.toDrawableData()),
			image.width,
			1000
		);
	}

	function displayStacks(stacks: number): void {
		alt1.overLaySetGroup(`PerfectEquilibrium_Text`);
		alt1.overLayFreezeGroup(`PerfectEquilibrium_Text`);
		alt1.overLayClearGroup(`PerfectEquilibrium_Text`);
		alt1.overLayTextEx(
			stacks === 0 ? '0' : stacks.toString(),
			utility.white,
			14,
			utility.adjustPositionForScale(
				gauges.ranged.position.x + x + 26,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.ranged.position.y + y + 26,
				gauges.scaleFactor
			),
			30000,
			undefined,
			true,
			true
		);
		alt1.overLayRefreshGroup('PerfectEquilibrium_Text');
	}

}
