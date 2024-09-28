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

export async function soulfireOverlay() {
    const { magic, gaugeData } = store.getState();
    const { soulfire } = magic;
    const { active_orientation } = soulfire.position;

    if (!soulfire.isActiveOverlay) {
        clearAbilityOverlays('Soulfire');
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
        ability: soulfire,
        position: magic.position,
    };

    // If Crystal Rain Debuff is not active then it is available
    if (!soulfire.active) {
        handleAbilityActiveState(abilityData, 'Soulfire', true);
        alt1.overLayRefreshGroup('Soulfire_Text');
        alt1.overLayClearGroup('Soulfire_Text');

        return (lastValue = soulfire.time);
    }

    store.dispatch(MagicGaugeSlice.actions.updateAbility({
        abilityName: 'soulfire',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('Soulfire_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'Soulfire', false);

    if (lastValue !== soulfire.time) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: 'soulfire',
            ability: { cooldownDuration: 0 },
        }));

        forceClearOverlay('Soulfire_Cooldown_Text');
        alt1.overLaySetGroup('Soulfire_Text');
        alt1.overLayFreezeGroup('Soulfire_Text');
        alt1.overLayClearGroup('Soulfire_Text');
        alt1.overLayTextEx(
            `${soulfire.time || ''}`,
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
        alt1.overLayRefreshGroup('Soulfire_Text');
    }

    lastValue = soulfire.time;
}
