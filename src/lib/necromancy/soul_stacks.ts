import * as a1lib from 'alt1';

var soulImages = a1lib.webpackImages({
	souls_0: require('../.././asset/data/souls/souls_0.data.png'),
	souls_1: require('../.././asset/data/souls/souls_1.data.png'),
	souls_2: require('../.././asset/data/souls/souls_2.data.png'),
	souls_3: require('../.././asset/data/souls/souls_3.data.png'),
	souls_4: require('../.././asset/data/souls/souls_4.data.png'),
	souls_5: require('../.././asset/data/souls/souls_5.data.png'),
});

export async function soulsOverlay(gauges) {
	await soulImages.promise;
	switch (gauges.necromancy.stacks.souls.count) {
		case 0:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_0.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
		case 1:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_1.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
		case 2:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_2.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
		case 3:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_3.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
		case 4:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_4.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
		case 5:
			alt1.overLaySetGroup('Souls');
			alt1.overLayImage(
				gauges.necromancy.position.x,
				gauges.necromancy.position.y + 35,
				a1lib.encodeImageString(soulImages.souls_5.toDrawableData()),
				soulImages.souls_0.width,
				1000
			);
			break;
	}
}
