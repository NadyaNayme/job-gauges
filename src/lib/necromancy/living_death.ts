/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/living_death/lg/living_death_inactive.data.png'),
	active: require('../.././asset/data/living_death/lg/living_death.data.png'),
});

let lastValue: number;

let scaledOnce = false;

export async function livingDeathOverlay(gauges: Overlay) {
	const { necromancy } = gauges;
	const { livingDeath } = necromancy;

	if (!livingDeath.isActiveOverlay) {
		clearLivingDeathOverlays();
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

	// If Living Death is not Active and is not on cooldown it should appear as able to be activated
	if (!livingDeath.active) {
		if (!livingDeath.isOnCooldown) {
			displayActiveLivingDeath(gauges);
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		} else {
			displayInactiveLivingDeath(gauges);
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		}
	} else {
		livingDeath.isOnCooldown = false;
		utility.forceClearOverlay('LivingDeath_Cooldown_Text');
		displayActiveLivingDeath(gauges);
		if (lastValue !== livingDeath.time) {
			livingDeath.cooldownDuration = 0;
			utility.forceClearOverlay('LivingDeath_Cooldown_Text');
			alt1.overLaySetGroup('LivingDeath_Text');
			alt1.overLayFreezeGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
			alt1.overLayTextEx(
				livingDeath.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					necromancy.position.x +
						livingDeath.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					necromancy.position.y +
						livingDeath.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('LivingDeath_Text');
		}
	}
	lastValue = livingDeath.time;
}

function clearLivingDeathOverlays(): void {
	utility.forceClearOverlay('LivingDeath_Text');
	utility.forceClearOverlay('LivingDeath_Cooldown_Text');
	alt1.overLayClearGroup('LivingDeath');
}

function displayActiveLivingDeath(gauges: Overlay): void {
	alt1.overLaySetGroup('LivingDeath');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.necromancy.position.x +
				gauges.necromancy.livingDeath.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.necromancy.position.y +
				gauges.necromancy.livingDeath.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveLivingDeath(gauges: Overlay): void {
	alt1.overLaySetGroup('LivingDeath');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.necromancy.position.x +
				gauges.necromancy.livingDeath.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.necromancy.position.y +
				gauges.necromancy.livingDeath.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
