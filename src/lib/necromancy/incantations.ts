import * as a1lib from 'alt1';

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

export async function incantationsOverlay(gauges) {

	const { incantations } = gauges.necromancy;
	const { invokeDeath, darkness, threads, splitSoul } = incantations;

	if (!incantations.visible) {
		return;
	}

	await incantationImages.promise;

	if (
		incantations.active[0] &&
		invokeDeath.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				invokeDeath.position
					.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.invoke_death.toDrawableData()
			),
			incantationImages.invoke_death.width,
			1000
		);
	} else if (
		invokeDeath.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				invokeDeath.position
					.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.invoke_death_inactive.toDrawableData()
			),
			incantationImages.invoke_death_inactive.width,
			1000
		);
	}

	if (
		incantations.active[1] &&
		darkness.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				darkness.position
					.active_orientation.x,
			gauges.necromancy.position.y +
				darkness.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.darkness.toDrawableData()
			),
			incantationImages.darkness.width,
			1000
		);
	} else if (
		darkness.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				darkness.position
					.active_orientation.x,
			gauges.necromancy.position.y +
				darkness.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.darkness_inactive.toDrawableData()
			),
			incantationImages.darkness_inactive.width,
			1000
		);
	}

	if (
		incantations.active[2] &&
		threads.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				threads.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.threads_inactive.toDrawableData()
			),
			incantationImages.threads_inactive.width,
			1000
		);
	} else if (
		threads.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				threads.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(incantationImages.threads.toDrawableData()),
			incantationImages.threads.width,
			1000
		);
	}

	if (
		incantations.active[3] &&
		splitSoul.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				splitSoul.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y +
				splitSoul.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.split_soul_inactive.toDrawableData()
			),
			incantationImages.split_soul_inactive.width,
			1000
		);
	} else if (
		splitSoul.visible &&
		incantations.visible
	) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				splitSoul.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y +
				splitSoul.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.split_soul.toDrawableData()
			),
			incantationImages.split_soul.width,
			1000
		);
	}
}
