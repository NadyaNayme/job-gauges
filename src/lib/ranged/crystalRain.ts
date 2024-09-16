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
    active: require('../../asset/gauge-ui/ranged/crystal-rain/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/crystal-rain/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function crystalRainOverlay(gauges: Overlay) {
    const { ranged } = gauges;
    const { crystalRain } = ranged;
    const { active_orientation } = crystalRain.position;

    if (!crystalRain.isActiveOverlay) {
        clearAbilityOverlays('CrystalRain');
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
        ability: crystalRain,
        position: ranged.position,
    };

    // If Crystal Rain Debuff is not active then it is available
    if (!crystalRain.active) {
        handleAbilityActiveState(abilityData, 'CrystalRain', true);
        alt1.overLayRefreshGroup('CrystalRain_Text');
        alt1.overLayClearGroup('CrystalRain_Text');

        return (lastValue = crystalRain.time);
    }

    crystalRain.isOnCooldown = false;
    forceClearOverlay('CrystalRain_Cooldown_Text');
    handleAbilityActiveState(abilityData, 'CrystalRain', false);

    if (lastValue !== crystalRain.time) {
        crystalRain.cooldownDuration = 0;
        forceClearOverlay('CrystalRain_Cooldown_Text');
        alt1.overLaySetGroup('CrystalRain_Text');
        alt1.overLayFreezeGroup('CrystalRain_Text');
        alt1.overLayClearGroup('CrystalRain_Text');
        alt1.overLayTextEx(
            `${crystalRain.time || ''}`,
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
        alt1.overLayRefreshGroup('CrystalRain_Text');
    }

    lastValue = crystalRain.time;
}
