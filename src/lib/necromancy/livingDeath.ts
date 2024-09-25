import * as a1lib from 'alt1';
import { CombatStyle } from '../../types';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { GaugeDataSlice } from '../../state/gauge-data/gauge-data.state';
import { RangeGaugeSlice } from '../../state/gauge-data/range-gauge.state';
import { NecromancyGaugeSlice } from '../../state/gauge-data/necromancy-gauge.state';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/necromancy/living-death/active.data.png'),
    inactive: require('../../asset/gauge-ui/necromancy/living-death/inactive.data.png'),
});

let lastValue: number;

let scaledOnce = false;

export async function livingDeathOverlay() {
    const { gaugeData, necromancy } = store.getState();
    const { livingDeath } = necromancy;
    const { active_orientation } = livingDeath.position;

    if (!livingDeath.isActiveOverlay) {
        clearAbilityOverlays('LivingDeath');
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
        ability: livingDeath,
        position: necromancy.position,
    };

    // If Living Death is not Active and is not on cooldown it should appear as able to be activated
    if (!livingDeath.active) {
        handleAbilityActiveState(
            abilityData,
            'LivingDeath',
            !livingDeath.isOnCooldown,
        );
        alt1.overLayRefreshGroup('LivingDeath_Text');
        alt1.overLayClearGroup('LivingDeath_Text');

        return (lastValue = livingDeath.time);
    }

    store.dispatch(NecromancyGaugeSlice.actions.updateAbility({
        key: 'livingDeath',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('LivingDeath_Cooldown_Text');
    if (gaugeData.automaticSwapping) {
        store.dispatch(GaugeDataSlice.actions.updateCombatStyle(CombatStyle.necro));
    }

    handleAbilityActiveState(abilityData, 'LivingDeath', true);

    if (lastValue !== livingDeath.time) {
        store.dispatch(NecromancyGaugeSlice.actions.updateAbility({
            key: 'livingDeath',
            ability: { cooldownDuration: 0 },
        }));

        forceClearOverlay('LivingDeath_Cooldown_Text');
        alt1.overLaySetGroup('LivingDeath_Text');
        alt1.overLayFreezeGroup('LivingDeath_Text');
        alt1.overLayClearGroup('LivingDeath_Text');
        alt1.overLayTextEx(
            `${livingDeath.time}`,
            white,
            14,
            adjustPositionForScale(
                necromancy.position.x + active_orientation.x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y + active_orientation.y + 26,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('LivingDeath_Text');
    }

    lastValue = livingDeath.time;
}
