/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import { Overlay } from '../../types';

const incantationImages = a1lib.webpackImages({
	invoke_death: require('../.././asset/gauge-ui/necromancy/incantations/invoke-death/active.data.png'),
	invoke_death_inactive: require('../.././asset/gauge-ui/necromancy/incantations/invoke-death/inactive.data.png'),
	darkness: require('../.././asset/gauge-ui/necromancy/incantations/darkness/active.data.png'),
	darkness_inactive: require('../.././asset/gauge-ui/necromancy/incantations/darkness/inactive.data.png'),
	threads: require('../.././asset/gauge-ui/necromancy/incantations/threads-of-fate/active.data.png'),
	threads_inactive: require('../.././asset/gauge-ui/necromancy/incantations/threads-of-fate/inactive.data.png'),
	split_soul: require('../.././asset/gauge-ui/necromancy/incantations/split-soul/active.data.png'),
	split_soul_inactive: require('../.././asset/gauge-ui/necromancy/incantations/split-soul/inactive.data.png'),
});

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
				gauges.scaleFactor
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
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.invoke_death.toDrawableData()
			),
			incantationImages.invoke_death.width,
			1000
		);
	} else if (invokeDeath.isActiveOverlay && incantations.isActiveOverlay) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					invokeDeath.position.active_orientation.x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				gauges.scaleFactor
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
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					darkness.position.active_orientation.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.darkness.toDrawableData()
			),
			incantationImages.darkness.width,
			1000
		);
	} else if (darkness.isActiveOverlay && incantations.isActiveOverlay) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					darkness.position.active_orientation.x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					darkness.position.active_orientation.y,
				gauges.scaleFactor
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
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.threads_inactive.toDrawableData()
			),
			incantationImages.threads_inactive.width,
			1000
		);
	} else if (threads.isActiveOverlay && incantations.isActiveOverlay) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					threads.position.active_orientation.x * 2,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y,
				gauges.scaleFactor
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
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					splitSoul.position.active_orientation.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.split_soul_inactive.toDrawableData()
			),
			incantationImages.split_soul_inactive.width,
			1000
		);
	} else if (splitSoul.isActiveOverlay && incantations.isActiveOverlay) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.necromancy.position.x +
					splitSoul.position.active_orientation.x * 2,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.necromancy.position.y +
					splitSoul.position.active_orientation.y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(
				incantationImages.split_soul.toDrawableData()
			),
			incantationImages.split_soul.width,
			1000
		);
	}
}
