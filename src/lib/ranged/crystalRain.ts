import * as a1lib from 'alt1';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { MagicGaugeSlice } from '../../state/gauge-data/magic-gauge.state';
import { RangeGaugeSlice } from '../../state/gauge-data/range-gauge.state';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/crystal-rain/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/crystal-rain/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function crystalRainOverlay() {
    const { ranged, gaugeData } = store.getState();
    const { crystalRain } = ranged;
    const { active_orientation } = crystalRain.position;

    if (!crystalRain.isActiveOverlay) {
        clearAbilityOverlays('CrystalRain');
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

    store.dispatch(RangeGaugeSlice.actions.updateAbility({
        abilityName: 'crystalRain',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('CrystalRain_Cooldown_Text');
    handleAbilityActiveState(abilityData, 'CrystalRain', false);

    if (lastValue !== crystalRain.time) {
        store.dispatch(RangeGaugeSlice.actions.updateAbility({
            abilityName: 'crystalRain',
            ability: { cooldownDuration: 0 },
        }));

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
        alt1.overLayRefreshGroup('CrystalRain_Text');
    }

    lastValue = crystalRain.time;
}
