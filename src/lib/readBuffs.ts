import * as a1lib from 'alt1';
import BuffReader from 'alt1/buffs';
import { CombatStyle } from '../types';
import { findAmmo } from './ranged/activeAmmo';
import { A1Sauce } from '../a1sauce';
import { appName } from '../data/constants';
import { LogError } from '../a1sauce/Error/logError';
import { beginRendering } from '..';
import { startAbilityCooldown } from './util/ability-helpers';
import { getSetting, updateSetting } from '../a1sauce/Settings/Storage';
import { store } from '../state';
import { NecromancyGaugeSlice } from '../state/gauge-data/necromancy-gauge.state';
import { MagicAbilities, MagicGaugeSlice, MagicPropertyAbilities } from '../state/gauge-data/magic-gauge.state';
import { GaugeDataSlice } from '../state/gauge-data/gauge-data.state';
import { RangedAbilities, RangedGaugeSlice, RangedPropertyAbilities } from '../state/gauge-data/ranged-gauge.state';
import { OverlaysManager } from '../a1sauce/Overlays';

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
    soulfire: require('../asset/data/debuffs/soulfire.data.png'),
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

    if (
        getSetting('rememberUiPosition') &&
        getSetting('buffsPosition')
    ) {
        buffReader.pos = JSON.parse(getSetting('buffsPosition'));
        return;
    }

    if (!buffReader.find()) {
        errorLogger.showError({
            title: 'No Buffs Found',
            message: `<p>Job Gauges could not locate your buffs bar. Please use a defensive ability or some other way of obtaining a buff and Job Gauges will attempt to search again shortly or click the button below.</p>`,
        });

        throw new Error('BuffsBarSearchError: Failed to find buff bar');
    }
}

export function findDebuffsBar() {
    console.info('Attempting to find debuffs bar...');

    if (getSetting('rememberUiPosition') && getSetting('debuffsPosition')) {
        debuffReader.pos = JSON.parse(getSetting('debuffsPosition'));
        return;
    }

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
            const err = document.querySelectorAll('#Error');
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
            const err = document.querySelectorAll('#Error');
            for (let i = 0; i < err.length; i++) {
                const errHeader = err[i].querySelector('h2')?.innerText;
                if (errHeader === 'No Debuffs Found') {
                    err[i].remove();
                }
            }
        }
        if (buffReader.pos && debuffReader.pos) {
            updateSetting('buffsPosition', JSON.stringify(buffReader.pos));
            updateSetting('debuffsPosition', JSON.stringify(debuffReader.pos));
            beginRendering();
        }
    })
    .catch(() => {
        const wrongBuffSize = testBuffSizes();
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

export async function readBuffs() {
    if (!buffReader.pos) {
        return;
    }

    const { gaugeData, necromancy } = store.getState();

    updateBuffData(
        buffReader,
        buffsImages.deathsSwiftness,
        500,
        (time) => updateRangeAbility(time, false, 'DeathsSwiftness'),
        false,
    );
    updateBuffData(
        buffReader,
        buffsImages.greaterDeathsSwiftness,
        350,
        (time) => updateRangeAbility(time, true, 'DeathsSwiftness'),
        true,
    );
    updateBuffData(
        buffReader,
        buffsImages.sunshine,
        500,
        (time) => updateMagicAbility(time, false, 'Sunshine'),
        false,
    );
    updateBuffData(
        buffReader,
        buffsImages.greaterSunshine,
        100,
        (time) => updateMagicAbility(time, true, 'Sunshine'),
        true,
    );
    if (necromancy.livingDeath.isActiveOverlay) {
        updateBuffData(
            buffReader,
            buffsImages.living_death,
            400,
            updateLivingDeath,
            false,
        );
    }

    switch (gaugeData.combatStyle) {
        case CombatStyle.necromancy:
            updateBuffData(
                buffReader,
                buffsImages.soul,
                200,
                (stacks) => store.dispatch(NecromancyGaugeSlice.actions.updateStacksAbility({
                    stackType: 'souls',
                    stack: {
                        stacks,
                    },
                })),
                false,
            );
            updateBuffData(
                buffReader,
                buffsImages.necrosis,
                200,
                (stacks) => store.dispatch(NecromancyGaugeSlice.actions.updateStacksAbility({
                    stackType: 'necrosis',
                    stack: {
                        stacks,
                    },
                })),
                false,
            );
            updateConjures();

            updateBuffData(
                buffReader,
                buffsImages.darkness,
                300,
                updateDarkness,
                false,
            );

            if (!disableThreadsCheck) {
                updateBuffData(
                    buffReader,
                    buffsImages.threads,
                    300,
                    updateThreads,
                    false,
                );
            }
            if (!disableSplitCheck) {
                updateBuffData(
                    buffReader,
                    buffsImages.split_soul,
                    350,
                    updateSplitSoul,
                    false,
                );
            }
            break;
        case CombatStyle.magic:
            updateBuffData(
                buffReader,
                buffsImages.instability,
                60,
                (time) => updateMagicAbility(time, false, 'Instability'),
                false,
            );
            updateBuffData(
                buffReader,
                buffsImages.tsunami,
                200,
                (time) => updateMagicAbility(time, false, 'Tsunami'),
                false,
            );
            updateStackData(
                buffsImages.bloodTithe,
                30,
                (active) => updateSpell('bloodTithe', active),
            );
            updateStackData(
                buffsImages.glacialEmbrace,
                30,
                (active) => updateSpell('glacialEmbrace', active),
            );
            updateBuffData(
                debuffReader,
                buffsImages.soulfire,
                25,
                (time) => updateMagicAbility(time, false, 'Soulfire'),
                false,
            );
            break;
        case CombatStyle.ranged:
            updateBuffData(
                debuffReader,
                buffsImages.crystalRain,
                60,
                (time) => updateRangeAbility(time, true, 'CrystalRain'),
                false,
            );
            findAmmo(buffReader.read());
            updateSimpleStackData(
                buffsImages.perfectEquilibrium,
                300,
                updatePeCount,
            );
            updateBuffData(
                buffReader,
                buffsImages.balanaceByForce,
                20,
                (active) => updateBalanceByForce(!!active),
                false,
            );
            updateBuffData(
                buffReader,
                buffsImages.rangedSplitSoul,
                300,
                (time) => updateRangedSplitSoul(time),
                false,
            );
            break;
        case CombatStyle.melee:
            break;
    }

    return buffReader;
}

function updateBuffData(
    buffReader: BuffReader,
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: (
        duration: number,
        greater: boolean,
    ) => void,
    greater: boolean,
): boolean {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateBuffData.');
    }

    let foundBuff = false;
    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);
        const { time } = buff.readArg('timearg');

        /**
         * "THIS IS A HACK"
         * Issues with Soulfire false positives
         */
        if (buffImage === buffsImages.soulfire && time >= 46) {
            return false;
        }

        // if (buffImage === buffsImages.sunshine) {
        //     console.log(
        //         `BuffPosition: ${buff.bufferx / 30 == 0 ? 0 : buff.bufferx / 30} | Time: ${time.toString()} \n Tested: ${match.tested} | Skipped: ${match.skipped} \n Passed: ${match.passed} | Failed: ${match.failed}`,
        //     );
        // }

        /**
         * TODO: Update this function to take in a failureThreshold
         * for now just being lazy and hard coding it in for Soulfire
         */
        if (buffImage === buffsImages.soulfire && match.failed >= 10) {
            return false;
        }

        if (match.passed > threshold) {
            foundBuff = true;
            updateCallbackFn(time, greater);
        }
    }

    if (!foundBuff) {
        updateCallbackFn(0, greater);
    }

    return foundBuff;
}

