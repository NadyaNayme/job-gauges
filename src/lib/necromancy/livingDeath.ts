import * as a1lib from 'alt1';
import { CombatStyle, Overlay } from '../../types';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/necromancy/living-death/active.data.png'),
	inactive: require('../../asset/gauge-ui/necromancy/living-death/inactive.data.png'),
});

let lastValue: number;

let scaledOnce = false;

export async function livingDeathOverlay(gauges: Overlay) {
	const { necromancy } = gauges;
	const { livingDeath } = necromancy;
	const { active_orientation } = livingDeath.position;

	if (!livingDeath.isActiveOverlay) {
		clearAbilityOverlays('LivingDeath');
		return;
	}

	await ultimateImages.promise;
	
	if (!scaledOnce) {
		handleResizingImages(ultimateImages, gauges.scaleFactor);
		
		scaledOnce = true;
	}

	const abilityData = {
		images: ultimateImages,
		scaleFactor: gauges.scaleFactor,
		ability: livingDeath,
		position: necromancy.position,
	};

	// If Living Death is not Active and is not on cooldown it should appear as able to be activated
	if (!livingDeath.active) {
		handleAbilityActiveState(abilityData, 'LivingDeath', !livingDeath.isOnCooldown)
		alt1.overLayRefreshGroup('LivingDeath_Text');
		alt1.overLayClearGroup('LivingDeath_Text');
		
		return lastValue = livingDeath.time;
	}
	
	livingDeath.isOnCooldown = false;
	forceClearOverlay('LivingDeath_Cooldown_Text');
	if (gauges.automaticSwapping) {
		gauges.combatStyle = CombatStyle.necro;
	}
	
	handleAbilityActiveState(abilityData, 'LivingDeath', true)
	
	if (lastValue !== livingDeath.time) {
		livingDeath.cooldownDuration = 0;
		forceClearOverlay('LivingDeath_Cooldown_Text');
		alt1.overLaySetGroup('LivingDeath_Text');
		alt1.overLayFreezeGroup('LivingDeath_Text');
		alt1.overLayClearGroup('LivingDeath_Text');
		alt1.overLayTextEx(
			`${livingDeath.time}`,
			white,
			14,
			adjustPositionForScale(necromancy.position.x + active_orientation.x + 26, gauges.scaleFactor),
			adjustPositionForScale(necromancy.position.y + active_orientation.y + 26, gauges.scaleFactor),
			3000,
			'',
			true,
			true
		);
		alt1.overLayRefreshGroup('LivingDeath_Text');
	}
	
	lastValue = livingDeath.time;
}
