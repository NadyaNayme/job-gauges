import * as a1lib from 'alt1';

var necrosisImages = a1lib.webpackImages({
	necrosis_0: require('../.././asset/data/necrosis/lg/necrosis_0.data.png'),
	necrosis_2: require('../.././asset/data/necrosis/lg/necrosis_2.data.png'),
	necrosis_4: require('../.././asset/data/necrosis/lg/necrosis_4.data.png'),
	necrosis_6: require('../.././asset/data/necrosis/lg/necrosis_6.data.png'),
	necrosis_8: require('../.././asset/data/necrosis/lg/necrosis_8.data.png'),
	necrosis_10: require('../.././asset/data/necrosis/lg/necrosis_10.data.png'),
	necrosis_12: require('../.././asset/data/necrosis/lg/necrosis_12.data.png'),
});

export async function necrosisOverlay(gauges) {
	const { necrosis } = gauges.necromancy.stacks;

	await necrosisImages.promise;

	if (!necrosis.visible) {
		return;
	}

	const { position, dupeRow, count } = necrosis;
	const { x, y } = position.active_orientation;
	const bloatVisible = !gauges.necromancy.bloat.visible;
	let bloatSpace = 0;
	if (bloatVisible) {
		bloatSpace = -23;
	}

	alt1.overLaySetGroup('Necrosis');

	switch (count) {
		case 0:
		case 2:
		case 4:
		case 6:
		case 8:
		case 10:
		case 12:
			displayNecrosisImage(count);
			break;
	}

	if (dupeRow) {
		alt1.overLaySetGroup('Necrosis_Row2');
		alt1.overLayImage(
			gauges.necromancy.position.x + x,
			gauges.necromancy.position.y + y + necrosisImages.necrosis_0.height + bloatSpace,
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${count}`].toDrawableData()
			),
			necrosisImages[`necrosis_${count}`].width,
			1000
		);
	}

	function displayNecrosisImage(count) {
		alt1.overLayImage(
			gauges.necromancy.position.x + x,
			gauges.necromancy.position.y + y + bloatSpace,
			a1lib.encodeImageString(
				necrosisImages[`necrosis_${count}`].toDrawableData()
			),
			necrosisImages[`necrosis_${count}`].width,
			1000
		);
	}
}
