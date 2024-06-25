import * as a1lib from 'alt1';

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

let white = a1lib.mixColor(255, 255, 255);
export async function bloatOverlay(gauges) {
	if (!gauges.necromancy.bloat.visible) {
		return;
	}
	await bloatImages.promise;
	if (gauges.necromancy.bloat.active && gauges.necromancy.bloat.visible) {
		let value = parseFloat(gauges.necromancy.bloat.time);
		switch (true) {
			case value < 2.4:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_0.toDrawableData()
					),
					bloatImages.bloat_0.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 3.6:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_10.toDrawableData()
					),
					bloatImages.bloat_10.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 5.4:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_20.toDrawableData()
					),
					bloatImages.bloat_20.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 7.2:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_30.toDrawableData()
					),
					bloatImages.bloat_30.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 9.0:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_40.toDrawableData()
					),
					bloatImages.bloat_40.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 10.8:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_50.toDrawableData()
					),
					bloatImages.bloat_50.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 12.6:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_60.toDrawableData()
					),
					bloatImages.bloat_60.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 14.4:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_70.toDrawableData()
					),
					bloatImages.bloat_70.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 16.2:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_80.toDrawableData()
					),
					bloatImages.bloat_80.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value < 18.0:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_90.toDrawableData()
					),
					bloatImages.bloat_90.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
			case value >= 18.0:
				alt1.overLaySetGroup('Bloat');
				alt1.overLayImage(
					gauges.necromancy.position.x +
						gauges.necromancy.bloat.position.active_orientation.x,
					gauges.necromancy.position.y +
						gauges.necromancy.bloat.position.active_orientation.y,
					a1lib.encodeImageString(
						bloatImages.bloat_100.toDrawableData()
					),
					bloatImages.bloat_100.width,
					1000
				);
				alt1.overLayRefreshGroup('Bloat');
				break;
		}
	} else if (gauges.necromancy.bloat.visible) {
		alt1.overLaySetGroup('Bloat');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				gauges.necromancy.bloat.position.active_orientation.x,
			gauges.necromancy.position.y +
				gauges.necromancy.bloat.position.active_orientation.y,
			a1lib.encodeImageString(bloatImages.bloat_expired.toDrawableData()),
			bloatImages.bloat_expired.width,
			1000
		);
	}
}
