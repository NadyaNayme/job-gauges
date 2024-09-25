import * as a1lib from 'alt1';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { MagicGaugeSlice } from '../../state/gauge-data/magic-gauge.state';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/magic/ode-to-deceit/active.data.png'),
    inactive: require('../../asset/gauge-ui/magic/ode-to-deceit/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function odeToDeceitOverlay() {
    const { magic, gaugeData } = store.getState();
    const { odeToDeceit } = magic;
    const { active_orientation } = odeToDeceit.position;

    if (!odeToDeceit.isActiveOverlay) {
        clearAbilityOverlays('OdeToDeceit');
        return;
    }

    await ultimateImages.promise;

    if (!scaledOnce) {
        handleResizingImages(ultimateImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const abilityData = {
        images: ultimateImages,
        scaleFactor: gaugeData.scaleFactor,
        ability: odeToDeceit,
        position: magic.position,
    };

    // If Crystal Rain Debuff is not active then it is available
    if (!odeToDeceit.active) {
        handleAbilityActiveState(abilityData, 'OdeToDeceit', true);
        alt1.overLayRefreshGroup('OdeToDeceit_Text');
        alt1.overLayClearGroup('OdeToDeceit_Text');

        return (lastValue = odeToDeceit.time);
    }

    store.dispatch(MagicGaugeSlice.actions.updateAbility({
        abilityName: 'odeToDeceit',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('OdeToDeceit_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'OdeToDeceit', false);

    if (lastValue !== odeToDeceit.time) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: 'odeToDeceit',
            ability: { cooldownDuration: 0 },
        }));

        forceClearOverlay('OdeToDeceit_Cooldown_Text');
        alt1.overLaySetGroup('OdeToDeceit_Text');
        alt1.overLayFreezeGroup('OdeToDeceit_Text');
        alt1.overLayClearGroup('OdeToDeceit_Text');
        alt1.overLayTextEx(
            `${odeToDeceit.time || ''}`,
            white,
            14,
            adjustPositionForScale(
                magic.position.x + active_orientation.x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + active_orientation.y + 30,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('OdeToDeceit_Text');
    }

    lastValue = odeToDeceit.time;
}
