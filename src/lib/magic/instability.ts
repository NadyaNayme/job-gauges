/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../../asset/data/magic/WeaponSpecs/fsoa_inactive.data.png'),
	active: require('../../asset/data/magic/WeaponSpecs/fsoa.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function fsoaOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { instability } = magic;

	if (!instability.isActiveOverlay) {
		clearInstabilityOverlays();
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

	// If Instability is not Active and is not on cooldown it should appear as able to be activated
	if (!instability.active) {
		if (!instability.isOnCooldown) {
			displayActiveInstability(gauges);
			alt1.overLayRefreshGroup('Instability_Text');
			alt1.overLayClearGroup('Instability_Text');
		} else {
			displayInactiveInstability(gauges);
			alt1.overLayRefreshGroup('Instability_Text');
			alt1.overLayClearGroup('Instability_Text');
		}
	} else {
		instability.isOnCooldown = false;
		utility.forceClearOverlay('Instability_Cooldown_Text');
		displayActiveInstability(gauges);
		if (lastValue !== instability.time) {
			instability.cooldownDuration = 0;
			utility.forceClearOverlay('Instability_Cooldown_Text');
			alt1.overLaySetGroup('Instability_Text');
			alt1.overLayFreezeGroup('Instability_Text');
			alt1.overLayClearGroup('Instability_Text');
			alt1.overLayTextEx(
				instability.time === 0
					? ''
					: instability.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					magic.position.x +
						instability.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					magic.position.y +
						instability.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('Instability_Text');
		}
	}
	lastValue = instability.time;
}

function clearInstabilityOverlays(): void {
	utility.forceClearOverlay('Instability_Text');
	utility.forceClearOverlay('Instability_Cooldown_Text');
	alt1.overLayClearGroup('Instability');
}

function displayActiveInstability(gauges: Overlay): void {
	alt1.overLaySetGroup('Instability');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.instability.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.instability.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveInstability(gauges: Overlay): void {
	alt1.overLaySetGroup('Instability');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.instability.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.instability.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
