import * as a1lib from 'alt1';
import * as BuffReader from 'alt1/buffs';
import * as sauce from '../a1sauce';

var buffs = new BuffReader.default();
var debuffs = new BuffReader.default();
debuffs.debuffs = true;

var buffsImages = a1lib.webpackImages({
	darkness: require('.././asset/data/buffs/Darkness.data.png'),
	living_death: require('.././asset/data/buffs/Living_Death.data.png'),
	split_soul: require('.././asset/data/buffs/Split_Soul.data.png'),
	threads: require('.././asset/data/buffs/Threads_of_Fate.data.png'),
	necrosis: require('.././asset/data/buffs/Necrosis.data.png'),
	soul: require('.././asset/data/buffs/Residual_Soul.data.png'),
	skeleton: require('.././asset/data/buffs/skeleton_warrior-top.data.png'),
	zombie: require('.././asset/data/buffs/putrid_zombie-top.data.png'),
	ghost: require('.././asset/data/buffs/vengeful_ghost-top.data.png'),
});

export async function readBuffs(gauges) {
	if (buffs.pos == undefined) {
		buffs.find();
		console.log('Buffs bar not found - searching again in 5 seconds...');
		sauce.timeout(5000);
		readBuffs(gauges);
	} else {
		updateBuffData(gauges, buffsImages.soul, 200, updateSoulCount);
		updateBuffData(gauges, buffsImages.necrosis, 200, updateNecrosisCount);

		if (!disableLivingDeathCheck) {
			updateBuffData(
				gauges,
				buffsImages.living_death,
				400,
				updateLivingDeath
			);
		}
		updateConjures(gauges);

		updateBuffData(gauges, buffsImages.darkness, 300, updateDarkness);

		if (!disableThreadsCheck) {
			updateBuffData(gauges, buffsImages.threads, 300, updateThreads);
		}
		if (!disableSplitCheck) {
			updateBuffData(gauges, buffsImages.split_soul, 350, updateSplitSoul);
		}
		return buffs;
	}
}

async function updateBuffData(gauges, buffImage, threshold, updateFn) {
	let buffsData = buffs.read();
	let foundBuff = false;
	for (let [_key, value] of Object.entries(buffsData)) {
		let buff = value.countMatch(buffImage, false);
		if (buff.passed > threshold) {
			foundBuff = true;
			updateFn(gauges, value.readArg('time').time);
		}
	}
	if (!foundBuff) {
		updateFn(gauges, 0);
	}
	return foundBuff;
}

// TODO: Figure out a cleaner way to update values.
// There shouldn't be any reason the below functions can't be done via updateBuffData
// without passing an updatefn()
// Passing data = ['necromancy]['stacks']['souls]['count'] and trying
// to update gauges.data doesn't work because somehow ['souls'] is undefined?
async function updateSoulCount(gauges, value) {
	gauges.necromancy.stacks.souls.count = value;
}

async function updateNecrosisCount(gauges, value) {
	gauges.necromancy.stacks.necrosis.count = value;
}

let white = a1lib.mixColor(255, 255, 255);
let disableLivingDeathCheck = false;
let disableLivingDeathCountdown = false;
async function updateLivingDeath(gauges, value) {
	if (value == 0 && !disableLivingDeathCheck) {
		gauges.necromancy.livingDeath.active = true;
		gauges.necromancy.livingDeath.time = '';
	}
	if (value > 1) {
		gauges.necromancy.livingDeath.active = true;
		gauges.necromancy.livingDeath.time = value;
	}
	if (value == 1) {
		gauges.necromancy.livingDeath.time = value;
		setTimeout(() => {
			gauges.necromancy.livingDeath.time = '';
			disableLivingDeathCheck = true;
			gauges.necromancy.livingDeath.active = false;
			if (disableLivingDeathCheck && !disableLivingDeathCountdown) {
				disableLivingDeathCountdown = true;
				startLivingDeathCooldown(gauges);
			}
		}, 1000);
		setTimeout(() => {
			gauges.necromancy.livingDeath.time = '';
			gauges.necromancy.livingDeath.active = false;
			disableLivingDeathCheck = false;
		}, gauges.necromancy.livingDeath.cooldown * 1000);
	}
}

async function startLivingDeathCooldown(gauges) {
	let cooldown = 59;
	let timer = setInterval(() => {
		cooldown -= 1;
		if (cooldown > 0) {
			alt1.overLaySetGroup('LivingDeath_Cooldown_Text');
			alt1.overLayFreezeGroup('LivingDeath_Cooldown_Text');
			alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
			alt1.overLaySetGroupZIndex('LivingDeath_Cooldown_Text', 1);
			alt1.overLayTextEx(
				cooldown.toString(),
				white,
				8,
				gauges.necromancy.position.x + 53,
				gauges.necromancy.position.y + 20,
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
		} else {
			alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
			alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
		}
	}, 1000);
	setTimeout(() => {
		clearInterval(timer);
		alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
		alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
		disableLivingDeathCountdown = false;
	}, gauges.necromancy.livingDeath.cooldown * 1000 + 1000);
}

async function updateSkeleton(gauges, value) {
	gauges.necromancy.conjures.skeleton.time = value;
	gauges.necromancy.conjures.skeleton.active = Boolean(value);
}

async function updateZombie(gauges, value) {
	gauges.necromancy.conjures.zombie.time = value;
	gauges.necromancy.conjures.zombie.active = Boolean(value);
}

async function updateGhost(gauges, value) {
	gauges.necromancy.conjures.ghost.time = value;
	gauges.necromancy.conjures.ghost.active = Boolean(value);
}

async function updateDarkness(gauges, value) {
	gauges.necromancy.incantations.active[1] = Boolean(value);
}

let disableThreadsCheck = false;
async function updateThreads(gauges, value) {
	gauges.necromancy.incantations.active[2] = false;
	if (value > 1) {
		gauges.necromancy.incantations.active[2] = true;
	}
	if (value == 1) {
		gauges.necromancy.incantations.active[2] = true;
		disableThreadsCheck = true;
		setTimeout(() => {
			gauges.necromancy.incantations.active[2] = false;
			disableThreadsCheck = false;
		}, gauges.necromancy.incantations.threads.cooldown * 1000);
	}
}

let disableSplitCheck = false;
async function updateSplitSoul(gauges, value) {
	gauges.necromancy.incantations.active[3] = false;
	if (value > 1) {
		gauges.necromancy.incantations.active[3] = true;
	}
	if (value == 1) {
		gauges.necromancy.incantations.active[3] = true;
		disableSplitCheck = true;
		setTimeout(() => {
			gauges.necromancy.incantations.active[3] = false;
			disableSplitCheck = false;
		}, gauges.necromancy.incantations.splitSoul.cooldown * 1000);
	}
}

async function updateConjures(gauges) {
	let hasSkeleton = await updateBuffData(gauges, buffsImages.skeleton, 150, updateSkeleton);
	let hasZombie = await updateBuffData(
		gauges,
		buffsImages.zombie,
		150,
		updateZombie
	);
	let hasGhost = await updateBuffData(
		gauges,
		buffsImages.ghost,
		200,
		updateGhost
	);
	if (hasSkeleton || hasZombie || hasGhost) {
		gauges.necromancy.conjures.active = true;
	} else {
		gauges.necromancy.conjures.active = false;
	}
}