function updateStackData(
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: (time: number) => unknown,
): boolean {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateStackData.');
    }

    let foundBuff = false;

    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);

        if (match.passed > threshold) {
            foundBuff = true;
            const timearg = buff.readArg('timearg').arg;
            updateCallbackFn(
                parseInt(timearg.substring(1, timearg.length - 1), 10),
            );
        }
    }

    if (!foundBuff) {
        updateCallbackFn(0);
    }

    return foundBuff;
}

function updateSimpleStackData(
    buffImage: ImageData,
    threshold: number,
    updateCallbackFn: (time: number) => unknown,
): boolean {
    const buffs = buffReader.read();

    if (!buffs) {
        throw Error('Failed to read buffs for updateSimpleStackData.');
    }

    let foundBuff = false;
    for (const buff of buffs) {
        const match = buff.countMatch(buffImage, false);

        if (match.passed > threshold) {
            foundBuff = true;
            updateCallbackFn(buff.readTime());
        }
    }

    if (!foundBuff) {
        updateCallbackFn(0);
    }

    return foundBuff;
}

function updateLivingDeath(value: number) {
    const necromancy = store.getState().necromancy;
    const gaugeData = store.getState().gaugeData;

    // If Living Death has an active buff and a timer:
    //   - it cannot be on cooldown
    //   - it must be active
    //   - The remaining time is its timer
    if (value > 1) {
        store.dispatch(NecromancyGaugeSlice.actions.updateAbilityCooldown({
            ability: {
                active: true,
                time: value,
                cooldownDuration: 0,
                isOnCooldown: false,
            },
            abilityName: 'livingDeath',
        }));

        changeCombatStyles(CombatStyle.necromancy);
    }

    // When only 1 second of the buff exists
    if (value == 1 && necromancy.livingDeath.active) {
        // Make sure to update the text one final time
        store.dispatch(NecromancyGaugeSlice.actions.updateAbilityTime({ abilityName: 'livingDeath', time: value }));

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - LD is now on Cooldown so is not active
        setTimeout(() => {
            store.dispatch(NecromancyGaugeSlice.actions.updateAbilityCooldown({
                ability: {
                    active: false,
                    time: 0,
                    isOnCooldown: true,
                },
                abilityName: 'livingDeath',
            }));

            startAbilityCooldown({
                    ability: necromancy.livingDeath,
                    position: necromancy.position,
                    scaleFactor: gaugeData.scaleFactor,
                },
                'LivingDeath',
                false,
                () => {
                    store.dispatch(NecromancyGaugeSlice.actions.updateAbility({
                        key: 'livingDeath',
                        ability: { isOnCooldown: false, cooldownDuration: 0 },
                    }));
                },
            );
        }, 1050);
    }
}

