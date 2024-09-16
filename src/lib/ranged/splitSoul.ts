import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import {
    adjustPositionForScale,
    forceClearOverlay,
    handleResizingImages,
    white,
} from '../utility';
import {
    clearAbilityOverlays,
    handleAbilityActiveState,
} from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/split-soul/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/split-soul/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function rangedSplitSoulOverlay(gauges: Overlay) {
    const { ranged } = gauges;
    const { splitSoul } = ranged;
    const { active_orientation } = ranged.splitSoul.position;

    if (!splitSoul.isActiveOverlay) {
        clearAbilityOverlays('SplitSoul');
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

    splitSoul.isOnCooldown = false;
    forceClearOverlay('SplitSoul_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'SplitSoul', true);

    if (lastValue !== splitSoul.time) {
        splitSoul.cooldownDuration = 0;
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
                gauges.scaleFactor,
            ),
            adjustPositionForScale(
                ranged.position.y + active_orientation.y + 26,
                gauges.scaleFactor,
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
