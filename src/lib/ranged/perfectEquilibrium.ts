import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { store } from '../../state';
import { ImageOverlay, OverlaysManager } from '../../a1sauce/Overlays';

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
    const { x, y } = perfectEquilibrium.offset;

    if (!perfectEquilibrium.isActiveOverlay) {
        return;
    }

    await bolgImage.promise;

    if (!scaledOnce) {
        handleResizingImages(bolgImage, gaugeData.scaleFactor);

        scaledOnce = true;
    }

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
        const scaleFactor = gaugeData.scaleFactor;
        const position = ranged.position;
        const xPosition = position.x + x;
        const yPosition = position.y + y;

        const abilityImageOverlay: ImageOverlay = {
            name: 'PerfectEquilibrium',
            active: true,
            position: {
                x: adjustPositionForScale(xPosition, scaleFactor),
                y: adjustPositionForScale(yPosition, scaleFactor),
            },
            duration: 30000,
            image: a1lib.encodeImageString(image.toDrawableData()),
            width: image.width,
            category: '3',
        };
        OverlaysManager.updateOverlay(abilityImageOverlay);
    }

    function displayStacks(stacks: number): void {
        alt1.overLaySetGroup(`PerfectEquilibrium_Text`);
        alt1.overLayFreezeGroup(`PerfectEquilibrium_Text`);
        alt1.overLayClearGroup(`PerfectEquilibrium_Text`);
        alt1.overLayTextEx(
            `${stacks}`,
            white,
            Math.ceil(14 * (gaugeData.scaleFactor * 0.75)),
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
