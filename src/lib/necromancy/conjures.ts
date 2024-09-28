import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages } from '../utility';
import { store } from '../../state';

const conjureImages = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/necromancy/conjure-undead-army/active.data.png'),
    inactive: require('../../asset/gauge-ui/necromancy/conjure-undead-army/inactive.data.png'),
});

const white = a1lib.mixColor(255, 255, 255);
let lastMinValue: number = 0;

let scaledOnce = false;

export async function conjureOverlay() {
    const { gaugeData, necromancy } = store.getState();

    if (!necromancy.conjures.isActiveOverlay) {
        return;
    }

    await conjureImages.promise;

    if (!scaledOnce) {
        handleResizingImages(conjureImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    alt1.overLaySetGroup('Undead_Army');
    if (necromancy.conjures.active) {
        alt1.overLayImage(
            adjustPositionForScale(
                necromancy.position.x +
                necromancy.conjures.position.active_orientation.x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y +
                necromancy.conjures.position.active_orientation.y,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(conjureImages.active.toDrawableData()),
            conjureImages.active.width,
            1000,
        );
    } else {
        alt1.overLayImage(
            adjustPositionForScale(
                necromancy.position.x +
                necromancy.conjures.position.active_orientation.x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y +
                necromancy.conjures.position.active_orientation.y,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(conjureImages.inactive.toDrawableData()),
            conjureImages.inactive.width,
            1000,
        );
    }

    const earliest_conjure = [
        necromancy.conjures.skeleton.time,
        necromancy.conjures.zombie.time,
        necromancy.conjures.ghost.time,
        necromancy.conjures.phantom.time,
    ];

    const minValue = Math.min.apply(null, earliest_conjure.filter(Boolean));
    if (minValue !== Infinity && minValue !== lastMinValue) {
        alt1.overLaySetGroup('Undead_Army_Text');
        alt1.overLayFreezeGroup('Undead_Army_Text');
        alt1.overLayClearGroup('Undead_Army_Text');
        alt1.overLayTextEx(
            `${minValue}`,
            white,
            14,
            adjustPositionForScale(
                necromancy.position.x +
                26 +
                necromancy.conjures.position.active_orientation.x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y + 32,
                gaugeData.scaleFactor,
            ),
            10000,
            '',
            true,
            true,
        );
        lastMinValue = minValue;
    }

    alt1.overLayRefreshGroup('Undead_Army_Text');
}
