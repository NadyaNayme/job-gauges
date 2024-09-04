/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/ranged/crystal-rain/active.data.png'),
	inactive: require('../../asset/gauge-ui/ranged/crystal-rain/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function crystalRainOverlay(gauges: Overlay) {
	const { ranged } = gauges;
	const { crystalRain } = ranged;

	if (!crystalRain.isActiveOverlay) {
		clearCrystalRainOverlay();
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

	// If Crystal Rain Debuff is not active then it is available
	if (!crystalRain.active) {
		displayActiveCrystalRain(gauges);
		alt1.overLayRefreshGroup('CrystalRain_Text');
		alt1.overLayClearGroup('CrystalRain_Text');
	} else {
		crystalRain.isOnCooldown = false;
		utility.forceClearOverlay('CrystalRain_Cooldown_Text');
		displayInactiveCrystalRain(gauges);
		if (lastValue !== crystalRain.time) {
			crystalRain.cooldownDuration = 0;
			utility.forceClearOverlay('CrystalRain_Cooldown_Text');
			alt1.overLaySetGroup('CrystalRain_Text');
			alt1.overLayFreezeGroup('CrystalRain_Text');
			alt1.overLayClearGroup('CrystalRain_Text');
			alt1.overLayTextEx(
				crystalRain.time === 0 ? '' : crystalRain.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					ranged.position.x +
						crystalRain.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					ranged.position.y +
						crystalRain.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('CrystalRain_Text');
		}
	}
	lastValue = crystalRain.time;
}

function clearCrystalRainOverlay(): void {
	utility.forceClearOverlay('CrystalRain_Text');
	utility.forceClearOverlay('CrystalRain_Cooldown_Text');
	alt1.overLayClearGroup('CrystalRain');
}

function displayActiveCrystalRain(gauges: Overlay): void {
	alt1.overLaySetGroup('CrystalRain');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.crystalRain.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.crystalRain.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveCrystalRain(gauges: Overlay): void {
	alt1.overLaySetGroup('CrystalRain');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.crystalRain.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.crystalRain.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
