import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { store } from '../../state';

const bolgImage = a1lib.webpackImages({
    active: require('../../asset/gauge-ui/ranged/perfect-equilibrium/active.data.png'),
    inactive: require('../../asset/gauge-ui/ranged/perfect-equilibrium/inactive.data.png'),
});

let scaledOnce = false;
let lastStacks = 0;

export async function peOverlay() {
    const { ranged, gaugeData } = store.getState();
    const { perfectEquilibrium } = ranged;
    const { stacks } = ranged.perfectEquilibrium;

    if (!perfectEquilibrium.isActiveOverlay) {
        return;
    }

    await bolgImage.promise;

    if (!scaledOnce) {
        handleResizingImages(bolgImage, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const { position } = perfectEquilibrium;
    const { x, y } = position.active_orientation;

    alt1.overLaySetGroup('PerfectEquilibrium');

    if (ranged.balanceByForce) {
        displayBuffImage(bolgImage.active);
    } else {
        displayBuffImage(bolgImage.inactive);
    }

    if (stacks !== lastStacks) {
        displayStacks(stacks);
        lastStacks = stacks;
    }

    function displayBuffImage(image: ImageData): void {
        alt1.overLayImage(
            adjustPositionForScale(
                ranged.position.x + x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                ranged.position.y + y,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(image.toDrawableData()),
            image.width,
            1000,
        );
    }

    function displayStacks(stacks: number): void {
        alt1.overLaySetGroup(`PerfectEquilibrium_Text`);
        alt1.overLayFreezeGroup(`PerfectEquilibrium_Text`);
        alt1.overLayClearGroup(`PerfectEquilibrium_Text`);
        alt1.overLayTextEx(
            `${stacks}`,
            white,
            14,
            adjustPositionForScale(
                ranged.position.x + x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                ranged.position.y + y + 26,
                gaugeData.scaleFactor,
            ),
            30000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('PerfectEquilibrium_Text');
    }
}
