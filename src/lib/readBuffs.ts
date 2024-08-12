import * as a1lib from 'alt1';
import * as BuffReader from 'alt1/buffs';
import * as sauce from '../a1sauce';
import * as utility from './utility';
import {helperItems } from './utility';
import { Overlay } from '../types';

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

async function retryOperation<T>(
	operation: () => Promise<T>,
	maxRetries: number,
	delay: number,
	attempt: number = 0
): Promise<T> {
	try {
		return await operation();
	} catch (error) {
		if (attempt >= maxRetries) {
			throw error;
		}
		await new Promise((resolve) => setTimeout(resolve, delay));
		return retryOperation(operation, maxRetries, delay, attempt + 1);
	}
}

export async function findBuffsBar(): Promise<void> {
	console.info('Attempting to find buffs bar...');
	if (buffs.pos == undefined) {
		buffs.find();
		if (buffs.pos == undefined) {
			throw new Error('BuffsBarSearchError: Failed to find buff bar');
		} else {
			return;
		}
	}
}

retryOperation(findBuffsBar, 5, 5000)
	.then(() => console.info('Found Buffs bar succesfully - starting overlay'))
	.catch((error) => {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<p style="text-align:center;margin-top:10px;color:red;">Please make sure you have at least 1 buff on your buffs bar and then reload the app.</p>`
		);
		console.warn('Please make sure you have at least 1 buff on your buffs bar and then reload the app.');
	});

export async function readBuffs(gauges: Overlay) {
	if (buffs.pos !== undefined) {
		updateBuffData(gauges, buffsImages.soul, 200, updateSoulCount);
		updateBuffData(gauges, buffsImages.necrosis, 200, updateNecrosisCount);

		if (gauges.necromancy.livingDeath.isActiveOverlay) {
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

async function updateBuffData(gauges: Overlay, buffImage: ImageData, threshold: number, updateCallbackFn: Function) {
	let buffsData = buffs.read();
	let foundBuff = false;
	for (let [_key, value] of Object.entries(buffsData)) {
		let buff = value.countMatch(buffImage, false);
		if (buff.passed > threshold) {
			foundBuff = true;
			updateCallbackFn(gauges, value.readArg('time').time);
		}
	}
	if (!foundBuff) {
		updateCallbackFn(gauges, 0);
	}
	return foundBuff;
}

// TODO: Figure out a cleaner way to update values.
// There shouldn't be any reason the below functions can't be done via updateBuffData
// without passing an updateCallbackfn()
// Passing data = ['necromancy]['stacks']['souls]['count'] and trying
// to update gauges.data doesn't work because somehow ['souls'] is undefined?
async function updateSoulCount(gauges, value) {
	gauges.necromancy.stacks.souls.count = value;
}

async function updateNecrosisCount(gauges, value) {
	gauges.necromancy.stacks.necrosis.count = value;
}

async function updateLivingDeath(gauges, value) {
	// If Living Death has an active buff and a timer:
	//   - it cannot be on cooldown
	//   - it must be active
	//   - The remaining time is its timer
	if (value > 1) {
		gauges.necromancy.livingDeath.onCooldown = false;
		gauges.necromancy.livingDeath.cooldown = '';
		gauges.necromancy.livingDeath.active = true;
		gauges.necromancy.livingDeath.time = value;
	}

	// When only 1 second of the buff exists
	if (value == 1 && gauges.necromancy.livingDeath.active) {
		// Make sure to update the text one final time
		gauges.necromancy.livingDeath.time = value;

		// Then start a timer to wait just past the last second
		//  - Clear the timer
		//  - LD is now on Cooldown so is not active
		setTimeout(() => {
			gauges.necromancy.livingDeath.time = '';
			gauges.necromancy.livingDeath.active = false;
			gauges.necromancy.livingDeath.onCooldown = true;
			startLivingDeathCooldown(gauges);
		}, 1050);
	}
}

async function startLivingDeathCooldown(gauges) {
	if (!gauges.necromancy.livingDeath.visible) {
		return;
	}

	// If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
	if (
		gauges.necromancy.livingDeath.active
	) {
		endLivingDeathCooldown(gauges);
		return;
	}

	// Otherwise cooldown has started and we can clear the Active text
	utility.forceClearOverlay('LivingDeath_Text');
	alt1.overLaySetGroupZIndex('LivingDeath_Cooldown_Text', 1);
	let cooldown = 59;
	let timer = setInterval(() => {
		// During our interval if the buff ever becomes active - kill the timer
		if (gauges.necromancy.livingDeath.active) {
			clearInterval(timer);
			endLivingDeathCooldown(gauges);
			return;
		}
		cooldown -= 1;
		if (cooldown > 0) {
			utility.forceClearOverlay('LivingDeath_Cooldown_Text');
			alt1.overLayTextEx(
				cooldown.toString(),
				utility.white,
				14,
				gauges.necromancy.position.x +
					gauges.necromancy.livingDeath.position.active_orientation
						.x +
					26,
				gauges.necromancy.position.y +
					gauges.necromancy.livingDeath.position.active_orientation
						.y +
					26,
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
		} else {
			clearInterval(timer);
			endLivingDeathCooldown(gauges);
			return;
		}
	}, 1000);
}

async function endLivingDeathCooldown(gauges) {
	gauges.necromancy.livingDeath.onCooldown = false;
	gauges.necromancy.livingDeath.cooldown = '';
	utility.forceClearOverlay('LivingDeath_Cooldown_Text');
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
