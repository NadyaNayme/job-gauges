import * as a1lib from 'alt1';
import * as utility from '../utility';

var ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/living_death/lg/living_death_inactive.data.png'),
	active: require('../.././asset/data/living_death/lg/living_death.data.png'),
});

let lastValue;
export async function livingDeathOverlay(gauges) {
	if (!gauges.necromancy.livingDeath.visible) {
		utility.forceClearOverlay('LivingDeath_Text');
		utility.forceClearOverlay('LivingDeath_Cooldown_Text');
		alt1.overLayClearGroup('LivingDeath');
		return;
	}
	await ultimateImages.promise;

	// If Living Death is not Active and is not on cooldown it should appear as able to be activated
	if (
		!gauges.necromancy.livingDeath.active
	) {
		if (!gauges.necromancy.livingDeath.onCooldown) {
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
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		} else {
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
			alt1.overLayRefreshGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
		}
	} else {
		gauges.necromancy.livingDeath.onCooldown = false;
		utility.forceClearOverlay('LivingDeath_Cooldown_Text');
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
		if (lastValue !== gauges.necromancy.livingDeath.time) {
			gauges.necromancy.livingDeath.cooldown = '';
			utility.forceClearOverlay('LivingDeath_Cooldown_Text');
			alt1.overLaySetGroup('LivingDeath_Text');
			alt1.overLayFreezeGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
			alt1.overLayTextEx(
				gauges.necromancy.livingDeath.time.toString(),
				utility.white,
				14,
				gauges.necromancy.position.x +
					gauges.necromancy.livingDeath.position.active_orientation
						.x +
					26,
				gauges.necromancy.position.y +
					gauges.necromancy.livingDeath.position.active_orientation
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
	lastValue = gauges.necromancy.livingDeath.time;
}
