/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import BuffReader from 'alt1/buffs';
import * as utility from './utility';
import { CombatStyle, Overlay } from '../types';
import { findAmmo } from './ranged/activeAmmo';
import { A1Sauce } from '../a1sauce';
import { appName } from '../data/constants';
import { LogError } from '../a1sauce/Error/logError';
import { beginRendering } from '..';
import { startAbilityCooldown } from './util/ability-helpers';

const sauce = A1Sauce.instance;
sauce.setName(appName);

const buffReader = new BuffReader();
const debuffReader = new BuffReader();
debuffReader.debuffs = true;

const errorLogger = new LogError();

const buffsImages = a1lib.webpackImages({
    /* Necromancy */
    darkness: require('../asset/data/buffs/necro/darkness.data.png'),
    living_death: require('../asset/data/buffs/necro/living-death.data.png'),
    split_soul: require('../asset/data/buffs/necro/split-soul.data.png'),
    threads: require('../asset/data/buffs/necro/threads-of-date.data.png'),
    necrosis: require('../asset/data/buffs/necro/Necrosis.data.png'),
    soul: require('../asset/data/buffs/necro/residual-soul.data.png'),
    skeleton: require('../asset/data/buffs/necro/skeleton-warrior.data.png'),
    zombie: require('../asset/data/buffs/necro/putrid-zombie.data.png'),
    ghost: require('../asset/data/buffs/necro/vengeful-ghost.data.png'),
    phantom: require('../asset/data/buffs/necro/phantom-guardian.data.png'),

    /* Magic */
    sunshine: require('../asset/data/buffs/magic/sunshine.data.png'),
    greaterSunshine: require('../asset/data/buffs/magic/greater-sunshine.data.png'),
    bloodTithe: require('../asset/data/buffs/magic/blood-tithe.data.png'),
    glacialEmbrace: require('../asset/data/buffs/magic/glacial-embrace.data.png'),
    instability: require('../asset/data/buffs/magic/instability.data.png'),
    odeToDeceit: require('../asset/data/debuffs/ode-to-deceit.data.png'),
    tsunami: require('../asset/data/buffs/magic/critical-strike.data.png'),

    /* Ranged */
    deathsSwiftness: require('../asset/data/buffs/ranged/deaths-swiftness.data.png'),
    greaterDeathsSwiftness: require('../asset/data/buffs/ranged/greater-deaths-swiftness.data.png'),
    crystalRain: require('../asset/data/debuffs/crystal-rain.data.png'),
    perfectEquilibrium: require('../asset/data/buffs/ranged/perfect-equilibrium.data.png'),
    balanaceByForce: require('../asset/data/buffs/ranged/balance-by-force.data.png'),
    rangedSplitSoul: require('../asset/data/buffs/ranged/split-soul.data.png'),

    // TODO: Move this into A1 Sauce properly
    /* Troubleshooting */
    mediumBuffs: require('../a1sauce/DataImages/ErrorHandling/medium_buffs.data.png'),
    largeBuffs: require('../a1sauce/DataImages/ErrorHandling/large_buffs.data.png'),
});

