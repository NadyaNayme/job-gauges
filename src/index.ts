import * as utility from './lib/utility';
import { alarmLoop, forceClearOverlays } from './lib/utility';
import { CombatStyle } from './types';

// General Purpose
import { findBuffsBar, findDebuffsBar, readBuffs } from './lib/readBuffs';
import { readEnemy } from './lib/readEnemy';

// Necromancy Gauge
import { conjureOverlay } from './lib/necromancy/conjures';
import { soulsOverlay } from './lib/necromancy/soul';
import { necrosisOverlay } from './lib/necromancy/necrosis';
import { incantationsOverlay } from './lib/necromancy/incantations';
import { livingDeathOverlay } from './lib/necromancy/livingDeath';
import { bloatOverlay } from './lib/necromancy/bloat';

import './index.html';
import './appconfig.json';
import './version.json';
import './icon.png';
import './css/styles.css';
import { A1Sauce } from './a1sauce';
import { getSetting, updateSetting } from './a1sauce/Settings/Storage';
import { getById } from './a1sauce/Utils/getById';
import { renderSettings } from './lib/settings';
import { appName, majorVersion, minorVersion, patchVersion, versionUrl } from './data/constants';
import { Patches } from './a1sauce/Patches/patchNotes';
import { notes } from './patchnotes';
import { startVersionChecking } from './a1sauce/Patches/serverCheck';
import { sunshineOverlay } from './lib/magic/sunshine';
import { spellsOverlay } from './lib/magic/activeSpell';
import { fsoaOverlay } from './lib/magic/instability';
import { tsunamiOverlay } from './lib/magic/tsunami';
import { deathsSwiftnessOverlay } from './lib/ranged/deathsSwiftness';
import { crystalRainOverlay } from './lib/ranged/crystalRain';
import { peOverlay } from './lib/ranged/perfectEquilibrium';
import { soulfireOverlay } from './lib/magic/soulfire';
import { rangedSplitSoulOverlay } from './lib/ranged/splitSoul';
import { LogError } from './a1sauce/Error/logError';
import { GaugeDataSlice } from './state/gauge-data/gauge-data.state';
import { store } from './state';
import { MagicGaugeSlice } from './state/gauge-data/magic-gauge.state';
import { RangeGaugeSlice } from './state/gauge-data/range-gauge.state';
import { NecromancyGaugeSlice } from './state/gauge-data/necromancy-gauge.state';

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
sauce.createSettings();

const errorLogger = new LogError();

async function renderOverlays() {
    const { gaugeData } = store.getState();
    await readEnemy();

    if (!gaugeData.isInCombat && !gaugeData.updatingOverlayPosition) {
        return utility.clearTextOverlays();
    }

    await readBuffs();
    switch (gaugeData.combatStyle) {
        case CombatStyle.necro:
            await livingDeathOverlay();
            await conjureOverlay();
            await soulsOverlay();
            await necrosisOverlay();
            await incantationsOverlay();
            await bloatOverlay();
            break;
        case CombatStyle.mage:
            await sunshineOverlay();
            await spellsOverlay();
            await fsoaOverlay();
            await tsunamiOverlay();
            await soulfireOverlay();
            break;
        case CombatStyle.ranged:
            await deathsSwiftnessOverlay();
            await crystalRainOverlay();
            await peOverlay();
            await rangedSplitSoulOverlay();
            break;
        case CombatStyle.melee:
            break;
    }
}