function updateConjure(conjureType: 'skeleton' | 'zombie' | 'phantom' | 'ghost', timing: number) {
    store.dispatch(NecromancyGaugeSlice.actions.updateConjures({
        conjureType,
        conjure: {
            time: timing,
            active: !!timing,
        },
    }));
}

function updateDarkness(value: number) {
    store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
        incantation: 1,
        active: !!value,
    }));
}

let disableThreadsCheck = false;

function updateThreads(value: number) {
    if (value < 1) {
        return store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
            incantation: 2,
            active: false,
        }));
    }

    const necromancy = store.getState().necromancy;
    store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
        incantation: 2,
        active: true,
    }));

    if (value === 1) {
        disableThreadsCheck = true;
        setTimeout(() => {
            store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
                incantation: 2,
                active: false,
            }));
            disableThreadsCheck = false;
        }, necromancy.incantations.threads.cooldownDuration * 1000);
    }
}

let disableSplitCheck = false;

async function updateSplitSoul(value: number) {
    if (value < 1) {
        return store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
            incantation: 3,
            active: false,
        }));
    }

    const necromancy = store.getState().necromancy;
    store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
        incantation: 3,
        active: true,
    }));

    if (value === 1) {
        disableSplitCheck = true;
        setTimeout(() => {
            store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
                incantation: 3,
                active: false,
            }));
            disableSplitCheck = false;
        }, necromancy.incantations.splitSoul.cooldownDuration * 1000);
    }
}

async function updateConjures() {
    updateBuffData(
        buffReader,
        buffsImages.skeleton,
        150,
        (time) => updateConjure('skeleton', time),
        false,
    );
    updateBuffData(
        buffReader,
        buffsImages.zombie,
        150,
        (time) => updateConjure('zombie', time),
        false,
    );
    updateBuffData(
        buffReader,
        buffsImages.ghost,
        200,
        (time) => updateConjure('ghost', time),
        false,
    );
    updateBuffData(
        buffReader,
        buffsImages.phantom,
        200,
        (time) => updateConjure('phantom', time),
        false,
    );
}

const MagicAbilityToName = {
    'Sunshine': 'sunshine',
    'Soulfire': 'soulfire',
    'Tsunami': 'tsunami',
    'Instability': 'instability',
} satisfies Record<MagicAbilities, MagicPropertyAbilities>;

function updateMagicAbility(time: number, greater: boolean, abilityName: MagicAbilities) {
    const property = MagicAbilityToName[abilityName];

    const { magic, gaugeData } = store.getState();
    const { position } = magic;
    const { scaleFactor } = gaugeData;

    const ability = magic[property];

    if (time > 1) {
        store.dispatch(MagicGaugeSlice.actions.updateAbility({
            abilityName: property,
            ability: {
                isOnCooldown: false,
                cooldownDuration: 0,
                active: true,
                time,
            },
        }));

        if (gaugeData.automaticSwapping && abilityName === 'Sunshine') {
            changeCombatStyles(CombatStyle.magic);
        }
    }

    if (time === 1 && ability.active) {
        // Make sure to update the text one final time
        store.dispatch(MagicGaugeSlice.actions.updateAbilityTime({ abilityName: property, time }));

        setTimeout(() => {
            store.dispatch(MagicGaugeSlice.actions.updateAbility({
                abilityName: property,
                ability: {
                    isOnCooldown: true,
                    active: false,
                    time: 0,
                },
            }));

            // We don't want these abilities to trigger the cooldown overlay.
            if (abilityName === 'Soulfire') {
                return;
            }

            const { magic } = store.getState();
            const ability = magic[property];

            startAbilityCooldown(
                { ability, position, scaleFactor },
                abilityName,
                greater,
                () => {
                    store.dispatch(MagicGaugeSlice.actions.updateAbility({
                        abilityName: property,
                        ability: { isOnCooldown: false, cooldownDuration: 0, active: true },
                    }));
                },
            );
        }, 1050);
    }
}

