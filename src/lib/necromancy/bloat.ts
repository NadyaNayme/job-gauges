import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages } from '../utility';
import { store } from '../../state';
import { ImageOverlay, OverlaysManager } from '../../a1sauce/Overlays';
import { CombatStyle } from '../../types';

const bloatImages = a1lib.webpackImages({
    bloat_100: require('../../asset/gauge-ui/necromancy/bloat/100.data.png'),
    bloat_90: require('../../asset/gauge-ui/necromancy/bloat/90.data.png'),
    bloat_80: require('../../asset/gauge-ui/necromancy/bloat/80.data.png'),
    bloat_70: require('../../asset/gauge-ui/necromancy/bloat/70.data.png'),
    bloat_60: require('../../asset/gauge-ui/necromancy/bloat/60.data.png'),
    bloat_50: require('../../asset/gauge-ui/necromancy/bloat/50.data.png'),
    bloat_40: require('../../asset/gauge-ui/necromancy/bloat/40.data.png'),
    bloat_30: require('../../asset/gauge-ui/necromancy/bloat/30.data.png'),
    bloat_20: require('../../asset/gauge-ui/necromancy/bloat/20.data.png'),
    bloat_10: require('../../asset/gauge-ui/necromancy/bloat/10.data.png'),
    bloat_0: require('../../asset/gauge-ui/necromancy/bloat/0.data.png'),
    bloat_expired: require('../../asset/gauge-ui/necromancy/bloat/expired.data.png'),
});

let scaledOnce = false;

export async function bloatOverlay() {
    const { gaugeData, necromancy } = store.getState();
    const { bloat } = necromancy;

    if (!bloat.isActiveOverlay) {
        return;
    }

    await bloatImages.promise;

    if (!scaledOnce) {
        handleResizingImages(bloatImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const value = bloat.time;
    let image = bloatImages.bloat_expired;

    if (bloat.active) {
        if (value < 2.4) {
            image = bloatImages.bloat_0;
        } else if (value < 3.6) {
            image = bloatImages.bloat_10;
        } else if (value < 5.4) {
            image = bloatImages.bloat_20;
        } else if (value < 7.2) {
            image = bloatImages.bloat_30;
        } else if (value < 9.0) {
            image = bloatImages.bloat_40;
        } else if (value < 10.8) {
            image = bloatImages.bloat_50;
        } else if (value < 12.6) {
            image = bloatImages.bloat_60;
        } else if (value < 14.4) {
            image = bloatImages.bloat_70;
        } else if (value < 16.2) {
            image = bloatImages.bloat_80;
        } else if (value < 18.0) {
            image = bloatImages.bloat_90;
        } else {
            image = bloatImages.bloat_100;
        }
    } else {
        image = bloatImages.bloat_expired;
    }

    alt1.overLaySetGroup('Bloat');

    alt1.overLayImage(
        adjustPositionForScale(
            necromancy.position.x + bloat.offset.x,
            gaugeData.scaleFactor,
        ),
        adjustPositionForScale(
            necromancy.position.y + bloat.offset.y,
            gaugeData.scaleFactor,
        ),
        a1lib.encodeImageString(image),
        image.width,
        1000,
    );
    alt1.overLayRefreshGroup('Bloat');

    const { x, y } = bloat.offset;
    const xPosition = necromancy.position.x + x;
    const yPosition = necromancy.position.y + y;

    const abilityImageOverlay: ImageOverlay = {
        name: 'Bloat',
        active: true,
        position: {
            x: adjustPositionForScale(xPosition, gaugeData.scaleFactor),
            y: adjustPositionForScale(yPosition, gaugeData.scaleFactor),
        },
        duration: 4000,
        image: a1lib.encodeImageString(image.toDrawableData()),
        width: image.width,
        category: CombatStyle.necromancy,
    };

    OverlaysManager.updateOverlay(abilityImageOverlay);

}
