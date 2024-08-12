import * as a1lib from 'alt1';
import * as sauce from '../../a1sauce';
import * as utility from '../utility';
import { Overlay } from '../../types';

var bloatImages = a1lib.webpackImages({
	bloat_100: require('../.././asset/data/bloat/lg/bloat_100.data.png'),
	bloat_90: require('../.././asset/data/bloat/lg/bloat_90.data.png'),
	bloat_80: require('../.././asset/data/bloat/lg/bloat_80.data.png'),
	bloat_70: require('../.././asset/data/bloat/lg/bloat_70.data.png'),
	bloat_60: require('../.././asset/data/bloat/lg/bloat_60.data.png'),
	bloat_50: require('../.././asset/data/bloat/lg/bloat_50.data.png'),
	bloat_40: require('../.././asset/data/bloat/lg/bloat_40.data.png'),
	bloat_30: require('../.././asset/data/bloat/lg/bloat_30.data.png'),
	bloat_20: require('../.././asset/data/bloat/lg/bloat_20.data.png'),
	bloat_10: require('../.././asset/data/bloat/lg/bloat_10.data.png'),
	bloat_0: require('../.././asset/data/bloat/lg/bloat_0.data.png'),
	bloat_expired: require('../.././asset/data/bloat/lg/bloat_expired.data.png'),
});

let scaleFactor = sauce.getSetting('scale') / 100;
let scaledOnce = false;

export async function bloatOverlay(gauges: Overlay) {
	const { bloat } = gauges.necromancy;

	if (!bloat.visible) {
		return;
	}

	await bloatImages.promise;

	if (!scaledOnce) {
		Object.keys(bloatImages).forEach(async (key) => {
			bloatImages[key] = await utility.resizeImageData(bloatImages[key], scaleFactor);
		});
		scaledOnce = true;
	}

	let value = bloat.time;
	let imageKey: string = 'bloat_expired';

	if (bloat.active) {
		if (value < 2.4) {
			imageKey = 'bloat_0';
		} else if (value < 3.6) {
			imageKey = 'bloat_10';
		} else if (value < 5.4) {
			imageKey = 'bloat_20';
		} else if (value < 7.2) {
			imageKey = 'bloat_30';
		} else if (value < 9.0) {
			imageKey = 'bloat_40';
		} else if (value < 10.8) {
			imageKey = 'bloat_50';
		} else if (value < 12.6) {
			imageKey = 'bloat_60';
		} else if (value < 14.4) {
			imageKey = 'bloat_70';
		} else if (value < 16.2) {
			imageKey = 'bloat_80';
		} else if (value < 18.0) {
			imageKey = 'bloat_90';
		} else {
			imageKey = 'bloat_100';
		}
	} else {
		imageKey = 'bloat_expired';
	}

	alt1.overLaySetGroup('Bloat');
	let image = bloatImages[imageKey];

	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.necromancy.position.x + bloat.position.active_orientation.x,
			scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.necromancy.position.y + bloat.position.active_orientation.y,
			scaleFactor
		),
		a1lib.encodeImageString(image),
		image.width,
		1000
	);
	alt1.overLayRefreshGroup('Bloat');
}
