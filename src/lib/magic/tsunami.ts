import * as a1lib from 'alt1';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';
import { store } from '../../state';
import { MagicGaugeSlice } from '../../state/gauge-data/magic-gauge.state';

const ultimateImages = a1lib.webpackImages({
    active: require('../.././asset/gauge-ui/magic/tsunami/active.data.png'),
    inactive: require('../.././asset/gauge-ui/magic/tsunami/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function tsunamiOverlay() {
    const { magic, gaugeData } = store.getState();
    const { tsunami } = magic;
    const { active_orientation } = tsunami.position;

    if (!tsunami.isActiveOverlay) {
        clearAbilityOverlays('Tsunami');
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
        ability: tsunami,
        position: magic.position,
    };

    // If tsunami is not Active and is not on cooldown it should appear as able to be activated
    if (!tsunami.active) {
        handleAbilityActiveState(abilityData, 'Tsunami', !tsunami.isOnCooldown);
        alt1.overLayRefreshGroup('Tsunami_Text');
        alt1.overLayClearGroup('Tsunami_Text');

        return (lastValue = tsunami.time);
    }

    store.dispatch(MagicGaugeSlice.actions.updateAbility({
        abilityName: 'tsunami',
        ability: { isOnCooldown: false },
    }));

    forceClearOverlay('Tsunami_Cooldown_Text');

    handleAbilityActiveState(abilityData, 'Tsunami', true);

    if (lastValue !== tsunami.time) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: 'tsunami',
            ability: { cooldownDuration: 0 },
        }));

        forceClearOverlay('Tsunami_Cooldown_Text');
        alt1.overLaySetGroup('Tsunami_Text');
        alt1.overLayFreezeGroup('Tsunami_Text');
        alt1.overLayClearGroup('Tsunami_Text');
        alt1.overLayTextEx(
            `${tsunami.time || ''}`,
            white,
            14,
            adjustPositionForScale(
                magic.position.x + active_orientation.x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + active_orientation.y + 26,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('Tsunami_Text');
    }

    lastValue = tsunami.time;
}
