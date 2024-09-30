import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { RangedGaugeSlice } from '../../state/gauge-data/ranged-gauge.state';
import { OverlaysManager } from '../../a1sauce/Overlays';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/deaths-swiftness/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/deaths-swiftness/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function deathsSwiftnessOverlay() {
    const { ranged, gaugeData } = store.getState();
    const { deathsSwiftness } = ranged;
    const { x, y } = deathsSwiftness.offset;

    if (!deathsSwiftness.isActiveOverlay) {
        clearAbilityOverlays('DeathsSwiftness');
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

    store.dispatch(RangedGaugeSlice.actions.updateAbility({
        abilityName: 'deathsSwiftness',
        ability: { isOnCooldown: false },
    }));

    OverlaysManager.forceClearOverlay('DeathsSwiftness_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'DeathsSwiftness', true);

    if (lastValue !== deathsSwiftness.time) {
        store.dispatch(RangedGaugeSlice.actions.updateAbility({
            abilityName: 'deathsSwiftness',
            ability: { cooldownDuration: 0 },
        }));

        OverlaysManager.forceClearOverlay('DeathsSwiftness_Cooldown_Text');
        alt1.overLaySetGroup('DeathsSwiftness_Text');
        alt1.overLayFreezeGroup('DeathsSwiftness_Text');
        alt1.overLayClearGroup('DeathsSwiftness_Text');
        alt1.overLayTextEx(
            `${deathsSwiftness.time || ''}`,
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
        alt1.overLayRefreshGroup('DeathsSwiftness_Text');
    }

    lastValue = deathsSwiftness.time;
}
