/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const bloatImages = a1lib.webpackImages({
	bloat_100: require('../../asset/gauge-ui/necromancy/bloat/100.data.png'),
	bloat_90: require('../../asset/gauge-ui/necromancy/bloat/90.data.png'),
	bloat_80: require('../../asset/gauge-ui/necromancy/bloat/80.data.png'),
	bloat_70: require('../../asset/gauge-ui/necromancy/bloat/70.data.png'),
	bloat_60: require('../../asset/gauge-ui/necromancy/bloat/60.data.png'),
	bloat_50: require('../../asset/gauge-ui/necromancy/bloat/50.data.png'),
	bloat_40: require('../../asset/gauge-ui/necromancy/bloat/40.data.png'),
	bloat_30: require('../../asset/gauge-ui/necromancy/bloat/30.data.png'),
	bloat_20: require('../../asset/gauge-ui/necromancy/bloat/20.data.png'),
	bloat_10: require('../../asset/gauge-ui/necromancy/bloat/10.data.png'),
	bloat_0: require('../../asset/gauge-ui/necromancy/bloat/0.data.png'),
	bloat_expired: require('../../asset/gauge-ui/necromancy/bloat/expired.data.png'),
});

let scaledOnce = false;

export async function bloatOverlay(gauges: Overlay) {
	const { bloat } = gauges.necromancy;

	if (!bloat.isActiveOverlay) {
		return;
	}

	await bloatImages.promise;

	if (!scaledOnce) {
		Object.keys(bloatImages).forEach(async (key) => {
			bloatImages[key] = await utility.resizeImageData(
				bloatImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	const value = bloat.time;
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
	const image = bloatImages[imageKey];

	alt1.overLayImage(
		utility.adjustPositionForScale(
			gauges.necromancy.position.x + bloat.position.active_orientation.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.necromancy.position.y + bloat.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(image),
		image.width,
		1000
	);
	alt1.overLayRefreshGroup('Bloat');
}
