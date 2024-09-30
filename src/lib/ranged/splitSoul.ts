import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { RangedGaugeSlice } from '../../state/gauge-data/ranged-gauge.state';
import { OverlaysManager } from '../../a1sauce/Overlays';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/split-soul/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/split-soul/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function rangedSplitSoulOverlay() {
    const { gaugeData, ranged } = store.getState();
    const { splitSoul } = ranged;
    const { x, y } = splitSoul.offset;

    if (!splitSoul.isActiveOverlay) {
        clearAbilityOverlays('RangedSplitSoul');
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
        ability: splitSoul,
        position: ranged.position,
    };

    // If Split Soul is not Active and is not on cooldown it should appear as able to be activated
    if (!splitSoul.active) {
        handleAbilityActiveState(abilityData, 'RangedSplitSoul', false);
        alt1.overLayRefreshGroup('RangedSplitSoul_Text');
        alt1.overLayClearGroup('RangedSplitSoul_Text');
        return (lastValue = splitSoul.time);
    }

    store.dispatch(RangedGaugeSlice.actions.updateAbility({
        abilityName: 'splitSoul',
        ability: { isOnCooldown: false },
    }));

    OverlaysManager.forceClearOverlay('RangedSplitSoul_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'RangedSplitSoul', true);

    if (lastValue !== splitSoul.time) {
        store.dispatch(RangedGaugeSlice.actions.updateAbility({
            abilityName: 'splitSoul',
            ability: { cooldownDuration: 0 },
        }));

        OverlaysManager.forceClearOverlay('RangedSplitSoul_Cooldown_Text');
        alt1.overLaySetGroup('RangedSplitSoul_Text');
        alt1.overLayFreezeGroup('RangedSplitSoul_Text');
        alt1.overLayClearGroup('RangedSplitSoul_Text');
        alt1.overLayTextEx(
            `${splitSoul.time || ''}`,
            white,
            Math.ceil(14 * (gaugeData.scaleFactor * 0.75)),
            adjustPositionForScale(
                ranged.position.x + x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                ranged.position.y + y + 26,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('RangedSplitSoul_Text');
    }

    lastValue = splitSoul.time;
}
