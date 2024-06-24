import * as a1lib from 'alt1';

var incantationImages = a1lib.webpackImages({
	invoke_death_inactive: require('../.././asset/data/incantations/invoke_death_inactive.data.png'),
	invoke_death: require('../.././asset/data/incantations/invoke_death.data.png'),
	darkness_inactive: require('../.././asset/data/incantations/darkness_inactive.data.png'),
	darkness: require('../.././asset/data/incantations/darkness.data.png'),
	threads_inactive: require('../.././asset/data/incantations/threads_inactive.data.png'),
	threads: require('../.././asset/data/incantations/threads.data.png'),
	split_soul_inactive: require('../.././asset/data/incantations/splitsoul_inactive.data.png'),
	split_soul: require('../.././asset/data/incantations/splitsoul.data.png'),
});

export async function incantationsOverlay(gauges) {
	await incantationImages.promise;
	if (gauges.necromancy.incantations.active[0]) {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			gauges.necromancy.position.x  + gauges.necromancy.incantations.invokeDeath.position.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.invoke_death.toDrawableData()
			),
			incantationImages.invoke_death.width,
			1000
		);
	} else {
		alt1.overLaySetGroup('Invoke_Death');
		alt1.overLayImage(
			gauges.necromancy.position.x  + gauges.necromancy.incantations.invokeDeath.position.active_orientation.x,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.invoke_death_inactive.toDrawableData()
			),
			incantationImages.invoke_death_inactive.width,
			1000
		);
	}

	if (gauges.necromancy.incantations.active[1]) {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			gauges.necromancy.position.x  + gauges.necromancy.incantations.darkness.position.active_orientation.x,
			gauges.necromancy.position.y + gauges.necromancy.incantations.darkness.position.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.darkness.toDrawableData()
			),
			incantationImages.darkness.width,
			1000
		);
	} else {
		alt1.overLaySetGroup('Darkness');
		alt1.overLayImage(
			gauges.necromancy.position.x  + gauges.necromancy.incantations.darkness.position.active_orientation.x,
			gauges.necromancy.position.y + gauges.necromancy.incantations.darkness.position.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.darkness_inactive.toDrawableData()
			),
			incantationImages.darkness_inactive.width,
			1000
		);
	}

	if (gauges.necromancy.incantations.active[2]) {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				gauges.necromancy.incantations.threads.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(
				incantationImages.threads_inactive.toDrawableData()
			),
			incantationImages.threads_inactive.width,
			1000
		);
	} else {
		alt1.overLaySetGroup('Threads');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				gauges.necromancy.incantations.threads.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y,
			a1lib.encodeImageString(incantationImages.threads.toDrawableData()),
			incantationImages.threads.width,
			1000
		);
	}

	if (gauges.necromancy.incantations.active[3]) {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				gauges.necromancy.incantations.splitSoul.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y +
				gauges.necromancy.incantations.splitSoul.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.split_soul_inactive.toDrawableData()
			),
			incantationImages.split_soul_inactive.width,
			1000
		);
	} else {
		alt1.overLaySetGroup('SplitSoul');
		alt1.overLayImage(
			gauges.necromancy.position.x +
				gauges.necromancy.incantations.splitSoul.position
					.active_orientation.x *
					2,
			gauges.necromancy.position.y +
				gauges.necromancy.incantations.splitSoul.position
					.active_orientation.y,
			a1lib.encodeImageString(
				incantationImages.split_soul.toDrawableData()
			),
			incantationImages.split_soul.width,
			1000
		);
	}
}
