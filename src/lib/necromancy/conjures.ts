/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const conjureImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/necromancy/conjure-undead-army/active.data.png'),
	inactive: require('../../asset/gauge-ui/necromancy/conjure-undead-army/inactive.data.png'),
});

const white = a1lib.mixColor(255, 255, 255);
let lastMinValue: number = 0;

let scaledOnce = false;

export async function conjureOverlay(gauges: Overlay) {
	if (!gauges.necromancy.conjures.isActiveOverlay) {
		return;
	}

	await conjureImages.promise;

	if (!scaledOnce) {
		Object.keys(conjureImages).forEach(async (key) => {
			conjureImages[key] = await utility.resizeImageData(
				conjureImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	alt1.overLaySetGroup('Undead_Army');
	if (gauges.necromancy.conjures.active) {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					gauges.necromancy.conjures.position.active_orientation.x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					gauges.necromancy.conjures.position.active_orientation.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(conjureImages.active.toDrawableData()),
			conjureImages.active.width,
			1000
		);
	} else {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					gauges.necromancy.conjures.position.active_orientation.x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					gauges.necromancy.conjures.position.active_orientation.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				conjureImages.inactive.toDrawableData()
			),
			conjureImages.inactive.width,
			1000
		);
	}

	const earliest_conjure = [
		gauges.necromancy.conjures.skeleton.time,
		gauges.necromancy.conjures.zombie.time,
		gauges.necromancy.conjures.ghost.time,
		gauges.necromancy.conjures.phantom.time,
	];
	const minValue = Math.min.apply(null, earliest_conjure.filter(Boolean));
	if (minValue !== Infinity && minValue !== lastMinValue) {
		alt1.overLaySetGroup('Undead_Army_Text');
		alt1.overLayFreezeGroup('Undead_Army_Text');
		alt1.overLayClearGroup('Undead_Army_Text');
		alt1.overLayTextEx(
			minValue.toString(),
			white,
			14,
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					26 +
					gauges.necromancy.conjures.position.active_orientation.x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y + 32,
				gauges.scaleFactor
			),
			10000,
			undefined,
			true,
			true
		);
		alt1.overLayRefreshGroup('Undead_Army_Text');
		lastMinValue = minValue;
	} else {
		alt1.overLayClearGroup('Undead_Army_Text');
	}
}
