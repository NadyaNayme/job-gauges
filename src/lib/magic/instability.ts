import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { MagicGaugeSlice } from '../../state/gauge-data/magic-gauge.state';
import { OverlaysManager } from '../../a1sauce/Overlays';

const ultimateImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/magic/instability/active.data.png'),
    inactive: require('../../asset/gauge-ui/magic/instability/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function fsoaOverlay() {
    const { magic, gaugeData } = store.getState();
    const { instability } = magic;
    const { x, y } = instability.offset;

    if (!instability.isActiveOverlay) {
        clearAbilityOverlays('Instability');
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
        ability: instability,
        position: magic.position,
    };

    // If Instability is not Active and is not on cooldown it should appear as able to be activated
    if (!instability.active) {
        handleAbilityActiveState(
            abilityData,
            'Instability',
            !instability.isOnCooldown,
        );

        alt1.overLayRefreshGroup('Instability_Text');
        alt1.overLayClearGroup('Instability_Text');

        return (lastValue = instability.time);
    }

    store.dispatch(MagicGaugeSlice.actions.updateAbility({
        abilityName: 'instability',
        ability: { isOnCooldown: false },
    }));

    OverlaysManager.forceClearOverlay('Instability_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'Instability', true);

    if (lastValue !== instability.time) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: 'instability',
            ability: { cooldownDuration: 0 },
        }));

        OverlaysManager.forceClearOverlay('Instability_Cooldown_Text');
        alt1.overLaySetGroup('Instability_Text');
        alt1.overLayFreezeGroup('Instability_Text');
        alt1.overLayClearGroup('Instability_Text');
        alt1.overLayTextEx(
            `${instability.time || ''}`,
            white,
            Math.ceil(14 * (gaugeData.scaleFactor * 0.75)),
            adjustPositionForScale(
                magic.position.x + x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + y + 30,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('Instability_Text');
    }

    lastValue = instability.time;
}
