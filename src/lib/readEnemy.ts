import * as a1lib from 'alt1';
import * as TargetMob from 'alt1/targetmob';
import * as sauce from '../a1sauce';

var targetDisplay = new TargetMob.default();

var enemyDebuffImages = a1lib.webpackImages({
	invokeDeath: require('.././asset/data/enemyDebuffs/Death_Mark.data.png'),
	bloat: require('.././asset/data/enemyDebuffs/bloated.data.png'),
});


// Thanks to rodultra97 for PR to previous repo
const bloatInterval = new Map();
const bloat = 'bloat';

export async function readEnemy(gauges) {
	//TODO: Store LastPos and detect when to rescan to avoid spamming CHFRS in loop
	let targetData = targetDisplay.read();

	if (gauges.checkCombatStatus) {
		if (targetData) {
			gauges.inCombat = true;
		} else {
			setTimeout(() => {
				if (!targetData) {
					gauges.inCombat = false;
				}
			}, 1200);
		}
	} else {
		gauges.inCombat = true;
	}

	if (targetData && gauges.inCombat) {
		var target_display_loc = {
			x: targetDisplay?.lastpos.x - 120,
			y: targetDisplay?.lastpos.y + 20,
			w: 150,
			h: 60,
		};

		var targetDebuffs = a1lib.captureHold(
			target_display_loc.x,
			target_display_loc.y,
			target_display_loc.w,
			target_display_loc.h
		);
		var targetIsDeathMarked = targetDebuffs.findSubimage(
			enemyDebuffImages.invokeDeath
		).length;
		if (targetIsDeathMarked) {
			gauges.necromancy.incantations.active[0] = true;
		} else if (!targetIsDeathMarked) {
			gauges.necromancy.incantations.active[0] = false;
		}

		var targetIsBloated = targetDebuffs.findSubimage(
			enemyDebuffImages.bloat
		).length;
		if (targetIsBloated && !bloatInterval.has(bloat)) {
			gauges.necromancy.bloat.time = 20.5;
			gauges.necromancy.bloat.active = true;
			const intervalId = setInterval(() => {
				let currentTick = parseFloat(gauges.necromancy.bloat.time);

				if (currentTick > 0) {
					let nextTick = parseFloat(roundedToFixed(currentTick - 0.6, 1));
					gauges.necromancy.bloat.time = nextTick;
				} else {
					clearInterval(bloatInterval.get(bloat));
					bloatInterval.delete(bloat);
					gauges.necromancy.bloat.time = 0;
				}
			}, 600);
			bloatInterval.set(bloat, intervalId);
		} else if (!targetIsBloated) {
			if (bloatInterval.has(bloat)) {
				clearInterval(bloatInterval.get(bloat));
				bloatInterval.delete(bloat);
			}
			gauges.necromancy.bloat.time = 0;
			gauges.necromancy.bloat.active = false;
		}
	} else {
		gauges.necromancy.incantations.active[0] = false;
		gauges.necromancy.bloat.time = 0;
		gauges.necromancy.bloat.active = false;
	}
}

function roundedToFixed(input, digits) {
	var rounder = Math.pow(10, digits);
	return (Math.round(input * rounder) / rounder).toFixed(digits);
}
