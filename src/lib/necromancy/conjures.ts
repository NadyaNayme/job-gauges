import * as a1lib from 'alt1';
import * as sauce from '../../a1sauce';
import * as utility from '../utility';

var conjureImages = a1lib.webpackImages({
	skeleton_warrior_inactive: require('../.././asset/data/conjures/conjure_skeleton_inactive.data.png'),
	skeleton_warrior: require('../.././asset/data/conjures/conjure_skeleton.data.png'),
	putrid_zombie_inactive: require('../.././asset/data/conjures/conjure_zombie_inactive.data.png'),
	putrid_zombie: require('../.././asset/data/conjures/conjure_zombie.data.png'),
	vengeful_ghost_inactive: require('../.././asset/data/conjures/conjure_ghost_inactive.data.png'),
	vengeful_ghost: require('../.././asset/data/conjures/conjure_ghost.data.png'),
	undead_army_inactive: require('../.././asset/data/conjures/lg/conjure_undead_army_inactive.data.png'),
	undead_army: require('../.././asset/data/conjures/lg/conjure_undead_army.data.png'),
});

let white = a1lib.mixColor(255, 255, 255);
let lastMinValue;

let scaleFactor = sauce.getSetting('scale') / 100;
let scaledOnce = false;

export async function conjureOverlay(gauges) {
	if (!gauges.necromancy.conjures.visible) {
		return
	}

	await conjureImages.promise;

	if (!scaledOnce) {
		Object.keys(conjureImages).forEach(async (key) => {
			conjureImages[key] = await utility.resizeImageData(
				conjureImages[key],
				scaleFactor
			);
		});
		scaledOnce = true;
	}

	alt1.overLaySetGroup('Undead_Army');
	if (gauges.necromancy.conjures.active) {
		alt1.overLayImage(
			utility.adjustPositionForScale(gauges.necromancy.position.x + gauges.necromancy.conjures.position.active_orientation.x, scaleFactor),
			utility.adjustPositionForScale(gauges.necromancy.position.y + gauges.necromancy.conjures.position.active_orientation.y, scaleFactor),
			a1lib.encodeImageString(conjureImages.undead_army.toDrawableData()),
			conjureImages.undead_army.width,
			1000
		);
	} else {
		alt1.overLayImage(
			utility.adjustPositionForScale(gauges.necromancy.position.x +
				gauges.necromancy.conjures.position.active_orientation.x, scaleFactor),
			utility.adjustPositionForScale(gauges.necromancy.position.y +
				gauges.necromancy.conjures.position.active_orientation.y, scaleFactor),
			a1lib.encodeImageString(
				conjureImages.undead_army_inactive.toDrawableData()
			),
			conjureImages.undead_army_inactive.width,
			1000
		);
	}

	let earliest_conjure = [
		gauges.necromancy.conjures.skeleton.time,
		gauges.necromancy.conjures.zombie.time,
		gauges.necromancy.conjures.ghost.time
	];
	var minValue = Math.min.apply(null, earliest_conjure.filter(Boolean));
	if (minValue !== Infinity && minValue !== lastMinValue) {
		alt1.overLaySetGroup('Undead_Army_Text');
		alt1.overLayFreezeGroup('Undead_Army_Text');
		alt1.overLayClearGroup('Undead_Army_Text');
		alt1.overLayTextEx(
			minValue.toString(),
			white,
			14,
			utility.adjustPositionForScale(gauges.necromancy.position.x +
				26 +
				gauges.necromancy.conjures.position.active_orientation.x, scaleFactor),
			utility.adjustPositionForScale(gauges.necromancy.position.y + 32, scaleFactor),
			10000,
			undefined,
			true,
			true
		);
		alt1.overLayRefreshGroup('Undead_Army_Text');
		lastMinValue = minValue;
	} else {
		alt1.overLayClearGroup('Undead_Army_Text');
	}
}
