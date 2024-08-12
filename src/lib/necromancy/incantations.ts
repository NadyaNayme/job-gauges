import * as a1lib from 'alt1';
import * as sauce from '../../a1sauce';
import * as utility from '../utility';
import { Overlay } from '../../types';

var incantationImages = a1lib.webpackImages({
	invoke_death_inactive: require('../.././asset/data/incantations/lg/invoke_death_inactive.data.png'),
	invoke_death: require('../.././asset/data/incantations/lg/invoke_death.data.png'),
	darkness_inactive: require('../.././asset/data/incantations/lg/darkness_inactive.data.png'),
	darkness: require('../.././asset/data/incantations/lg/darkness.data.png'),
	threads_inactive: require('../.././asset/data/incantations/lg/threads_inactive.data.png'),
	threads: require('../.././asset/data/incantations/lg/threads.data.png'),
	split_soul_inactive: require('../.././asset/data/incantations/lg/splitsoul_inactive.data.png'),
	split_soul: require('../.././asset/data/incantations/lg/splitsoul.data.png'),
});

let scaleFactor = sauce.getSetting('scale') / 100;
let scaledOnce = false;

export async function incantationsOverlay(gauges: Overlay) {

	const { incantations } = gauges.necromancy;
	const { invokeDeath, darkness, threads, splitSoul } = incantations;

	if (!incantations.isActiveOverlay) {
		return;
	}

	await incantationImages.promise;

	if (!scaledOnce) {
		Object.keys(incantationImages).forEach(async (key) => {
			incantationImages[key] = await utility.resizeImageData(
				incantationImages[key],
				scaleFactor
			);
		});
		scaledOnce = true;
	}

	if (
		incantations.active[0] &&
		invokeDeath.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					invokeDeath.position.active_orientation.x,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.invoke_death.toDrawableData()
			),
			incantationImages.invoke_death.width,
			1000
		);
	} else if (
		invokeDeath.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					invokeDeath.position.active_orientation.x,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.invoke_death_inactive.toDrawableData()
			),
			incantationImages.invoke_death_inactive.width,
			1000
		);
	}

	if (
		incantations.active[1] &&
		darkness.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					darkness.position.active_orientation.x,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					darkness.position.active_orientation.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.darkness.toDrawableData()
			),
			incantationImages.darkness.width,
			1000
		);
	} else if (
		darkness.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					darkness.position.active_orientation.x,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					darkness.position.active_orientation.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.darkness_inactive.toDrawableData()
			),
			incantationImages.darkness_inactive.width,
			1000
		);
	}

	if (
		incantations.active[2] &&
		threads.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					threads.position.active_orientation.x * 2,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.threads_inactive.toDrawableData()
			),
			incantationImages.threads_inactive.width,
			1000
		);
	} else if (
		threads.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					threads.position.active_orientation.x * 2,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				scaleFactor
			),
			a1lib.encodeImageString(incantationImages.threads.toDrawableData()),
			incantationImages.threads.width,
			1000
		);
	}

	if (
		incantations.active[3] &&
		splitSoul.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					splitSoul.position.active_orientation.x * 2,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					splitSoul.position.active_orientation.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.split_soul_inactive.toDrawableData()
			),
			incantationImages.split_soul_inactive.width,
			1000
		);
	} else if (
		splitSoul.isActiveOverlay &&
		incantations.isActiveOverlay
	) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					splitSoul.position.active_orientation.x * 2,
				scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					splitSoul.position.active_orientation.y,
				scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.split_soul.toDrawableData()
			),
			incantationImages.split_soul.width,
			1000
		);
	}
}
