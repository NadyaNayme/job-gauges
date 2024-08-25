/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as BuffReader from 'alt1/buffs';
import * as utility from './utility';
import { helperItems } from './utility';
import { Overlay } from '../types';

const buffs = new BuffReader.default();
const debuffs = new BuffReader.default();
debuffs.debuffs = true;

const buffsImages = a1lib.webpackImages({
	/* Necromancy */
	darkness: require('.././asset/data/buffs/Necromancy/Darkness.data.png'),
	living_death: require('.././asset/data/buffs/Ultimates/Living_Death.data.png'),
	split_soul: require('.././asset/data/buffs/Necromancy/Split_Soul.data.png'),
	threads: require('.././asset/data/buffs/Necromancy/Threads_of_Fate.data.png'),
	necrosis: require('.././asset/data/buffs/Necromancy/Necrosis.data.png'),
	soul: require('.././asset/data/buffs/Necromancy/Residual_Soul.data.png'),
	skeleton: require('.././asset/data/buffs/Necromancy/skeleton_warrior-top.data.png'),
	zombie: require('.././asset/data/buffs/Necromancy/putrid_zombie-top.data.png'),
	ghost: require('.././asset/data/buffs/Necromancy/vengeful_ghost-top.data.png'),

	/* Magic */
	sunshine: require('.././asset/data/buffs/Ultimates/Sunshine.data.png'),
	greaterSunshine: require('.././asset/data/buffs/Ultimates/Greater_Sunshine.data.png'),
	bloodTithe: require('.././asset/data/buffs/blood_tithe.data.png'),
	glacialEmbrace: require('.././asset/data/buffs/glacial_embrace.data.png'),
	instability: require('.././asset/data/buffs/WeaponSpecials/Fsoa_Spec.data.png'),
	tsunami: require('.././asset/data/buffs/critical_strike.data.png'),

	/* Troubleshooting */
	mediumBuffs: require('.././asset/data/errorhandling/medium_buffs.data.png'),
	largeBuffs: require('.././asset/data/errorhandling/large_buffs.data.png'),
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

export function testBuffSizes(): boolean {
	console.info('Checking to see if Buffs are set to "Medium" or "Large"');
	let screen = a1lib.captureHoldFullRs();
	let pos = screen.findSubimage(buffsImages.mediumBuffs);
	let pos2 = screen.findSubimage(buffsImages.largeBuffs);
	if (pos[0]?.x !== undefined) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<p style="text-align:center;margin-top:10px;color:red;">Medium Buff size detected. Please change your settings to use "Small" Buffs. Gameplay->Interfaces->Buff Bar -> Bar Display Settings</p>`
		);
		return true;
	}
	if (pos2[0]?.x !== undefined) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<p style="text-align:center;margin-top:10px;color:red;">Large Buff size detected. Please change your settings to use "Small" Buffs. Gameplay->Interfaces->Buff Bar -> Bar Display Settings</p>`
		);
		return true;
	}
	return false;
}

retryOperation(findBuffsBar, 3, 5000)
	.then(() => console.info('Found Buffs bar succesfully - starting overlay'))
	.catch(() => {
		let wrongBuffSize = testBuffSizes();
		if (!wrongBuffSize) {
			helperItems.Output.insertAdjacentHTML(
				'beforeend',
				`<p style="text-align:center;margin-top:10px;color:red;">Please make sure you have at least 1 buff on your buffs bar and then reload the app.</p>`
			);
			console.warn(
				'Please make sure you have at least 1 buff on your buffs bar and then reload the app.'
			);
		}
	});

export async function readBuffs(gauges: Overlay) {
	if (buffs.pos !== undefined) {
		updateBuffData(gauges, buffsImages.sunshine, 300, updateSunshine);
		updateBuffData(
			gauges,
			buffsImages.greaterSunshine,
			100,
			updateSunshine
		);
		if (gauges.necromancy.livingDeath.isActiveOverlay) {
			updateBuffData(
				gauges,
				buffsImages.living_death,
				400,
				updateLivingDeath
			);
		}
		switch (gauges.combatStyle) {
			case 4:
				updateBuffData(gauges, buffsImages.soul, 200, updateSoulCount);
				updateBuffData(
					gauges,
					buffsImages.necrosis,
					200,
					updateNecrosisCount
				);
				updateConjures(gauges);

				updateBuffData(
					gauges,
					buffsImages.darkness,
					300,
					updateDarkness
				);

				if (!disableThreadsCheck) {
					updateBuffData(
						gauges,
						buffsImages.threads,
						300,
						updateThreads
					);
				}
				if (!disableSplitCheck) {
					updateBuffData(
						gauges,
						buffsImages.split_soul,
						350,
						updateSplitSoul
					);
				}
				break;
			case 3:
				updateBuffData(gauges, buffsImages.instability, 60, updateFsoa);
				updateBuffData(gauges, buffsImages.tsunami, 200, updateTsunami);
				updateStackData(
					gauges,
					buffsImages.bloodTithe,
					30,
					updateBloodTithe
				);
				updateStackData(
					gauges,
					buffsImages.glacialEmbrace,
					30,
					updateGlacialEmbrace
				);
				break;
			case 2:
				break;
			case 1:
				break;
		}

		return buffs;
	}
}

