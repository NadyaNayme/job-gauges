import * as a1lib from 'alt1';
import {
    adjustPositionForScale,
    forceClearOverlay,
    handleResizingImages,
    white,
} from '../utility';
import { CombatStyle, Overlay } from '../../types';
import {
    clearAbilityOverlays,
    handleAbilityActiveState,
} from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/magic/sunshine/active.data.png'),
    inactive: require('../../asset/gauge-ui/magic/sunshine/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function sunshineOverlay(gauges: Overlay) {
    const { magic } = gauges;
    const { sunshine } = magic;
    const {
        position: { active_orientation },
    } = sunshine;

    if (!sunshine.isActiveOverlay) {
        clearAbilityOverlays('Sunshine');
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

    sunshine.isOnCooldown = false;
    forceClearOverlay('Sunshine_Cooldown_Text');

    if (gauges.automaticSwapping) {
        gauges.combatStyle = CombatStyle.mage;
    }

    handleAbilityActiveState(abilityData, 'Sunshine', true);

    if (lastValue !== sunshine.time) {
        sunshine.cooldownDuration = 0;
        forceClearOverlay('Sunshine_Cooldown_Text');
        alt1.overLaySetGroup('Sunshine_Text');
        alt1.overLayFreezeGroup('Sunshine_Text');
        alt1.overLayClearGroup('Sunshine_Text');
        alt1.overLayTextEx(
            `${sunshine.time || ''}`,
            white,
            14,
            adjustPositionForScale(
                magic.position.x + active_orientation.x + 26,
                gauges.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + active_orientation.y + 26,
                gauges.scaleFactor,
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
