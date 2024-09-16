import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import { adjustPositionForScale, handleResizingImages } from '../utility';

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
	
	const {
		bloat_100,
		bloat_90,
		bloat_80,
		bloat_70,
		bloat_60,
		bloat_50,
		bloat_40,
		bloat_30,
		bloat_20,
		bloat_10,
		bloat_0,
		bloat_expired,
	} = bloatImages;

	if (!scaledOnce) {
		handleResizingImages([
			bloat_100,
			bloat_90,
			bloat_80,
			bloat_70,
			bloat_60,
			bloat_50,
			bloat_40,
			bloat_30,
			bloat_20,
			bloat_10,
			bloat_0,
			bloat_expired
		], gauges.scaleFactor);

		scaledOnce = true;
	}

	const value = bloat.time;
  let image = bloat_expired;
  
	if (bloat.active) {
		if (value < 2.4) {
			image = bloat_0;
		} else if (value < 3.6) {
			image = bloat_10;
		} else if (value < 5.4) {
			image = bloat_20;
		} else if (value < 7.2) {
			image = bloat_30;
		} else if (value < 9.0) {
			image = bloat_40;
		} else if (value < 10.8) {
			image = bloat_50;
		} else if (value < 12.6) {
			image = bloat_60;
		} else if (value < 14.4) {
			image = bloat_70;
		} else if (value < 16.2) {
			image = bloat_80;
		} else if (value < 18.0) {
			image = bloat_90;
		} else {
			image = bloat_100;
		}
	} else {
		image = bloat_expired;
	}

	alt1.overLaySetGroup('Bloat');

	alt1.overLayImage(
		adjustPositionForScale(
			gauges.necromancy.position.x + bloat.position.active_orientation.x,
			gauges.scaleFactor
		),
		adjustPositionForScale(
			gauges.necromancy.position.y + bloat.position.active_orientation.y,
			gauges.scaleFactor
		),
		a1lib.encodeImageString(image),
		image.width,
		1000
	);
	alt1.overLayRefreshGroup('Bloat');
}
