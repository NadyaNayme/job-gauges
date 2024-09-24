import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, pauseAlert, playAlert } from '../utility';
import { store } from '../../state';

const necrosisImages = a1lib.webpackImages({
    necrosis_0: require('../../asset/gauge-ui/necromancy/necrosis/0.data.png'),
    necrosis_2: require('../../asset/gauge-ui/necromancy/necrosis/2.data.png'),
    necrosis_4: require('../../asset/gauge-ui/necromancy/necrosis/4.data.png'),
    necrosis_6: require('../../asset/gauge-ui/necromancy/necrosis/6.data.png'),
    necrosis_8: require('../../asset/gauge-ui/necromancy/necrosis/8.data.png'),
    necrosis_10: require('../../asset/gauge-ui/necromancy/necrosis/10.data.png'),
    necrosis_12: require('../../asset/gauge-ui/necromancy/necrosis/12.data.png'),
});

const necrosisColoredImages = a1lib.webpackImages({
    necrosis_6: require('../../asset/gauge-ui/necromancy/necrosis/colored/6-warning.data.png'),
    necrosis_8: require('../../asset/gauge-ui/necromancy/necrosis/colored/8-warning.data.png'),
    necrosis_10: require('../../asset/gauge-ui/necromancy/necrosis/colored/10-warning.data.png'),
    necrosis_12: require('../../asset/gauge-ui/necromancy/necrosis/colored/12-danger.data.png'),
});

let scaledOnce = false;
let playingAlert = false;

const necrosisAlert: HTMLAudioElement = new Audio();
necrosisAlert.id = 'alarmNecrosis';
document.body.appendChild(necrosisAlert);

export async function necrosisOverlay() {
    const { necromancy, gaugeData } = store.getState();
    const { necrosis } = necromancy.stacks;

    if (!necrosis.isActiveOverlay) {
        return;
    }

    await necrosisImages.promise;

    if (necromancy.stacks.useColoredNecrosis && !scaledOnce) {
        await necrosisColoredImages.promise;
        necrosisImages.necrosis_6 = necrosisColoredImages.necrosis_6;
        necrosisImages.necrosis_8 = necrosisColoredImages.necrosis_8;
        necrosisImages.necrosis_10 = necrosisColoredImages.necrosis_10;
        necrosisImages.necrosis_12 = necrosisColoredImages.necrosis_12;
    }

    if (!scaledOnce) {
        handleResizingImages(necrosisImages, gaugeData.scaleFactor);
        scaledOnce = true;
    }

    const { position, stacks } = necrosis;
    const { x, y } = position.active_orientation;
    const bloatVisible = !necromancy.bloat.isActiveOverlay;

    let bloatSpace = 0;
    if (bloatVisible) {
        bloatSpace = -23;
    }

    alt1.overLaySetGroup('Necrosis');

    displayNecrosisImage(stacks);

    if (stacks >= necrosis.alarm.threshold && necrosis.alarm.isActive && !playingAlert) {
        playAlert(necrosisAlert);
        playingAlert = true;
    } else if (playingAlert) {
        pauseAlert(necrosisAlert);
        playingAlert = false;
    }

    if (necromancy.stacks.duplicateNecrosisRow) {
        // @ts-ignore Don't want to mess with Alt1's typings. This will be a rare case.
        const necrosisImage = necrosisImages[`necrosis_${stacks}`];

        alt1.overLaySetGroup('Necrosis_Row2');
        alt1.overLayImage(
            adjustPositionForScale(
                necromancy.position.x + x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y + y + bloatSpace,
                gaugeData.scaleFactor,
            ) + necrosisImages.necrosis_0.height,
            a1lib.encodeImageString(necrosisImage.toDrawableData()),
            necrosisImage.width,
            1000,
        );
    }

    function displayNecrosisImage(stacks: number): void {
        // @ts-expect-error Don't want to mess with Alt1's typings. This will be a rare case.
        const necrosisImage = necrosisImages[`necrosis_${stacks}`];

        alt1.overLayImage(
            adjustPositionForScale(
                necromancy.position.x + x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                necromancy.position.y + y + bloatSpace,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(necrosisImage.toDrawableData()),
            necrosisImage.width,
            1000,
        );
    }
}