export async function startApp() {
    if (!window.alt1) {
        return errorLogger.showError({
            title: 'Missing Alt1',
            message: `<p>You need to run this page in Alt1 to be able to capture the screen.</p>`,
        });
    }

    if (!alt1.permissionPixel) {
        return errorLogger.showError({
            title: 'Missing Screen Reading Permissions',
            message: `<p>This app does not have permissions to capture your screen. Please adjust the app's settings in Alt1.</p>`,
        });
    }

    if (!alt1.permissionOverlay) {
        return errorLogger.showError({
            title: 'Missing Overlay Permissions',
            message: `<p>This app does not have permissions to create overlays. Please adjust the app's settings in Alt1.</p>`,
        });
    }

    const patchNotes = new Patches();
    patchNotes.setNotes(notes);
    if (patchNotes.checkForNewVersion()) patchNotes.showPatchNotes();
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault(); // Prevent the default print dialog
            patchNotes.showPatchNotes();
        }
    });

    if (getSetting('buffsPosition') === undefined) {
        calibrationWarning();
    }

    // Should be initial?
    let oldStateString = JSON.stringify(store.getState());

    const localGaugeData = localStorage.getItem('gauge_data');

    /**
     * Localstorage for _any_ of the data will _not_ exist if this is the users first time launching.
     * Otherwise, we know the data is there from us populating it.
     */
    if (localGaugeData) {
        const { magic, ranged, necromancy, melee, gaugeData, alarms } = JSON.parse(localGaugeData);
        console.log(gaugeData);
        store.dispatch(GaugeDataSlice.actions.updateState(gaugeData));
        store.dispatch(MagicGaugeSlice.actions.updateState(magic));
        store.dispatch(RangeGaugeSlice.actions.updateState(ranged));
        store.dispatch(NecromancyGaugeSlice.actions.updateState(necromancy));
    }

    store.subscribe(() => {
        const state = store.getState();
        const stateString = JSON.stringify(state);

        if (oldStateString === stateString) {
            return;
        }

        oldStateString = stateString;
        localStorage.setItem('gauge_data', JSON.stringify(state));
    });

    updateActiveOrientationFromLocalStorage();

    /**
     * This loop will be the alarm handler, it'll loop forever constantly checking
     * the state of alarms and what needs to play or not.
     */
    alarmLoop();

    // Apparently setting GroupZIndex is a pretty expensive call to do in the loop - so let's only do it once
    alt1.overLaySetGroupZIndex('Undead_Army_Text', 1);
    alt1.overLaySetGroupZIndex('LivingDeath_Text', 1);
    alt1.overLaySetGroupZIndex('LivingDeath_Cooldown_Text', 1);

    alt1.overLaySetGroupZIndex('Sunshine_Text', 1);
    alt1.overLaySetGroupZIndex('Sunshine_Cooldown_Text', 1);
    alt1.overLaySetGroupZIndex('Instability_Text', 1);
    alt1.overLaySetGroupZIndex('Instability_Cooldown_Text', 1);
    alt1.overLaySetGroupZIndex('Tsunami_Text', 1);
    alt1.overLaySetGroupZIndex('Tsunami_Cooldown_Text', 1);
    alt1.overLaySetGroupZIndex('Soulfire_Text', 1);
    alt1.overLaySetGroupZIndex('Soulfire_Cooldown_Text', 1);

    alt1.overLaySetGroupZIndex('DeathsSwiftness_Text', 1);
    alt1.overLaySetGroupZIndex('DeathsSwiftness_Cooldown_Text', 1);
    alt1.overLaySetGroupZIndex('CrystalRain_Text', 1);
    alt1.overLaySetGroupZIndex('CrystalRain_Cooldown_Text', 1);
    alt1.overLaySetGroupZIndex('PerfectEquilibrium_Text', 1);
    alt1.overLaySetGroupZIndex('SplitSoul_Text', 1);

    findBuffAndDebuffBars();
    beginRendering();
}

export function findBuffAndDebuffBars() {
    findBuffsBar();
    findDebuffsBar();
}

export function resetPositionsAndFindBuffAndDebuffBars() {
    updateSetting('buffsPosition', undefined);
    updateSetting('debuffsPosition', undefined);
    findBuffAndDebuffBars();
}

export function beginRendering() {
    setInterval(() => renderOverlays(), 80);
}

function calibrationWarning(): void {
    alt1.setTooltip(
        '[JG] Use a Defensive ability such as Freedom or Anticipate to capture buffs location.',
    );
    setTimeout(() => {
        alt1.clearTooltip();
        findBuffsBar();
    }, 3000);
    setTimeout(() => {
        alt1.setTooltip(
            '[JG] Toggle Prayer on for a few seconds to capture debuffs location.',
        );
    }, 4000);
    setTimeout(() => {
        alt1.clearTooltip();
        findDebuffsBar();
    }, 8000);
}

function updateActiveOrientationFromLocalStorage(): void {
    const selectedOrientation = getSetting('selectedOrientation');

    store.dispatch(NecromancyGaugeSlice.actions.updateActiveOrientation(selectedOrientation));
    forceClearOverlays();
}