async function retryOperation(
    operation: () => void,
    maxRetries: number,
    delay: number,
    attempt: number = 0,
): Promise<void> {
    try {
        return operation();
    } catch (error) {
        if (attempt >= maxRetries) {
            throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
        return retryOperation(operation, maxRetries, delay, attempt + 1);
    }
}

export function findBuffsBar() {
    console.info('Attempting to find buffs bar...');

    if (!buffReader.find()) {
        console.log(`Failed to find those buffs`);

        errorLogger.showError({
            title: 'No Buffs Found',
            message: `<p>Job Gauges could not locate your buffs bar. Please use a defensive ability or some other way of obtaining a buff and Job Gauges will attempt to search again shortly or click the button below.</p>`,
        });

        throw new Error('BuffsBarSearchError: Failed to find buff bar');
    }
}

export function findDebuffsBar() {
    console.info('Attempting to find debuffs bar...');

    if (!debuffReader.pos && !debuffReader.find()) {
        errorLogger.showError({
            title: 'No Debuffs Found',
            message: `<p>Job Gauges could not locate your debuffs bar. Please toggle on your Prayer or some other way of obtaining a debuff and Job Gauges will attempt to search again shortly or click the button below.</p>`,
        });

        throw new Error('BuffsBarSearchError: Failed to find debuff bar');
    }
}

export function testBuffSizes(): boolean {
    console.info(
        'Unable to find buffs. Checking to see if Buffs are set to "Medium" or "Large"',
    );

    const screen = a1lib.captureHoldFullRs();
    const mediumBuffPositions = screen.findSubimage(buffsImages.mediumBuffs);
    const largeBuffPositions = screen.findSubimage(buffsImages.largeBuffs);

    const message = `<p>Alt1 only supports reading Small Buffs.<br><br>Please update your Buffs Bar settings.<br> Interfaces > Buff Bar > Icon Size </p><img src="./a1sauce/Error/Images/BuffIconSize.png">`;

    if (mediumBuffPositions.length) {
        errorLogger.showError({
            title: 'Medium Buffs Detected',
            message,
        });

        return true;
    }

    if (largeBuffPositions.length) {
        errorLogger.showError({
            title: 'Large Buffs Detected',
            message,
        });

        return true;
    }

    return false;
}

retryOperation(findBuffsBar, 3, 10000)
    .then(() => {
        console.info('Success! Found Buffs.');
        if (document.getElementById('#Error') !== undefined) {
            let err = document.querySelectorAll('#Error');
            for (let i = 0; i < err.length; i++) {
                const errHeader = err[i].querySelector('h2')?.innerText;
                if (errHeader === 'No Buffs Found') {
                    err[i].remove();
                }
            }
        }
    })
    .catch(() => {
        const wrongBuffSize = testBuffSizes();

        if (!wrongBuffSize) {
            errorLogger.showError({
                title: 'Failed to find Buffs',
                message: `<p>Job Gauges could not locate your buffs bar. Please ensure that Alt1 is able to read your screen (Alt1 Settings -> Capture tab). If it cannot you may need to adjust your Scaling or DPI settings. Further troubleshooting instructions are available in the <a href="https://discord.gg/KJ2SgWyJFF">Discord server</a>.</p>`,
            });
            console.warn(
                'Please make sure you have at least 1 buff on your buffs bar and then reload the app. The easiest way is to use a Defensive ability (Freedom, Anticipate) or toggle on Bone Shield.',
            );
        }
    });

retryOperation(findDebuffsBar, 3, 10000)
    .then(() => {
        console.info('Success! Found Debuffs.');
        if (document.getElementById('#Error') !== undefined) {
            let err = document.querySelectorAll('#Error');
            for (let i = 0; i < err.length; i++) {
                let errHeader = err[i].querySelector('h2')?.innerText;
                if (errHeader === 'No Debuffs Found') {
                    err[i].remove();
                }
            }
        }
        if (buffReader.pos && debuffReader.pos) {
            beginRendering();
        }
    })
    .catch(() => {
        let wrongBuffSize = testBuffSizes();
        if (!wrongBuffSize) {
            errorLogger.showError({
                title: 'Failed to find Debuffs',
                message: `<p>Job Gauges could not locate your debuffs bar. Please ensure that Alt1 is able to read your screen (Alt1 Settings -> Capture tab). If it cannot you may need to adjust your Scaling or DPI settings. Further troubleshooting instructions are available in the <a href="https://discord.gg/KJ2SgWyJFF">Discord server</a>.</p>`,
            });
            console.warn(
                'Please make sure you have at least 1 debuff on your debuffs bar and then reload the app. The easiest way is to toggle a Prayer on.',
            );
        }
    });

export async function readBuffs(gauges: Overlay) {
    if (buffReader.pos !== undefined) {
        updateBuffData(
            buffReader,
            gauges,
            buffsImages.deathsSwiftness,
            300,
            updateDeathsSwiftness,
            false,
        );
        updateBuffData(
            buffReader,
            gauges,
            buffsImages.greaterDeathsSwiftness,
            300,
            updateDeathsSwiftness,
            true,
        );
        updateBuffData(
            buffReader,
            gauges,
            buffsImages.sunshine,
            300,
            updateSunshine,
            false,
        );
        updateBuffData(
            buffReader,
            gauges,
            buffsImages.greaterSunshine,
            100,
            updateSunshine,
            true,
        );
        if (gauges.necromancy.livingDeath.isActiveOverlay) {
            updateBuffData(
                buffReader,
                gauges,
                buffsImages.living_death,
                400,
                updateLivingDeath,
                false,
            );
        }

        switch (gauges.combatStyle) {
            case 4:
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.soul,
                    200,
                    updateSoulCount,
                    false,
                );
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.necrosis,
                    200,
                    updateNecrosisCount,
                    false,
                );
                updateConjures(gauges);

                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.darkness,
                    300,
                    updateDarkness,
                    false,
                );

                if (!disableThreadsCheck) {
                    updateBuffData(
                        buffReader,
                        gauges,
                        buffsImages.threads,
                        300,
                        updateThreads,
                        false,
                    );
                }
                if (!disableSplitCheck) {
                    updateBuffData(
                        buffReader,
                        gauges,
                        buffsImages.split_soul,
                        350,
                        updateSplitSoul,
                        false,
                    );
                }
                break;
            case 3:
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.instability,
                    60,
                    updateFsoa,
                    false,
                );
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.tsunami,
                    200,
                    updateTsunami,
                    false,
                );
                updateStackData(
                    gauges,
                    buffsImages.bloodTithe,
                    30,
                    updateBloodTithe,
                );
                updateStackData(
                    gauges,
                    buffsImages.glacialEmbrace,
                    30,
                    updateGlacialEmbrace,
                );
                updateBuffData(
                    debuffReader,
                    gauges,
                    buffsImages.odeToDeceit,
                    9,
                    updateOdeToDeceit,
                    false,
                );
                break;
            case 2:
                updateBuffData(
                    debuffReader,
                    gauges,
                    buffsImages.crystalRain,
                    60,
                    updateCrystalRain,
                    false,
                );
                findAmmo(gauges, buffReader.read());
                updateSimpleStackData(
                    gauges,
                    buffsImages.perfectEquilibrium,
                    300,
                    updatePeCount,
                );
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.balanaceByForce,
                    20,
                    updateBalanceByForce,
                    false,
                );
                updateBuffData(
                    buffReader,
                    gauges,
                    buffsImages.rangedSplitSoul,
                    300,
                    updateRangedSplitSoul,
                    false,
                );
                break;
            case 1:
                break;
        }

        return buffReader;
    }
}

