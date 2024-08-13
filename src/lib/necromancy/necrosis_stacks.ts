/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const necrosisImages = a1lib.webpackImages({
	necrosis_0: require('../.././asset/data/necrosis/lg/necrosis_0.data.png'),
	necrosis_2: require('../.././asset/data/necrosis/lg/necrosis_2.data.png'),
	necrosis_4: require('../.././asset/data/necrosis/lg/necrosis_4.data.png'),
	necrosis_6: require('../.././asset/data/necrosis/lg/necrosis_6.data.png'),
	necrosis_8: require('../.././asset/data/necrosis/lg/necrosis_8.data.png'),
	necrosis_10: require('../.././asset/data/necrosis/lg/necrosis_10.data.png'),
	necrosis_12: require('../.././asset/data/necrosis/lg/necrosis_12.data.png'),
});

let scaledOnce = false;
let playingAlert = false;

export async function necrosisOverlay(gauges: Overlay) {
	const { necrosis } = gauges.necromancy.stacks;

	await necrosisImages.promise;

	if (!necrosis.isActiveOverlay) {
		return;
	}

	if (!scaledOnce) {
		Object.keys(necrosisImages).forEach(async (key) => {
			necrosisImages[key] = await utility.resizeImageData(
				necrosisImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	const { position, stacks } = necrosis;
	console.log(stacks);
	const { x, y } = position.active_orientation;
	const bloatVisible = !gauges.necromancy.bloat.isActiveOverlay;
	let bloatSpace = 0;
	if (bloatVisible) {
		bloatSpace = -23;
	}

	alt1.overLaySetGroup('Necrosis');

	switch (stacks) {
		case 0:
		case 2:
		case 4:
		case 6:
		case 8:
		case 10:
		case 12:
			displayNecrosisImage(stacks);
			break;
	}

	if (stacks >= necrosis.alarm.threshold && necrosis.alarm.isActive) {
		if (!playingAlert) {
			utility.playAlert('necrosis');
			playingAlert = true;
		}
	} else if (playingAlert) {
		utility.pauseAlert('necrosis');
		playingAlert = false;
	}

	if (gauges.necromancy.stacks.duplicateNecrosisRow) {
		alt1.overLaySetGroup('Necrosis_Row2');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x + x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					y +
					necrosisImages.necrosis_0.height +
					bloatSpace,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${stacks}`].toDrawableData()
			),
			necrosisImages[`necrosis_${stacks}`].width,
			1000
		);
	}

	function displayNecrosisImage(stacks: number): void {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x + x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y + y + bloatSpace,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${stacks}`].toDrawableData()
			),
			necrosisImages[`necrosis_${stacks}`].width,
			1000
		);
	}
}
