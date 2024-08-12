import * as a1lib from 'alt1';
import * as sauce from '../../a1sauce';
import * as utility from '../utility';
import { Overlay } from '../../types';

var necrosisImages = a1lib.webpackImages({
	necrosis_0: require('../.././asset/data/necrosis/lg/necrosis_0.data.png'),
	necrosis_2: require('../.././asset/data/necrosis/lg/necrosis_2.data.png'),
	necrosis_4: require('../.././asset/data/necrosis/lg/necrosis_4.data.png'),
	necrosis_6: require('../.././asset/data/necrosis/lg/necrosis_6.data.png'),
	necrosis_8: require('../.././asset/data/necrosis/lg/necrosis_8.data.png'),
	necrosis_10: require('../.././asset/data/necrosis/lg/necrosis_10.data.png'),
	necrosis_12: require('../.././asset/data/necrosis/lg/necrosis_12.data.png'),
});

let scaleFactor = sauce.getSetting('scale') / 100;
let scaledOnce = false;

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
				scaleFactor
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

	if (gauges.necromancy.stacks.duplicateNecrosisRow) {
		alt1.overLaySetGroup('Necrosis_Row2');
		alt1.overLayImage(
			utility.adjustPositionForScale(gauges.necromancy.position.x + x, scaleFactor),
			utility.adjustPositionForScale(gauges.necromancy.position.y + y + necrosisImages.necrosis_0.height + bloatSpace, scaleFactor),
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${stacks}`].toDrawableData()
			),
			necrosisImages[`necrosis_${stacks}`].width,
			1000
		);
	}

	function displayNecrosisImage(count: number): void {
		alt1.overLayImage(
			utility.adjustPositionForScale(gauges.necromancy.position.x + x, scaleFactor),
			utility.adjustPositionForScale(gauges.necromancy.position.y + y + bloatSpace, scaleFactor),
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${count}`].toDrawableData()
			),
			necrosisImages[`necrosis_${count}`].width,
			1000
		);
	}
}