async function updateBuffData(
	gauges: Overlay,
	buffImage: ImageData,
	threshold: number,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	updateCallbackFn: Function
): Promise<boolean> {
	const buffsData = buffs.read();
	let foundBuff = false;
	for (const value of Object.values(buffsData)) {
		const buff = value.countMatch(buffImage, false);
		if (buff.passed > threshold) {
			foundBuff = true;
			updateCallbackFn(gauges, value.readArg('timearg').time);
		}
	}
	if (!foundBuff) {
		updateCallbackFn(gauges, 0);
	}
	return foundBuff;
}

async function updateStackData(
	gauges: Overlay,
	buffImage: ImageData,
	threshold: number,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	updateCallbackFn: Function
): Promise<boolean> {
	const buffsData = buffs.read();
	let foundBuff = false;
	for (const value of Object.values(buffsData)) {
		const buff = value.countMatch(buffImage, false);
		if (buff.passed > threshold) {
			foundBuff = true;
			updateCallbackFn(
				gauges,
				parseInt(
					value
						.readArg('timearg')
						.arg.substring(
							1,
							value.readArg('timearg').arg.length - 1
						),
					10
				)
			);
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
async function updateSoulCount(gauges: Overlay, value: number) {
	gauges.necromancy.stacks.souls.stacks = value;
}

async function updateNecrosisCount(gauges: Overlay, value: number) {
	gauges.necromancy.stacks.necrosis.stacks = value;
}

async function updateLivingDeath(gauges: Overlay, value: number) {
	// If Living Death has an active buff and a timer:
	//   - it cannot be on cooldown
	//   - it must be active
	//   - The remaining time is its timer
	if (value > 1) {
		gauges.necromancy.livingDeath.isOnCooldown = false;
		gauges.necromancy.livingDeath.cooldownDuration = 0;
		gauges.necromancy.livingDeath.active = true;
		gauges.necromancy.livingDeath.time = value;
		changeCombatStyles(gauges, 4);
	}

	// When only 1 second of the buff exists
	if (value == 1 && gauges.necromancy.livingDeath.active) {
		// Make sure to update the text one final time
		gauges.necromancy.livingDeath.time = value;

		// Then start a timer to wait just past the last second
		//  - Clear the timer
		//  - LD is now on Cooldown so is not active
		setTimeout(() => {
			gauges.necromancy.livingDeath.time = 0;
			gauges.necromancy.livingDeath.active = false;
			gauges.necromancy.livingDeath.isOnCooldown = true;
			startLivingDeathCooldown(gauges);
		}, 1050);
	}
}

async function startLivingDeathCooldown(gauges: Overlay) {
	if (!gauges.necromancy.livingDeath.isActiveOverlay) {
		return;
	}

	// If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
	if (gauges.necromancy.livingDeath.active) {
		endLivingDeathCooldown(gauges);
		return;
	}

	// Otherwise cooldown has started and we can clear the Active text
	utility.forceClearOverlay('LivingDeath_Text');
	alt1.overLaySetGroupZIndex('LivingDeath_Cooldown_Text', 1);
	let cooldown = 59;
	const timer = setInterval(() => {
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
				utility.adjustPositionForScale(
					gauges.necromancy.position.x +
						gauges.necromancy.livingDeath.position
							.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					gauges.necromancy.position.y +
						gauges.necromancy.livingDeath.position
							.active_orientation.y +
						26,
					gauges.scaleFactor
				),
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

async function endLivingDeathCooldown(gauges: Overlay) {
	gauges.necromancy.livingDeath.isOnCooldown = false;
	gauges.necromancy.livingDeath.cooldownDuration = 0;
	utility.forceClearOverlay('LivingDeath_Cooldown_Text');
}

async function updateSkeleton(gauges: Overlay, value: number) {
	gauges.necromancy.conjures.skeleton.time = value;
	gauges.necromancy.conjures.skeleton.active = Boolean(value);
}

async function updateZombie(gauges: Overlay, value: number) {
	gauges.necromancy.conjures.zombie.time = value;
	gauges.necromancy.conjures.zombie.active = Boolean(value);
}

async function updateGhost(gauges: Overlay, value: number) {
	gauges.necromancy.conjures.ghost.time = value;
	gauges.necromancy.conjures.ghost.active = Boolean(value);
}

async function updateDarkness(gauges: Overlay, value: number) {
	gauges.necromancy.incantations.active[1] = Boolean(value);
}

let disableThreadsCheck = false;
async function updateThreads(gauges: Overlay, value: number) {
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
		}, gauges.necromancy.incantations.threads.cooldownDuration * 1000);
	}
}

let disableSplitCheck = false;
async function updateSplitSoul(gauges: Overlay, value: number) {
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
		}, gauges.necromancy.incantations.splitSoul.cooldownDuration * 1000);
	}
}

