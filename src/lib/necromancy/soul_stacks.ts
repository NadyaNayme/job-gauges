/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const soulImages = a1lib.webpackImages({
	souls_0: require('../.././asset/data/souls/lg/souls_0.data.png'),
	souls_1: require('../.././asset/data/souls/lg/souls_1.data.png'),
	souls_2: require('../.././asset/data/souls/lg/souls_2.data.png'),
	souls_3: require('../.././asset/data/souls/lg/souls_3.data.png'),
	souls_4: require('../.././asset/data/souls/lg/souls_4.data.png'),
	souls_5: require('../.././asset/data/souls/lg/souls_5.data.png'),
});

let scaledOnce = false;
let playingAlert = false;

export async function soulsOverlay(gauges: Overlay) {
	const { souls } = gauges.necromancy.stacks;

	if (!souls.isActiveOverlay) {
		return;
	}

	await soulImages.promise;

	if (!scaledOnce) {
		Object.keys(soulImages).forEach(async (key) => {
			soulImages[key] = await utility.resizeImageData(
				soulImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	const { position } = souls;
	const { x, y } = position.active_orientation;

	alt1.overLaySetGroup('Souls');

	switch (souls.stacks) {
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
	if (souls.stacks >= souls.alarm.threshold && souls.alarm.isActive) {
		if (!playingAlert) {
			utility.playAlert('souls');
			playingAlert = true;
		}
	} else if (playingAlert) {
		utility.pauseAlert('souls');
		playingAlert = false;
	}

	function displaySoulImage(image: ImageData): void {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x + x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y + y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(image.toDrawableData()),
			image.width,
			1000
		);
	}
}
