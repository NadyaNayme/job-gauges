/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

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

export async function necrosisOverlay(gauges: Overlay) {
	const { necrosis } = gauges.necromancy.stacks;

	if (!necrosis.isActiveOverlay) {
		return;
	}

	await necrosisImages.promise;

	if (gauges.necromancy.stacks.useColoredNecrosis && !scaledOnce) {
		await necrosisColoredImages.promise;
		necrosisImages.necrosis_6 = necrosisColoredImages.necrosis_6;
		necrosisImages.necrosis_8 = necrosisColoredImages.necrosis_8;
		necrosisImages.necrosis_10 = necrosisColoredImages.necrosis_10;
		necrosisImages.necrosis_12 = necrosisColoredImages.necrosis_12;
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
			utility.playAlert(necrosisAlert);
			playingAlert = true;
		}
	} else if (playingAlert) {
		utility.pauseAlert(necrosisAlert);
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
				gauges.necromancy.position.y + y + bloatSpace,
				gauges.scaleFactor
			) + necrosisImages.necrosis_0.height,
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
