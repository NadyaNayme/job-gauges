/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/ranged/split_soul-inactive.data.png'),
	active: require('../.././asset/data/ranged/split_soul.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function rangedSplitSoulOverlay(gauges: Overlay) {
	const { ranged } = gauges;
	const { splitSoul } = ranged;
	const { x, y } = ranged.splitSoul.position.active_orientation;

	if (!splitSoul.isActiveOverlay) {
		clearRangedSplitSoulOverlay();
		return;
	}

	await ultimateImages.promise;

	if (!scaledOnce) {
		Object.keys(ultimateImages).forEach(async (key) => {
			ultimateImages[key] = await utility.resizeImageData(
				ultimateImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	// If Split Soul is not Active and is not on cooldown it should appear as able to be activated
	if (!splitSoul.active) {
		displayInactiveRangedSplitSoul(gauges);
		alt1.overLayRefreshGroup('SplitSoul_Text');
		alt1.overLayClearGroup('SplitSoul_Text');
	} else {
		splitSoul.isOnCooldown = false;
		utility.forceClearOverlay('SplitSoul_Cooldown_Text');

		displayActiveRangedSplitSoul(gauges);

		if (lastValue !== splitSoul.time) {
			splitSoul.cooldownDuration = 0;
			utility.forceClearOverlay('SplitSoul_Cooldown_Text');
			alt1.overLaySetGroup('SplitSoul_Text');
			alt1.overLayFreezeGroup('SplitSoul_Text');
			alt1.overLayClearGroup('SplitSoul_Text');
			alt1.overLayTextEx(
				splitSoul.time === 0 ? '' : splitSoul.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					ranged.position.x +
						splitSoul.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					ranged.position.y +
						splitSoul.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('SplitSoul_Text');
		}
	}
	lastValue = splitSoul.time;
}

function clearRangedSplitSoulOverlay(): void {
	utility.forceClearOverlay('SplitSoul_Text');
	utility.forceClearOverlay('SplitSoul_Cooldown_Text');
	alt1.overLayClearGroup('SplitSoul');
}

function displayActiveRangedSplitSoul(gauges: Overlay): void {
	alt1.overLaySetGroup('SplitSoul');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.splitSoul.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.splitSoul.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveRangedSplitSoul(gauges: Overlay): void {
	alt1.overLaySetGroup('SplitSoul');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.splitSoul.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.splitSoul.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