const RangedAbilityToName = {
    'DeathsSwiftness': 'deathsSwiftness',
    'CrystalRain': 'crystalRain',
    'SplitSoul': 'splitSoul',
} satisfies Record<RangedAbilities, RangedPropertyAbilities>;

function updateRangeAbility(time: number, greater: boolean, abilityName: RangedAbilities) {
    const property = RangedAbilityToName[abilityName];
    const { ranged, gaugeData } = store.getState();

    const ability = ranged[property];
    const { position } = ranged;
    const { scaleFactor } = gaugeData;

    if (time > 1) {
        store.dispatch(RangedGaugeSlice.actions.updateAbility({
            abilityName: property,
            ability: {
                isOnCooldown: false,
                cooldownDuration: 0,
                active: true,
                time,
            },
        }));

        if (gaugeData.automaticSwapping && abilityName === 'DeathsSwiftness') {
            changeCombatStyles(CombatStyle.ranged);
        }
    }

    if (time === 1 && ability.active) {
        // Make sure to update the text one final time
        store.dispatch(RangedGaugeSlice.actions.updateAbilityTime({ abilityName: property, time }));

        setTimeout(() => {
            store.dispatch(RangedGaugeSlice.actions.updateAbility({
                abilityName: property,
                ability: {
                    isOnCooldown: true,
                    active: false,
                    time: 0,
                },
            }));

            // We don't want CR to start an overlay cooldown.
            if (abilityName === 'CrystalRain') {
                return;
            }

            const { ranged } = store.getState();
            const ability = ranged[property];

            startAbilityCooldown(
                { ability, position, scaleFactor },
                abilityName,
                greater,
                () => {
                    store.dispatch(RangedGaugeSlice.actions.updateAbility({
                        abilityName: property,
                        ability: { isOnCooldown: false, cooldownDuration: 0 },
                    }));
                },
            );
        }, 1050);
    }
}

function updateSpell(spellName: 'bloodTithe' | 'glacialEmbrace', active: number) {
    store.dispatch(MagicGaugeSlice.actions.updateSpell({
        spellName,
        spell: { active: !!active },
    }));
}

function changeCombatStyles(combatStyle: CombatStyle) {
    const { gaugeData } = store.getState();

    // If the style hasn't changed we don't need to mess with state or overlays.
    if (gaugeData.combatStyle === combatStyle) {
        return;
    }

    store.dispatch(GaugeDataSlice.actions.updateState({
        combatStyle,
    }));

    OverlaysManager.forceClearOverlays();
}

function updatePeCount(stacks: number) {
    store.dispatch(RangedGaugeSlice.actions.updatePerfectEquilibriumStack({ stacks }));
}

function updateBalanceByForce(active: boolean) {
    store.dispatch(RangedGaugeSlice.actions.updateBalanceByForce({ active }));
}

/**
 * Keeping around until I figure out why it's special.
 */
function updateRangedSplitSoul(time: number) {
    const { ranged } = store.getState();

    // If Split Soul has an active buff and a timer:
    //   - it cannot be on cooldown
    //   - it must be active
    //   - The remaining time is its timer
    if (time > 1) {
        store.dispatch(RangedGaugeSlice.actions.updateAbility({
            abilityName: 'splitSoul',
            ability: {
                isOnCooldown: false,
                cooldownDuration: 0,
                active: true,
                time,
            },
        }));
    }

    // When only 1 second of the buff exists
    if (time == 1 && ranged.splitSoul.active) {
        // Make sure to update the text one final time
        store.dispatch(RangedGaugeSlice.actions.updateAbilityTime({ abilityName: 'splitSoul', time }));

        // Then start a timer to wait just past the last second
        //  - Clear the timer
        //  - DS is now on Cooldown so is not active
        setTimeout(() => {
            store.dispatch(RangedGaugeSlice.actions.updateAbility({
                abilityName: 'splitSoul',
                ability: {
                    active: false,
                    isOnCooldown: true,
                    cooldownDuration: 0,
                    time: 0,
                },
            }));

            startRangedSplitSoul();
        }, 1050);
    }
}

function startRangedSplitSoul() {
    const { ranged } = store.getState();

    if (!ranged.splitSoul.isActiveOverlay) {
        return;
    }

    // If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
    if (ranged.splitSoul.active) {
        store.dispatch(RangedGaugeSlice.actions.updateAbility({
            abilityName: 'splitSoul',
            ability: {
                isOnCooldown: false,
                cooldownDuration: 0,
            },
        }));

        return OverlaysManager.forceClearOverlay('SplitSoul_Text');
    }

    // Otherwise cooldown has started and we can clear the Active text
    OverlaysManager.forceClearOverlay('SplitSoul_Text');
}