async function updateBuffData(
    buffReader: BuffReader,
    gauges: Overlay,
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: (
        gauges: Overlay,
        duration: number,
        greater: boolean,
    ) => void,
    greater: boolean,
): Promise<boolean> {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateBuffData.');
    }

    let foundBuff = false;
    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);

        /**
         * "THIS IS A HACK"
         * Issues with Ode to Deceit false positives
         */
        if (
            buffImage === buffsImages.odeToDeceit &&
            buff.readArg('timearg').time >= 46
        ) {
            return false;
        }

        if (match.passed > threshold) {
            foundBuff = true;
            updateCallbackFn(gauges, buff.readArg('timearg').time, greater);
        }
    }

    if (!foundBuff) {
        updateCallbackFn(gauges, 0, greater);
    }

    return foundBuff;
}

async function updateStackData(
    gauges: Overlay,
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: Function,
): Promise<boolean> {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateStackData.');
    }

    let foundBuff = false;

    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);

        if (match.passed > threshold) {
            foundBuff = true;
            updateCallbackFn(
                gauges,
                parseInt(
                    buff
                        .readArg('timearg')
                        .arg.substring(
                            1,
                            buff.readArg('timearg').arg.length - 1,
                        ),
                    10,
                ),
            );
        }
    }

    if (!foundBuff) {
        updateCallbackFn(gauges, 0);
    }

    return foundBuff;
}

