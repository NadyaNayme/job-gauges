import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/magic/ode-to-deceit/active.data.png'),
	inactive: require('../../asset/gauge-ui/magic/ode-to-deceit/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function odeToDeceitOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { odeToDeceit } = magic;
	const { active_orientation } = odeToDeceit.position;

	if (!odeToDeceit.isActiveOverlay) {
		clearAbilityOverlays('OdeToDeceit');
		return;
	}

	await ultimateImages.promise;
	
	const { active, inactive } = ultimateImages;

	if (!scaledOnce) {
		handleResizingImages([active, inactive], gauges.scaleFactor);

		scaledOnce = true;
	}

	const abilityData = {
		images: ultimateImages,
		scaleFactor: gauges.scaleFactor,
		ability: odeToDeceit,
		position: magic.position,
	};

	// If Crystal Rain Debuff is not active then it is available
	if (!odeToDeceit.active) {
		handleAbilityActiveState(abilityData, 'OdeToDeceit', true);
		alt1.overLayRefreshGroup('OdeToDeceit_Text');
		alt1.overLayClearGroup('OdeToDeceit_Text');
		
		return lastValue = odeToDeceit.time;
	} 
	
	odeToDeceit.isOnCooldown = false;
	forceClearOverlay('OdeToDeceit_Cooldown_Text');
	
	handleAbilityActiveState(abilityData, 'OdeToDeceit', false);
	
	if (lastValue !== odeToDeceit.time) {
		odeToDeceit.cooldownDuration = 0;
		forceClearOverlay('OdeToDeceit_Cooldown_Text');
		alt1.overLaySetGroup('OdeToDeceit_Text');
		alt1.overLayFreezeGroup('OdeToDeceit_Text');
		alt1.overLayClearGroup('OdeToDeceit_Text');
		alt1.overLayTextEx(
			`${odeToDeceit.time || ''}`,
			white,
			14,
			adjustPositionForScale(magic.position.x + active_orientation.x + 26, gauges.scaleFactor),
			adjustPositionForScale(magic.position.y + active_orientation.y + 30, gauges.scaleFactor),
			3000,
			'',
			true,
			true
		);
		alt1.overLayRefreshGroup('OdeToDeceit_Text');
	}
	
	lastValue = odeToDeceit.time;
}