// TODO: Get rid of this crap
// Null suppressions are used as these items
// are added via A1Sauce.Settings and thus will always exist
function addEventListeners() {
    getById('selectedOrientation')!.addEventListener('change', () => {
        updateActiveOrientationFromLocalStorage();
    });

    // For some reason this one calculates incorrectly on load so we override the initial styles here
    const scaleRange = <HTMLInputElement>getById('scale');
    const scaleRangevalue =
        ((parseInt(scaleRange.value, 10) - parseInt(scaleRange.min, 10)) /
            (parseInt(scaleRange.max, 10) - parseInt(scaleRange.min))) *
        100;
    scaleRange.style.background =
        'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
        scaleRangevalue +
        '%, #0d1c24 ' +
        scaleRangevalue +
        '%, #0d1c24 100%)';

    getById('scale')!.addEventListener('change', async (e) => {
        const scaleFactor = Number((e.target as HTMLInputElement).value);
        store.dispatch(GaugeDataSlice.actions.updateState({ scaleFactor: scaleFactor / 100 }));
        location.reload();
    });

    const combatTimerRange = <HTMLInputElement>getById('combatTimer');
    const combatTimervalue =
        ((parseInt(combatTimerRange.value, 10) -
                parseInt(combatTimerRange.min, 10)) /
            (parseInt(combatTimerRange.max, 10) -
                parseInt(combatTimerRange.min))) *
        100;
    combatTimerRange.style.background =
        'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
        combatTimervalue +
        '%, #0d1c24 ' +
        combatTimervalue +
        '%, #0d1c24 100%)';

    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            //console.log();
            // setNecromancyGaugeData();
            utility.freezeAndContinueOverlays(); // Force an instant redraw
            const state = store.getState();
            updateSetting('gauge-data', JSON.stringify(state));
            // store.dispatch(GaugeDataSlice.actions.updateState({
            //
            // }))
            //const gaugeData = getGaugeData()!;
            //Object.assign(, gaugeData);
        });
    });

    /* Update Alarm Thresholds */
    getById('alarmSoulsThreshold')?.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'souls',
            alarm: { threshold: parseInt(target.value, 10) },
        }));
    });

    getById('alarmNecrosisThreshold')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'necrosis',
            alarm: { threshold: parseInt(target.value, 10) },
        }));
    });

    /* Update Active Alarms */
    getById('alarmSoulsActive')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'souls',
            alarm: { isActive: target.checked },
        }));
    });

    getById('alarmNecrosisActive')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'necrosis',
            alarm: { isActive: target.checked },
        }));
    });

    /* Update Looping Alarms */
    getById('alarmNecrosisLoop')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'necrosis',
            alarm: { isLooping: target.checked },
        }));
    });

    getById('alarmSoulsLoop')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'souls',
            alarm: { isLooping: target.checked },
        }));
    });

    /* Update Alarm Volumes */
    getById('alarmNecrosisVolume')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'necrosis',
            alarm: { volume: parseInt(target.value, 10) },
        }));
    });

    getById('alarmSoulsVolume')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'souls',
            alarm: { volume: parseInt(target.value, 10) },
        }));
    });

    /* Update Alarm Sounds */
    getById('alarmNecrosisAlertSound')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'necrosis',
            alarm: { sound: target.value },
        }));
    });

    getById('alarmSoulsAlertSound')!.addEventListener('change', (e) => {
        const target = <HTMLInputElement>e.target;
        store.dispatch(NecromancyGaugeSlice.actions.updateStackAlarm({
            stackName: 'souls',
            alarm: { sound: target.value },
        }));
    });
}

window.onload = function () {
    if (window.alt1) {
        alt1.identifyAppUrl('./appconfig.json');
        if (getSetting('checkForUpdates')) startVersionChecking(versionUrl);
        renderSettings();
        addEventListeners();
        startApp();
    } else {
        const addappurl = `alt1://addapp/${
            new URL('./appconfig.json', document.location.href).href
        }`;
        errorLogger.showError({
            title: 'Alt1 Not Detected',
            message: `<p>Click <a href="${addappurl}">here</a> to add this app to Alt1</p>`,
        });
    }
};
