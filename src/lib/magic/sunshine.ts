/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/sunshine/ss2-inactive.data.png'),
	active: require('../.././asset/data/sunshine/ss2.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function sunshineOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { sunshine } = magic;

	if (!sunshine.isActiveOverlay) {
		clearSunshineOverlays();
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

	// If Sunshine is not Active and is not on cooldown it should appear as able to be activated
	if (!sunshine.active) {
		if (!sunshine.isOnCooldown) {
			displayActiveSunshine(gauges);
			alt1.overLayRefreshGroup('Sunshine_Text');
			alt1.overLayClearGroup('Sunshine_Text');
		} else {
			displayInactiveSunshine(gauges);
			alt1.overLayRefreshGroup('Sunshine_Text');
			alt1.overLayClearGroup('Sunshine_Text');
		}
	} else {
		sunshine.isOnCooldown = false;
		utility.forceClearOverlay('Sunshine_Cooldown_Text');
		if (gauges.automaticSwapping) {
			gauges.combatStyle = 3;
		}
		displayActiveSunshine(gauges);
		if (lastValue !== sunshine.time) {
			sunshine.cooldownDuration = 0;
			utility.forceClearOverlay('Sunshine_Cooldown_Text');
			alt1.overLaySetGroup('Sunshine_Text');
			alt1.overLayFreezeGroup('Sunshine_Text');
			alt1.overLayClearGroup('Sunshine_Text');
			alt1.overLayTextEx(
				sunshine.time === 0 ? '' : sunshine.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					magic.position.x +
						sunshine.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					magic.position.y +
						sunshine.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('Sunshine_Text');
		}
	}
	lastValue = sunshine.time;
}

function clearSunshineOverlays(): void {
	utility.forceClearOverlay('Sunshine_Text');
	utility.forceClearOverlay('Sunshine_Cooldown_Text');
	alt1.overLayClearGroup('Sunshine');
}

function displayActiveSunshine(gauges: Overlay): void {
	alt1.overLaySetGroup('Sunshine');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.sunshine.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.sunshine.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveSunshine(gauges: Overlay): void {
	alt1.overLaySetGroup('Sunshine');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.sunshine.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.sunshine.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