async function updateSimpleStackData(
    gauges: Overlay,
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: Function,
): Promise<boolean> {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateSimpleStackData.');
    }

    let foundBuff = false;
    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);

        if (match.passed > threshold) {
            foundBuff = true;
            updateCallbackFn(gauges, buff.readTime());
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
        changeCombatStyles(gauges, CombatStyle.necro);
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

            startAbilityCooldown(
                {
                    ability: gauges.necromancy.livingDeath,
                    position: gauges.necromancy.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'LivingDeath',
                false,
            );
        }, 1050);
    }
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

async function updatePhantom(gauges: Overlay, value: number) {
    gauges.necromancy.conjures.phantom.time = value;
    gauges.necromancy.conjures.phantom.active = Boolean(value);
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
        buffReader,
        gauges,
        buffsImages.skeleton,
        150,
        updateSkeleton,
        false,
    );
    const hasZombie = await updateBuffData(
        buffReader,
        gauges,
        buffsImages.zombie,
        150,
        updateZombie,
        false,
    );
    const hasGhost = await updateBuffData(
        buffReader,
        gauges,
        buffsImages.ghost,
        200,
        updateGhost,
        false,
    );
    const hasPhantom = await updateBuffData(
        buffReader,
        gauges,
        buffsImages.phantom,
        200,
        updatePhantom,
        false,
    );
    if (hasSkeleton || hasZombie || hasGhost || hasPhantom) {
        gauges.necromancy.conjures.active = true;
    } else {
        gauges.necromancy.conjures.active = false;
    }
}

async function updateSunshine(
    gauges: Overlay,
    value: number,
    greater: boolean,
) {
    // If Sunshine has an active buff and a timer:
    //   - it cannot be on cooldown
    //   - it must be active
    //   - The remaining time is its timer
    if (value > 1) {
        gauges.magic.sunshine.isOnCooldown = false;
        gauges.magic.sunshine.cooldownDuration = 0;
        gauges.magic.sunshine.active = true;
        gauges.magic.sunshine.time = value;
        changeCombatStyles(gauges, CombatStyle.mage);
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

            startAbilityCooldown(
                {
                    ability: gauges.magic.sunshine,
                    position: gauges.magic.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'Sunshine',
                greater,
            );
        }, 1050);
    }
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

            startAbilityCooldown(
                {
                    ability: gauges.magic.instability,
                    position: gauges.magic.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'Instability',
                false,
            );
        }, 1050);
    }
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

            startAbilityCooldown(
                {
                    ability: gauges.magic.tsunami,
                    position: gauges.magic.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'Tsunami',
                false,
            );
        }, 1050);
    }
}

function changeCombatStyles(gauges: Overlay, style: CombatStyle) {
    if (gauges.combatStyle !== style && gauges.automaticSwapping) {
        gauges.combatStyle = style;
        utility.forceClearOverlays();
        utility.clearTextOverlays();
    }
}

