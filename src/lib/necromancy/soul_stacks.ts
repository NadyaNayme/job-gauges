import * as a1lib from 'alt1';

var soulImages = a1lib.webpackImages({
	souls_0: require('../.././asset/data/souls/lg/souls_0.data.png'),
	souls_1: require('../.././asset/data/souls/lg/souls_1.data.png'),
	souls_2: require('../.././asset/data/souls/lg/souls_2.data.png'),
	souls_3: require('../.././asset/data/souls/lg/souls_3.data.png'),
	souls_4: require('../.././asset/data/souls/lg/souls_4.data.png'),
	souls_5: require('../.././asset/data/souls/lg/souls_5.data.png'),
});

export async function soulsOverlay(gauges) {
	const { souls } = gauges.necromancy.stacks;

	if (!souls.visible) {
		return;
	}

	await soulImages.promise;

	const { position } = souls;
	const { x, y } = position.active_orientation;

	alt1.overLaySetGroup('Souls');

	switch (souls.count) {
		case 0:
			displaySoulImage(soulImages.souls_0);
			break;
		case 1:
			displaySoulImage(soulImages.souls_1);
			break;
		case 2:
			displaySoulImage(soulImages.souls_2);
			break;
		case 3:
			displaySoulImage(soulImages.souls_3);
			break;
		case 4:
			displaySoulImage(soulImages.souls_4);
			break;
		case 5:
			displaySoulImage(soulImages.souls_5);
			break;
		default:
			// Handle cases beyond 5 if needed
			break;
	}

	function displaySoulImage(image: ImageData) {
		alt1.overLayImage(
			gauges.necromancy.position.x + x,
			gauges.necromancy.position.y + y,
			a1lib.encodeImageString(image.toDrawableData()),
			image.width,
			1000
		);
	}
}
