import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, pauseAlert, playAlert } from '../utility';
import { store } from '../../state';

const soulImages = a1lib.webpackImages({
    souls_0: require('../../asset/gauge-ui/necromancy/residual-souls/0.data.png'),
    souls_1: require('../../asset/gauge-ui/necromancy/residual-souls/1.data.png'),
    souls_2: require('../../asset/gauge-ui/necromancy/residual-souls/2.data.png'),
    souls_3: require('../../asset/gauge-ui/necromancy/residual-souls/3.data.png'),
    souls_4: require('../../asset/gauge-ui/necromancy/residual-souls/4.data.png'),
    souls_5: require('../../asset/gauge-ui/necromancy/residual-souls/5.data.png'),
});

const pre95SoulImages = a1lib.webpackImages({
    souls_0: require('../../asset/gauge-ui/necromancy/residual-souls/pre95/0.data.png'),
    souls_1: require('../../asset/gauge-ui/necromancy/residual-souls/pre95/1.data.png'),
    souls_2: require('../../asset/gauge-ui/necromancy/residual-souls/pre95/2.data.png'),
    souls_3: require('../../asset/gauge-ui/necromancy/residual-souls/pre95/3.data.png'),
});

let scaledOnce = false;

export async function soulsOverlay() {
    const { gaugeData, necromancy } = store.getState();
    const { souls } = necromancy.stacks;

    if (!souls.isActiveOverlay) {
        return;
    }

    if (!scaledOnce) {
        await soulImages.promise;
        await pre95SoulImages.promise;

        handleResizingImages(soulImages, gaugeData.scaleFactor);
        handleResizingImages(pre95SoulImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const activeSoulImages = necromancy.stacks.pre95Souls ? pre95SoulImages : soulImages;

    const { position } = souls;
    const { x, y } = position.active_orientation;

    alt1.overLaySetGroup('Souls');

    const displaySoulImage = (image: ImageData) => {
        alt1.overLayImage(
            adjustPositionForScale(
                necromancy.position.x + x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y + y,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(image.toDrawableData()),
            image.width,
            1000,
        );
    };

    switch (souls.stacks) {
        case 0:
            displaySoulImage(activeSoulImages.souls_0);
            break;
        case 1:
            displaySoulImage(activeSoulImages.souls_1);
            break;
        case 2:
            displaySoulImage(activeSoulImages.souls_2);
            break;
        case 3:
            displaySoulImage(activeSoulImages.souls_3);
            break;
        case 4:
            displaySoulImage(soulImages.souls_4);
            break;
        case 5:
            displaySoulImage(soulImages.souls_5);
            break;
        default:
            // Handle cases beyond 5 if needed
            break;
    }
}
