/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';
import { StackingPlayerBuff } from '../../types/common';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/magic/tsunami_inactive.data.png'),
	active: require('../.././asset/data/magic/tsunami.data.png'),
	discounted: require('../.././asset/data/magic/tsunami_discounted.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function tsunamiOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { tsunami } = magic;
	const { x, y } = magic.tsunami.position.active_orientation;

	if (!tsunami.isActiveOverlay) {
		clearTsunamiOverlays();
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

	// If tsunami is not Active and is not on cooldown it should appear as able to be activated
	if (!tsunami.active) {
		if (!tsunami.isOnCooldown) {
			displayActiveTsunami(gauges);
			alt1.overLayRefreshGroup('Tsunami_Text');
			alt1.overLayClearGroup('Tsunami_Text');
		} else {
			displayInactivetsunami(gauges);
			alt1.overLayRefreshGroup('Tsunami_Text');
			alt1.overLayClearGroup('Tsunami_Text');
		}
	} else {
		tsunami.isOnCooldown = false;
		utility.forceClearOverlay('Tsunami_Cooldown_Text');

		displayActiveTsunami(gauges);
		if (lastValue !== tsunami.time) {
			tsunami.cooldownDuration = 0;
			utility.forceClearOverlay('Tsunami_Cooldown_Text');
			alt1.overLaySetGroup('Tsunami_Text');
			alt1.overLayFreezeGroup('Tsunami_Text');
			alt1.overLayClearGroup('Tsunami_Text');
			alt1.overLayTextEx(
				tsunami.time === 0 ? '' : tsunami.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					magic.position.x +
						tsunami.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					magic.position.y +
						tsunami.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('Tsunami_Text');
		}
	}
	lastValue = tsunami.time;
}

function clearTsunamiOverlays(): void {
	utility.forceClearOverlay('Tsunami_Text');
	utility.forceClearOverlay('Tsunami_Cooldown_Text');
	alt1.overLayClearGroup('Tsunami');
}

function displayActiveTsunami(gauges: Overlay): void {
	alt1.overLaySetGroup('Tsunami');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.tsunami.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.tsunami.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactivetsunami(gauges: Overlay): void {
	alt1.overLaySetGroup('Tsunami');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.tsunami.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.tsunami.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
