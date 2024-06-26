import * as a1lib from 'alt1';
import * as utility from '../utility';

var ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/living_death/lg/living_death_inactive.data.png'),
	active: require('../.././asset/data/living_death/lg/living_death.data.png'),
});

let lastValue;
export async function livingDeathOverlay(gauges) {

    const { necromancy } = gauges;
	const { livingDeath } = necromancy;

	if (!livingDeath.visible) {
		clearLivingDeathOverlays();
		return;
	}

	await ultimateImages.promise;

	// If Living Death is not Active and is not on cooldown it should appear as able to be activated
	if (!livingDeath.active) {
		if (!livingDeath.onCooldown) {
			displayActiveLivingDeath(gauges);
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		} else {
			displayInactiveLivingDeath(gauges);
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		}
	} else {
		livingDeath.onCooldown = false;
		utility.forceClearOverlay('LivingDeath_Cooldown_Text');
		displayActiveLivingDeath(gauges);
		if (lastValue !== livingDeath.time) {
			livingDeath.cooldown = '';
			utility.forceClearOverlay('LivingDeath_Cooldown_Text');
			alt1.overLaySetGroup('LivingDeath_Text');
			alt1.overLayFreezeGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
			alt1.overLayTextEx(
				livingDeath.time.toString(),
				utility.white,
				14,
				necromancy.position.x +
					livingDeath.position.active_orientation
						.x +
					26,
				necromancy.position.y +
					livingDeath.position.active_orientation
						.y +
					26,
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

function clearLivingDeathOverlays() {
	utility.forceClearOverlay('LivingDeath_Text');
	utility.forceClearOverlay('LivingDeath_Cooldown_Text');
	alt1.overLayClearGroup('LivingDeath');
}

function displayActiveLivingDeath(gauges) {
	alt1.overLaySetGroup('LivingDeath');
	alt1.overLayImage(
		gauges.necromancy.position.x +
			gauges.necromancy.livingDeath.position.active_orientation.x,
		gauges.necromancy.position.y +
			gauges.necromancy.livingDeath.position.active_orientation.y,
		a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
		ultimateImages.active.width,
		1000
	);
}

function displayInactiveLivingDeath(gauges) {
	alt1.overLaySetGroup('LivingDeath');
	alt1.overLayImage(
		gauges.necromancy.position.x +
			gauges.necromancy.livingDeath.position.active_orientation.x,
		gauges.necromancy.position.y +
			gauges.necromancy.livingDeath.position.active_orientation.y,
		a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
		ultimateImages.inactive.width,
		1000
	);
}
