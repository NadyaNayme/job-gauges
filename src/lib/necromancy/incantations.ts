import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages } from '../utility';
import { Abilities } from '../util/ability-helpers';
import { store } from '../../state';

const incantationImages = a1lib.webpackImages({
    invoke_death: require('../.././asset/gauge-ui/necromancy/incantations/invoke-death/active.data.png'),
    invoke_death_inactive: require('../.././asset/gauge-ui/necromancy/incantations/invoke-death/inactive.data.png'),
    darkness: require('../.././asset/gauge-ui/necromancy/incantations/darkness/active.data.png'),
    darkness_inactive: require('../.././asset/gauge-ui/necromancy/incantations/darkness/inactive.data.png'),
    threads: require('../.././asset/gauge-ui/necromancy/incantations/threads-of-fate/active.data.png'),
    threads_inactive: require('../.././asset/gauge-ui/necromancy/incantations/threads-of-fate/inactive.data.png'),
    split_soul: require('../.././asset/gauge-ui/necromancy/incantations/split-soul/active.data.png'),
    split_soul_inactive: require('../.././asset/gauge-ui/necromancy/incantations/split-soul/inactive.data.png'),
});

let scaledOnce = false;

export async function incantationsOverlay() {
    const { gaugeData, necromancy } = store.getState();
    const { incantations, position } = necromancy;
    const {
        invokeDeath,
        darkness: darknessBuff,
        threads: threadsAbility,
        splitSoul,
    } = incantations;

    if (!incantations.isActiveOverlay) {
        return;
    }

    await incantationImages.promise;

    if (!scaledOnce) {
        handleResizingImages(incantationImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const isInvokeDeathVisible =
        invokeDeath.isActiveOverlay && incantations.isActiveOverlay;
    const isInvokeDeathActive = incantations.active[0];
    const invokeDeathImage = isInvokeDeathActive
        ? incantationImages.invoke_death
        : incantationImages.invoke_death_inactive;

    if (isInvokeDeathVisible) {
        handleIncantationOverlays(
            'Invoke_Death',
            invokeDeath.offset.x,
            0,
            invokeDeathImage,
        );
    }

    const isDarknessVisible =
        darknessBuff.isActiveOverlay && incantations.isActiveOverlay;
    const isDarknessActive = incantations.active[1];
    const darknessImage = isDarknessActive
        ? incantationImages.darkness
        : incantationImages.darkness_inactive;

    if (isDarknessVisible) {
        handleIncantationOverlays(
            'Darkness',
            darknessBuff.offset.x,
            darknessBuff.offset.y,
            darknessImage,
        );
    }

    const isThreadsVisible =
        threadsAbility.isActiveOverlay && incantations.isActiveOverlay;
    const isThreadsActive = incantations.active[2];
    const threadsImage = isThreadsActive
        ? incantationImages.threads_inactive
        : incantationImages.threads;

    if (isThreadsVisible) {
        handleIncantationOverlays(
            'Threads',
            threadsAbility.offset.x * 2,
            0,
            threadsImage,
        );
    }

    const isSplitSoulVisible =
        splitSoul.isActiveOverlay && incantations.isActiveOverlay;
    const isSplitSoulActive = incantations.active[3];
    const splitSoulImage = isSplitSoulActive
        ? incantationImages.split_soul_inactive
        : incantationImages.split_soul;

    if (isSplitSoulVisible) {
        handleIncantationOverlays(
            'SplitSoul',
            splitSoul.offset.x * 2,
            splitSoul.offset.y,
            splitSoulImage,
        );
    }

    function handleIncantationOverlays(
        name: Abilities,
        xOffset: number,
        yOffset: number,
        image: ImageData,
    ) {
        alt1.overLaySetGroup(name);
        alt1.overLayImage(
            adjustPositionForScale(position.x + xOffset, gaugeData.scaleFactor),
            adjustPositionForScale(position.y + yOffset, gaugeData.scaleFactor),
            a1lib.encodeImageString(image.toDrawableData()),
            image.width,
            1000,
        );
    }
}
