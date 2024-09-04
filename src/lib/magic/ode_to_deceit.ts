/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const ultimateImages = a1lib.webpackImages({
	inactive: require('../../asset/data/magic/WeaponSpecs/OdeToDeceit_inactive.data.png'),
	active: require('../../asset/data/magic/WeaponSpecs/odeToDeceit.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function odeToDeceitOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { odeToDeceit } = magic;

	if (!odeToDeceit.isActiveOverlay) {
		clearOdetoDeceitOverlay();
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
	if (!odeToDeceit.active) {
		displayActiveCrystalRain(gauges);
		alt1.overLayRefreshGroup('OdeToDeceit_Text');
		alt1.overLayClearGroup('OdeToDeceit_Text');
	} else {
		odeToDeceit.isOnCooldown = false;
		utility.forceClearOverlay('OdeToDeceit_Cooldown_Text');
		displayInactiveOdeToDeceit(gauges);
		if (lastValue !== odeToDeceit.time) {
			odeToDeceit.cooldownDuration = 0;
			utility.forceClearOverlay('OdeToDeceit_Cooldown_Text');
			alt1.overLaySetGroup('OdeToDeceit_Text');
			alt1.overLayFreezeGroup('OdeToDeceit_Text');
			alt1.overLayClearGroup('OdeToDeceit_Text');
			alt1.overLayTextEx(
				odeToDeceit.time === 0 ? '' : odeToDeceit.time.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					magic.position.x +
						odeToDeceit.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					magic.position.y +
						odeToDeceit.position.active_orientation.y +
						30,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('OdeToDeceit_Text');
		}
	}
	lastValue = odeToDeceit.time;
}

function clearOdetoDeceitOverlay(): void {
	utility.forceClearOverlay('OdeToDeceit_Text');
	utility.forceClearOverlay('OdeToDeceit_Cooldown_Text');
	alt1.overLayClearGroup('OdeToDeceit');
}

function displayActiveCrystalRain(gauges: Overlay): void {
	alt1.overLaySetGroup('OdeToDeceit');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.odeToDeceit.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.odeToDeceit.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveOdeToDeceit(gauges: Overlay): void {
	alt1.overLaySetGroup('OdeToDeceit');
	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.magic.position.x +
				gauges.magic.odeToDeceit.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.magic.position.y +
				gauges.magic.odeToDeceit.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
