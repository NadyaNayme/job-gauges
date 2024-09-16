import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import {
    adjustPositionForScale,
    handleResizingImages,
    pauseAlert,
    playAlert,
} from '../utility';

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
let playingAlert = false;

const soulsAlert: HTMLAudioElement = new Audio();
soulsAlert.id = 'alarmSouls';
document.body.appendChild(soulsAlert);

export async function soulsOverlay(gauges: Overlay) {
    const { souls } = gauges.necromancy.stacks;

    if (!souls.isActiveOverlay) {
        return;
    }

    await soulImages.promise;

    if (gauges.necromancy.stacks.pre95Souls && !scaledOnce) {
        await pre95SoulImages.promise;
        soulImages.souls_0 = pre95SoulImages.souls_0;
        soulImages.souls_1 = pre95SoulImages.souls_1;
        soulImages.souls_2 = pre95SoulImages.souls_2;
        soulImages.souls_3 = pre95SoulImages.souls_3;
    }

    if (!scaledOnce) {
        handleResizingImages(soulImages, gauges.scaleFactor);

        scaledOnce = true;
    }

    const { position } = souls;
    const { x, y } = position.active_orientation;

    alt1.overLaySetGroup('Souls');

    const displaySoulImage = (image: ImageData) => {
        alt1.overLayImage(
            adjustPositionForScale(
                gauges.necromancy.position.x + x,
                gauges.scaleFactor,
            ),
            adjustPositionForScale(
                gauges.necromancy.position.y + y,
                gauges.scaleFactor,
            ),
            a1lib.encodeImageString(image.toDrawableData()),
            image.width,
            1000,
        );
    };

    switch (souls.stacks) {
        case 0:
            displaySoulImage(soulImages.souls_0);
            break;
        case 1:
            displaySoulImage(soulImages.souls_1);
            break;
        case 2:
            displaySoulImage(soulImages.souls_2);
            break;
        case 3:
            displaySoulImage(soulImages.souls_3);
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

    if (souls.stacks >= souls.alarm.threshold && souls.alarm.isActive) {
        if (!playingAlert) {
            await playAlert(soulsAlert);
            playingAlert = true;
        }
    } else if (playingAlert) {
        pauseAlert(soulsAlert);
        playingAlert = false;
    }
}
