/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/ranged/deaths-swiftness/active.data.png'),
	inactive: require('../../asset/gauge-ui/ranged/deaths-swiftness/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function deathsSwiftnessOverlay(gauges: Overlay) {
	const { ranged } = gauges;
	const { deathsSwiftness } = ranged;
	const { x, y } = ranged.deathsSwiftness.position.active_orientation;

	if (!deathsSwiftness.isActiveOverlay) {
		clearDeathsSwiftnessOverlays();
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

	// If DeathsSwiftness is not Active and is not on cooldown it should appear as able to be activated
	if (!deathsSwiftness.active) {
		if (!deathsSwiftness.isOnCooldown) {
			displayActiveDeathsSwiftness(gauges);
			alt1.overLayRefreshGroup('DeathsSwiftness_Text');
			alt1.overLayClearGroup('DeathsSwiftness_Text');
		} else {
			displayInactiveDeathsSwiftness(gauges);
			alt1.overLayRefreshGroup('DeathsSwiftness_Text');
			alt1.overLayClearGroup('DeathsSwiftness_Text');
		}
	} else {
		deathsSwiftness.isOnCooldown = false;
		utility.forceClearOverlay('DeathsSwiftness_Cooldown_Text');

		displayActiveDeathsSwiftness(gauges);
		if (lastValue !== deathsSwiftness.time) {
			deathsSwiftness.cooldownDuration = 0;
			utility.forceClearOverlay('DeathsSwiftness_Cooldown_Text');
			alt1.overLaySetGroup('DeathsSwiftness_Text');
			alt1.overLayFreezeGroup('DeathsSwiftness_Text');
			alt1.overLayClearGroup('DeathsSwiftness_Text');
			alt1.overLayTextEx(
				deathsSwiftness.time === 0
					? ''
					: deathsSwiftness.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					ranged.position.x +
						deathsSwiftness.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					ranged.position.y +
						deathsSwiftness.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('DeathsSwiftness_Text');
		}
	}
	lastValue = deathsSwiftness.time;
}

function clearDeathsSwiftnessOverlays(): void {
	utility.forceClearOverlay('DeathsSwiftness_Text');
	utility.forceClearOverlay('DeathsSwiftness_Cooldown_Text');
	alt1.overLayClearGroup('DeathsSwiftness');
}

function displayActiveDeathsSwiftness(gauges: Overlay): void {
	alt1.overLaySetGroup('DeathsSwiftness');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.deathsSwiftness.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.deathsSwiftness.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveDeathsSwiftness(gauges: Overlay): void {
	alt1.overLaySetGroup('DeathsSwiftness');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.ranged.position.x +
				gauges.ranged.deathsSwiftness.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y +
				gauges.ranged.deathsSwiftness.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