async function updateConjures(gauges: Overlay) {
	const hasSkeleton = await updateBuffData(
		gauges,
		buffsImages.skeleton,
		150,
		updateSkeleton
	);
	const hasZombie = await updateBuffData(
		gauges,
		buffsImages.zombie,
		150,
		updateZombie
	);
	const hasGhost = await updateBuffData(
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

async function updateSunshine(gauges: Overlay, value: number) {
	// If Sunshine has an active buff and a timer:
	//   - it cannot be on cooldown
	//   - it must be active
	//   - The remaining time is its timer
	if (value > 1) {
		gauges.magic.sunshine.isOnCooldown = false;
		gauges.magic.sunshine.cooldownDuration = 0;
		gauges.magic.sunshine.active = true;
		gauges.magic.sunshine.time = value;
		changeCombatStyles(gauges, 3);
	}

	// When only 1 second of the buff exists
	if (value == 1 && gauges.magic.sunshine.active) {
		// Make sure to update the text one final time
		gauges.magic.sunshine.time = value;

		// Then start a timer to wait just past the last second
		//  - Clear the timer
		//  - LD is now on Cooldown so is not active
		setTimeout(() => {
			gauges.magic.sunshine.time = 0;
			gauges.magic.sunshine.active = false;
			gauges.magic.sunshine.isOnCooldown = true;
			startSunshineCooldown(gauges);
		}, 1050);
	}
}

async function startSunshineCooldown(gauges: Overlay) {
	if (!gauges.magic.sunshine.isActiveOverlay) {
		return;
	}

	// If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
	if (gauges.magic.sunshine.active) {
		endSunshineCooldown(gauges);
		return;
	}

	// Otherwise cooldown has started and we can clear the Active text
	utility.forceClearOverlay('Sunshine_Text');
	alt1.overLaySetGroupZIndex('Sunshine_Cooldown_Text', 1);
	let cooldown = 29;
	const timer = setInterval(() => {
		// During our interval if the buff ever becomes active - kill the timer
		if (gauges.magic.sunshine.active) {
			clearInterval(timer);
			endSunshineCooldown(gauges);
			return;
		}
		cooldown -= 1;
		if (cooldown > 0) {
			utility.forceClearOverlay('Sunshine_Cooldown_Text');
			alt1.overLayTextEx(
				cooldown.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					gauges.magic.position.x +
						gauges.magic.sunshine.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					gauges.magic.position.y +
						gauges.magic.sunshine.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('Sunshine_Cooldown_Text');
		} else {
			clearInterval(timer);
			endSunshineCooldown(gauges);
			return;
		}
	}, 1000);
}

async function endSunshineCooldown(gauges: Overlay) {
	gauges.magic.sunshine.isOnCooldown = false;
	gauges.magic.sunshine.cooldownDuration = 0;
	utility.forceClearOverlay('Sunshine_Cooldown_Text');
}

async function updateFsoa(gauges: Overlay, value: number) {
	// If Instability has an active buff and a timer:
	//   - it cannot be on cooldown
	//   - it must be active
	//   - The remaining time is its timer
	if (value > 1) {
		gauges.magic.instability.isOnCooldown = false;
		gauges.magic.instability.cooldownDuration = 0;
		gauges.magic.instability.active = true;
		gauges.magic.instability.time = value;
	}

	// When only 1 second of the buff exists
	if (value == 1 && gauges.magic.instability.active) {
		// Make sure to update the text one final time
		gauges.magic.instability.time = value;

		// Then start a timer to wait just past the last second
		//  - Clear the timer
		//  - LD is now on Cooldown so is not active
		setTimeout(() => {
			gauges.magic.instability.time = 0;
			gauges.magic.instability.active = false;
			gauges.magic.instability.isOnCooldown = true;
			startFsoaCooldown(gauges);
		}, 1050);
	}
}

async function startFsoaCooldown(gauges: Overlay) {
	if (!gauges.magic.instability.isActiveOverlay) {
		return;
	}

	// If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
	if (gauges.magic.instability.active) {
		endFsoaCooldown(gauges);
		return;
	}

	// Otherwise cooldown has started and we can clear the Active text
	utility.forceClearOverlay('Instability_Text');
	alt1.overLaySetGroupZIndex('Instability_Cooldown_Text', 1);
	let cooldown = 29;
	const timer = setInterval(() => {
		// During our interval if the buff ever becomes active - kill the timer
		if (gauges.magic.instability.active) {
			clearInterval(timer);
			endFsoaCooldown(gauges);
			return;
		}
		cooldown -= 1;
		if (cooldown > 0) {
			utility.forceClearOverlay('Instability_Cooldown_Text');
			alt1.overLayTextEx(
				cooldown.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					gauges.magic.position.x +
						gauges.magic.instability.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					gauges.magic.position.y +
						gauges.magic.instability.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('Instability_Cooldown_Text');
		} else {
			clearInterval(timer);
			endFsoaCooldown(gauges);
			return;
		}
	}, 1000);
}

async function endFsoaCooldown(gauges: Overlay) {
	gauges.magic.instability.isOnCooldown = false;
	gauges.magic.instability.cooldownDuration = 0;
	utility.forceClearOverlay('Instability_Cooldown_Text');
}

async function updateBloodTithe(gauges: Overlay, value: number) {
	gauges.magic.spells.bloodTithe.stacks = value;
	gauges.magic.spells.bloodTithe.active = Boolean(value);
}

async function updateGlacialEmbrace(gauges: Overlay, value: number) {
	gauges.magic.spells.glacialEmbrace.stacks = value;
	gauges.magic.spells.glacialEmbrace.active = Boolean(value);
}

async function updateTsunami(gauges: Overlay, value: number) {
	// If Tsunami has an active buff and a timer:
	//   - it cannot be on cooldown
	//   - it must be active
	//   - The remaining time is its timer
	if (value > 1) {
		gauges.magic.tsunami.isOnCooldown = false;
		gauges.magic.tsunami.cooldownDuration = 0;
		gauges.magic.tsunami.active = true;
		gauges.magic.tsunami.time = value;
	}

	// When only 1 second of the buff exists
	if (value == 1 && gauges.magic.tsunami.active) {
		// Make sure to update the text one final time
		gauges.magic.tsunami.time = value;

		// Then start a timer to wait just past the last second
		//  - Clear the timer
		//  - LD is now on Cooldown so is not active
		setTimeout(() => {
			gauges.magic.tsunami.time = 0;
			gauges.magic.tsunami.active = false;
			gauges.magic.tsunami.isOnCooldown = true;
			startTsunamiCooldown(gauges);
		}, 1050);
	}
}

async function startTsunamiCooldown(gauges: Overlay) {
	if (!gauges.magic.tsunami.isActiveOverlay) {
		return;
	}

	// If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
	if (gauges.magic.tsunami.active) {
		endTsunamiCooldown(gauges);
		return;
	}

	// Otherwise cooldown has started and we can clear the Active text
	utility.forceClearOverlay('TsunamiText');
	alt1.overLaySetGroupZIndex('TsunamiCooldown_Text', 1);
	let cooldown = 29;
	const timer = setInterval(() => {
		// During our interval if the buff ever becomes active - kill the timer
		if (gauges.magic.tsunami.active) {
			clearInterval(timer);
			endTsunamiCooldown(gauges);
			return;
		}
		cooldown -= 1;
		if (cooldown > 0) {
			utility.forceClearOverlay('TsunamiCooldown_Text');
			alt1.overLayTextEx(
				cooldown.toString(),
				utility.white,
				14,
				utility.adjustPositionForScale(
					gauges.magic.position.x +
						gauges.magic.tsunami.position.active_orientation.x +
						26,
					gauges.scaleFactor
				),
				utility.adjustPositionForScale(
					gauges.magic.position.y +
						gauges.magic.tsunami.position.active_orientation.y +
						26,
					gauges.scaleFactor
				),
				3000,
				undefined,
				true,
				true
			);
			alt1.overLayRefreshGroup('TsunamiCooldown_Text');
		} else {
			clearInterval(timer);
			endTsunamiCooldown(gauges);
			return;
		}
	}, 1000);
}

async function endTsunamiCooldown(gauges: Overlay) {
	gauges.magic.tsunami.isOnCooldown = false;
	gauges.magic.tsunami.cooldownDuration = 0;
	utility.forceClearOverlay('TsunamiCooldown_Text');
}

async function changeCombatStyles(gauges: Overlay, style: number) {
	if (gauges.combatStyle !== style && gauges.automaticSwapping) {
		gauges.combatStyle = style;
		utility.forceClearOverlays();
	}
}
