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
    active: require('../../asset/gauge-ui/ranged/deaths-swiftness/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/deaths-swiftness/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function deathsSwiftnessOverlay(gauges: Overlay) {
    const { ranged } = gauges;
    const { deathsSwiftness } = ranged;
    const { active_orientation } = ranged.deathsSwiftness.position;

    if (!deathsSwiftness.isActiveOverlay) {
        clearAbilityOverlays('DeathsSwiftness');
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
        ability: deathsSwiftness,
        position: ranged.position,
    };

    // If DeathsSwiftness is not Active and is not on cooldown it should appear as able to be activated
    if (!deathsSwiftness.active) {
        handleAbilityActiveState(
            abilityData,
            'DeathsSwiftness',
            !deathsSwiftness.isOnCooldown,
        );

        alt1.overLayRefreshGroup('DeathsSwiftness_Text');
        alt1.overLayClearGroup('DeathsSwiftness_Text');
        return (lastValue = deathsSwiftness.time);
    }

    deathsSwiftness.isOnCooldown = false;
    forceClearOverlay('DeathsSwiftness_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'DeathsSwiftness', true);

    if (lastValue !== deathsSwiftness.time) {
        deathsSwiftness.cooldownDuration = 0;
        forceClearOverlay('DeathsSwiftness_Cooldown_Text');
        alt1.overLaySetGroup('DeathsSwiftness_Text');
        alt1.overLayFreezeGroup('DeathsSwiftness_Text');
        alt1.overLayClearGroup('DeathsSwiftness_Text');
        alt1.overLayTextEx(
            `${deathsSwiftness.time || ''}`,
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
        alt1.overLayRefreshGroup('DeathsSwiftness_Text');
    }

    lastValue = deathsSwiftness.time;
}
