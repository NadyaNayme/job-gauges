import * as a1lib from 'alt1';

var ultimateImages = a1lib.webpackImages({
	inactive: require('../.././asset/data/living_death/living_death_inactive.data.png'),
	active: require('../.././asset/data/living_death/living_death.data.png'),
});

let white = a1lib.mixColor(255, 255, 255);
let lastValue;
export async function livingDeathOverlay(gauges) {
	await ultimateImages.promise;
	if (gauges.necromancy.livingDeath.active == true) {
		alt1.overLaySetGroup('LivingDeath');
		alt1.overLayImage(
			gauges.necromancy.position.x + gauges.necromancy.livingDeath.position.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(ultimateImages.active.toDrawableData()),
			ultimateImages.active.width,
			1000
		);
		if (
			lastValue !== gauges.necromancy.livingDeath.time
		) {
			alt1.overLaySetGroup('LivingDeath_Text');
			alt1.overLayFreezeGroup('LivingDeath_Text');
			alt1.overLayClearGroup('LivingDeath_Text');
			alt1.overLaySetGroupZIndex('LivingDeath_Text', 1);
			alt1.overLayTextEx(
				gauges.necromancy.livingDeath.time.toString(),
				white,
				8,
				gauges.necromancy.position.x +
					gauges.necromancy.livingDeath.position.active_orientation.x + 20,
				gauges.necromancy.position.y + 20,
				10000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('LivingDeath_Text');
			lastValue = gauges.necromancy.livingDeath.time;
		}
	} else {
		alt1.overLaySetGroup('LivingDeath');
		alt1.overLayImage(
			gauges.necromancy.position.x + gauges.necromancy.livingDeath.position.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(ultimateImages.inactive.toDrawableData()),
			ultimateImages.inactive.width,
			1000
		);
		alt1.overLayRefreshGroup('LivingDeath_Text');
		alt1.overLayClearGroup('LivingDeath_Text');
	}
}
