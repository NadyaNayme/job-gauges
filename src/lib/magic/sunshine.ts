import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { CombatStyle } from '../../types';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { MagicGaugeSlice } from '../../state/gauge-data/magic-gauge.state';
import { GaugeDataSlice } from '../../state/gauge-data/gauge-data.state';
import { OverlaysManager } from '../../a1sauce/Overlays';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/magic/sunshine/active.data.png'),
    inactive: require('../../asset/gauge-ui/magic/sunshine/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function sunshineOverlay() {
    const { magic, gaugeData } = store.getState();
    const { sunshine } = magic;
    const {
        offset: { x, y },
    } = sunshine;

    if (!sunshine.isActiveOverlay) {
        clearAbilityOverlays('Sunshine');
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
        ability: sunshine,
        position: magic.position,
    };

    // If Sunshine is not Active and is not on cooldown it should appear as able to be activated
    if (!sunshine.active) {
        handleAbilityActiveState(
            abilityData,
            'Sunshine',
            !sunshine.isOnCooldown,
        );
        alt1.overLayRefreshGroup('Sunshine_Text');
        alt1.overLayClearGroup('Sunshine_Text');
        return (lastValue = sunshine.time);
    }

    store.dispatch(MagicGaugeSlice.actions.updateAbility({
        abilityName: 'sunshine',
        ability: { isOnCooldown: false },
    }));

    OverlaysManager.forceClearOverlay('Sunshine_Cooldown_Text');

    if (gaugeData.automaticSwapping) {
        store.dispatch(GaugeDataSlice.actions.updateState({
            combatStyle: CombatStyle.magic,
        }));
    }

    handleAbilityActiveState(abilityData, 'Sunshine', true);

    if (lastValue !== sunshine.time) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: 'sunshine',
            ability: { cooldownDuration: 0 },
        }));

        OverlaysManager.forceClearOverlay('Sunshine_Cooldown_Text');
        alt1.overLaySetGroup('Sunshine_Text');
        alt1.overLayFreezeGroup('Sunshine_Text');
        alt1.overLayClearGroup('Sunshine_Text');
        alt1.overLayTextEx(
            `${sunshine.time || ''}`,
            white,
            Math.ceil(14 * (gaugeData.scaleFactor * 0.75)),
            adjustPositionForScale(
                magic.position.x + x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + y + 26,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );

        alt1.overLayRefreshGroup('Sunshine_Text');
    }

    lastValue = sunshine.time;
}
