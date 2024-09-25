import * as a1lib from 'alt1';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { RangeGaugeSlice } from '../../state/gauge-data/range-gauge.state';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/split-soul/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/split-soul/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function rangedSplitSoulOverlay() {
    const { gaugeData, ranged } = store.getState();
    const { splitSoul } = ranged;
    const { active_orientation } = ranged.splitSoul.position;

    if (!splitSoul.isActiveOverlay) {
        clearAbilityOverlays('SplitSoul');
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
        handleAbilityActiveState(abilityData, 'SplitSoul', false);
        alt1.overLayRefreshGroup('SplitSoul_Text');
        alt1.overLayClearGroup('SplitSoul_Text');
        return (lastValue = splitSoul.time);
    }

    store.dispatch(RangeGaugeSlice.actions.updateAbility({
        abilityName: 'splitSoul',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('SplitSoul_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'SplitSoul', true);

    if (lastValue !== splitSoul.time) {
        store.dispatch(RangeGaugeSlice.actions.updateAbility({
            abilityName: 'splitSoul',
            ability: { cooldownDuration: 0 },
        }));

        forceClearOverlay('SplitSoul_Cooldown_Text');
        alt1.overLaySetGroup('SplitSoul_Text');
        alt1.overLayFreezeGroup('SplitSoul_Text');
        alt1.overLayClearGroup('SplitSoul_Text');
        alt1.overLayTextEx(
            `${splitSoul.time || ''}`,
            white,
            14,
            adjustPositionForScale(
                ranged.position.x + active_orientation.x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                ranged.position.y + active_orientation.y + 26,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('SplitSoul_Text');
    }

    lastValue = splitSoul.time;
}