async function updateDeathsSwiftness(
    gauges: Overlay,
    value: number,
    greater: boolean,
) {
    // If Death Swiftness has an active buff and a timer:
    //   - it cannot be on cooldown
    //   - it must be active
    //   - The remaining time is its timer
    if (value > 1) {
        gauges.ranged.deathsSwiftness.isOnCooldown = false;
        gauges.ranged.deathsSwiftness.cooldownDuration = 0;
        gauges.ranged.deathsSwiftness.active = true;
        gauges.ranged.deathsSwiftness.time = value;
        changeCombatStyles(gauges, CombatStyle.ranged);
    }

    // When only 1 second of the buff exists
    if (value == 1 && gauges.ranged.deathsSwiftness.active) {
        // Make sure to update the text one final time
        gauges.ranged.deathsSwiftness.time = value;

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - DS is now on Cooldown so is not active
        setTimeout(() => {
            gauges.ranged.deathsSwiftness.time = 0;
            gauges.ranged.deathsSwiftness.active = false;
            gauges.ranged.deathsSwiftness.isOnCooldown = true;

            startAbilityCooldown(
                {
                    ability: gauges.ranged.deathsSwiftness,
                    position: gauges.ranged.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'DeathsSwiftness',
                greater,
            );
        }, 1050);
    }
}

async function updateCrystalRain(gauges: Overlay, value: number) {
    // If Crystal Rain has an active buff and a timer:
    //   - it is on cooldown
    //   - The remaining time is its timer
    if (value > 1) {
        gauges.ranged.crystalRain.isOnCooldown = true;
        gauges.ranged.crystalRain.active = true;
        gauges.ranged.crystalRain.time = value;
    }

    // When only 1 second of the buff exists
    if (value == 1 && gauges.ranged.crystalRain.active) {
        // Make sure to update the text one final time
        gauges.ranged.crystalRain.time = value;

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - CR is now available again
        setTimeout(() => {
            gauges.ranged.crystalRain.time = 0;
            gauges.ranged.crystalRain.active = false;
            gauges.ranged.crystalRain.isOnCooldown = false;

            startAbilityCooldown(
                {
                    ability: gauges.ranged.crystalRain,
                    position: gauges.ranged.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'CrystalRain',
                false,
            );
        }, 1050);
    }
}

async function updatePeCount(gauges: Overlay, value: number) {
    gauges.ranged.perfectEquilibrium.stacks = value;
}

async function updateOdeToDeceit(gauges: Overlay, value: number) {
    // If Ode to Deceit has an active buff and a timer:
    //   - it is on cooldown
    //   - The remaining time is its timer
    if (value > 1) {
        gauges.magic.odeToDeceit.isOnCooldown = true;
        gauges.magic.odeToDeceit.active = true;
        gauges.magic.odeToDeceit.time = value;
    }

    // When only 1 second of the buff exists
    if (value == 1 && gauges.magic.odeToDeceit.active) {
        // Make sure to update the text one final time
        gauges.magic.odeToDeceit.time = value;

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - CR is now available again
        setTimeout(() => {
            gauges.magic.odeToDeceit.time = 0;
            gauges.magic.odeToDeceit.active = false;
            gauges.magic.odeToDeceit.isOnCooldown = false;

            startAbilityCooldown(
                {
                    ability: gauges.magic.odeToDeceit,
                    position: gauges.magic.position,
                    scaleFactor: gauges.scaleFactor,
                },
                'OdeToDeceit',
                false,
            );
        }, 1050);
    }
}

async function updateBalanceByForce(gauges: Overlay, value: number) {
    gauges.ranged.balanceByForce = Boolean(value);
}

async function updateRangedSplitSoul(gauges: Overlay, value: number) {
    // If Split Soul has an active buff and a timer:
    //   - it cannot be on cooldown
    //   - it must be active
    //   - The remaining time is its timer
    if (value > 1) {
        gauges.ranged.splitSoul.isOnCooldown = false;
        gauges.ranged.splitSoul.cooldownDuration = 0;
        gauges.ranged.splitSoul.active = true;
        gauges.ranged.splitSoul.time = value;
        changeCombatStyles(gauges, CombatStyle.ranged);
    }

    // When only 1 second of the buff exists
    if (value == 1 && gauges.ranged.splitSoul.active) {
        // Make sure to update the text one final time
        gauges.ranged.splitSoul.time = value;

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - DS is now on Cooldown so is not active
        setTimeout(() => {
            gauges.ranged.splitSoul.time = 0;
            gauges.ranged.splitSoul.active = false;
            gauges.ranged.splitSoul.isOnCooldown = true;
            startRangedSplitSoul(gauges);
        }, 1050);
    }
}

async function startRangedSplitSoul(gauges: Overlay) {
    if (!gauges.ranged.splitSoul.isActiveOverlay) {
        return;
    }

    // If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
    if (gauges.ranged.splitSoul.active) {
        endRangedSoulSplit(gauges);
        return;
    }

    // Otherwise cooldown has started and we can clear the Active text
    utility.forceClearOverlay('SplitSoul_Text');
}

async function endRangedSoulSplit(gauges: Overlay) {
    gauges.ranged.splitSoul.isOnCooldown = false;
    gauges.ranged.splitSoul.cooldownDuration = 0;
    utility.forceClearOverlay('SplitSoul_Text');
}
