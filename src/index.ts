import * as utility from './lib/utility';
import { helperItems } from './lib/utility';
import { Overlay } from './types/index';

// General Purpose
import { findBuffsBar, findDebuffsBar, readBuffs } from './lib/readBuffs';
import { readEnemy } from './lib/readEnemy';

// Necromancy Gauge
import { necromancy_gauge } from './data/necromancyGauge';
import { conjureOverlay } from './lib/necromancy/conjures';
import { soulsOverlay } from './lib/necromancy/soul';
import { necrosisOverlay } from './lib/necromancy/necrosis';
import { incantationsOverlay } from './lib/necromancy/incantations';
import { livingDeathOverlay } from './lib/necromancy/livingDeath';
import { bloatOverlay } from './lib/necromancy/bloat';

// Magic Gauge
import { magic_gauge } from './data/magicGauge';

// Ranged Gauge
import { ranged_gauge } from './data/rangedGauge';

// Melee Gauge
import { melee_gauge } from './data/meleeGauge';

import './index.html';
import './appconfig.json';
import './version.json';
import './icon.png';
import './css/styles.css';
import { A1Sauce } from './a1sauce';
import { getSetting, updateSetting } from './a1sauce/Settings/Storage';
import { getById } from './a1sauce/Utils/getById';
import { renderSettings } from './lib/settings';
import {
	appName,
	majorVersion,
	minorVersion,
	patchVersion,
	versionUrl,
} from './data/constants';
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
import { odeToDeceitOverlay } from './lib/magic/odeToDeceit';
import { rangedSplitSoulOverlay } from './lib/ranged/splitSoul';
import { LogError } from './a1sauce/Error/logError';

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
sauce.createSettings();

const errorLogger = new LogError();

const gauges: Overlay = {
	isInCombat: false,
	checkCombatStatus: false,
	hasBeenOutOfCombat: 10,
	scaleFactor: 1,
	combatStyle: 3,
	automaticSwapping: false,
	necromancy: necromancy_gauge,
	magic: magic_gauge,
	ranged: ranged_gauge,
	melee: melee_gauge,
};

async function renderOverlays() {
	await readEnemy(gauges);
	if (gauges.isInCombat || getSetting('updatingOverlayPosition')) {
		await readBuffs(gauges);
		switch (gauges.combatStyle) {
			case 4:
				await livingDeathOverlay(gauges);
				await conjureOverlay(gauges);
				await soulsOverlay(gauges);
				await necrosisOverlay(gauges);
				await incantationsOverlay(gauges);
				await bloatOverlay(gauges);
				break;
			case 3:
				await sunshineOverlay(gauges);
				await spellsOverlay(gauges);
				await fsoaOverlay(gauges);
				await tsunamiOverlay(gauges);
				await odeToDeceitOverlay(gauges);
				break;
			case 2:
				await deathsSwiftnessOverlay(gauges);
				await crystalRainOverlay(gauges);
				await peOverlay(gauges);
				await rangedSplitSoulOverlay(gauges);
				break;
			case 1:
				break;
		}
	} else {
		utility.clearTextOverlays();
	}
}

export async function startApp() {
	if (!window.alt1) {
		errorLogger.showError({
			title: 'Missing Alt1',
			message: `<p>You need to run this page in Alt1 to be able to capture the screen.</p>`,
		});
		return;
	}
	if (!alt1.permissionPixel) {
		errorLogger.showError({
			title: 'Missing Screen Reading Permissions',
			message: `<p>This app does not have permissions to capture your screen. Please adjust the app's settings in Alt1.</p>`,
		});
		return;
	}
	if (!alt1.permissionOverlay) {
		errorLogger.showError({
			title: 'Missing Overlay Permissions',
			message: `<p>This app does not have permissions to create overlays. Please adjust the app's settings in Alt1.</p>`,
		});
		return;
	}

	let patchCheck = new Patches();
	patchCheck.setNotes(notes);
	patchCheck.showPatchNotes();

	if (
		getSetting('buffsPosition') == undefined
	) {
		calibrationWarning();
	}

	setNecromancyGaugeData(gauges);

	updateActiveOrientationFromLocalStorage();

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
	alt1.overLaySetGroupZIndex('OdeToDeceit_Text', 1);
	alt1.overLaySetGroupZIndex('OdeToDeceit_Cooldown_Text', 1);

	alt1.overLaySetGroupZIndex('DeathsSwiftness_Text', 1);
	alt1.overLaySetGroupZIndex('DeathsSwiftness_Cooldown_Text', 1);

	alt1.overLaySetGroupZIndex('CrystalRain_Text', 1);
	alt1.overLaySetGroupZIndex('CrystalRain_Cooldown_Text', 1);

	alt1.overLaySetGroupZIndex('PerfectEquilibrium_Text', 1);
	alt1.overLaySetGroupZIndex('SplitSoul_Text', 1);

	await beginRendering();
}

export async function beginRendering() {
  try {
    await findBuffsBar();
    await findDebuffsBar();
    setInterval(() => renderOverlays(), 20);
  } catch (e) {
    console.error(`Issue when rendering.\n\n${JSON.stringify(e)}`);
  }
}

function calibrationWarning(): void {
	alt1.setTooltip('[JG] Use a Defensive ability such as Freedom or Anticipate to capture buffs location.');
	setTimeout(() => {
		alt1.clearTooltip();
		findBuffsBar();
	}, 3000);
	setTimeout(() => {
		alt1.setTooltip(
			'[JG] Toggle Prayer on for a few seconds to capture debuffs location.'
		);
	}, 4000);
	setTimeout(() => {
		alt1.clearTooltip();
		findDebuffsBar();
	}, 8000);
}

function updateActiveOrientationFromLocalStorage(): void {
	// Retrieve selected orientation from localStorage
	let selectedOrientation = getSetting('selectedOrientation');

	if (!selectedOrientation) {
		selectedOrientation = 'reverse_split';
	}

	// TODO: Get rid of this crap
	// Handle v0.0.3 values that included '_orientation' in the string
	// This should only be needed for a few weeks
	if (selectedOrientation == 'grouped_orientation')
		selectedOrientation = 'grouped';
	if (selectedOrientation == 'split_orientation')
		selectedOrientation = 'split';
	if (selectedOrientation == 'reverse_split_orientation')
		selectedOrientation = 'reverse_split';
	// END

	updateSetting('selectedOrientation', selectedOrientation);
	
	// Function to recursively update orientations in an object
	function updateActiveOrientation(obj: object) {
		for (const key in obj) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				if (key === 'active_orientation') {
					obj[key].x = obj[selectedOrientation].x;
					obj[key].y = obj[selectedOrientation].y;
				} else {
					updateActiveOrientation(obj[key]);
				}
			}
		}
		utility.freezeOverlays();
		utility.continueOverlays();
	}
	
	updateActiveOrientation(gauges);
}

// TODO: Get rid of this crap
function addEventListeners() {
	getById('selectedOrientation').addEventListener('change', () => {
		updateActiveOrientationFromLocalStorage();
	});

	getById('repositionOverlay').addEventListener('click', () => {
		utility.setOverlayPosition(gauges, utility);
	});

	getById('showNecrosis').addEventListener('change', () => {
		gauges.necromancy.stacks.duplicateNecrosisRow = getSetting('dupeRow');
	});

	getById('defaultCombatStyle').addEventListener('change', () => {
		gauges.combatStyle =
			parseInt(getSetting('defaultCombatStyle'), 10);
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

	getById('scale').addEventListener('change', () => {
		location.reload();
	});

	const combatTimerRange = <HTMLInputElement>getById('combatTimer');
	const combatTimervalue =
		((parseInt(combatTimerRange.value, 10) - parseInt(combatTimerRange.min, 10)) /
			(parseInt(combatTimerRange.max, 10) - parseInt(combatTimerRange.min))) *
		100;
	combatTimerRange.style.background =
		'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
		combatTimervalue +
		'%, #0d1c24 ' +
		combatTimervalue +
		'%, #0d1c24 100%)';

	document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
		checkbox.addEventListener('change', () => {
			setNecromancyGaugeData(gauges);
			utility.freezeAndContinueOverlays(); // Force an instant redraw
			updateSetting('gaugedata', JSON.stringify(gauges));
		});
	});

	/* Update Alarm Thresholds */
	getById('alarmSoulsThreshold').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.threshold = parseInt(
			target.value,
			10
		);
	});

	getById('alarmNecrosisThreshold').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.threshold = parseInt(
			target.value,
			10
		);
	});

	/* Update Active Alarms */
	getById('alarmSoulsActive').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.isActive = target.checked;
	});

	getById('alarmNecrosisActive').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.isActive = target.checked;
	});

	/* Update Looping Alarms */
	getById('alarmNecrosisLoop').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.isLooping = target.checked;
	});

	getById('alarmSoulsLoop').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.isLooping = target.checked;
	});

	/* Update Alarm Volumes */
	getById('alarmNecrosisVolume').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.volume = parseInt(
			target.value,
			10
		);
	});

	getById('alarmSoulsVolume').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.volume = parseInt(
			target.value,
			10
		);
	});

	/* Update Alarm Sounds */
	getById('alarmNecrosisAlertSound').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.sound = target.value;
	});

	getById('alarmSoulsAlertSound').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.sound = target.value;
	});
}

// TODO: Get rid of this crap
function setNecromancyGaugeData(gauges: Overlay) {
	if (getSetting('overlayPosition') !== undefined) {
		//TODO: Each gauge should be able to be positioned separately
		gauges.necromancy.position = getSetting('overlayPosition');
		gauges.magic.position = getSetting('overlayPosition');
		gauges.ranged.position = getSetting('overlayPosition');
		gauges.melee.position = getSetting('overlayPosition');
	}

	if (getSetting('hideOutsideCombat') !== undefined) {
		gauges.checkCombatStatus = getSetting('hideOutsideCombat');
		gauges.isInCombat = false;
	}

	if (getSetting('scale') !== undefined) {
		gauges.scaleFactor = getSetting('scale') / 100;
	} else {
		gauges.scaleFactor = 1;
	}

	if (getSetting('showConjures') !== undefined) {
		gauges.necromancy.conjures.isActiveOverlay = getSetting('showConjures');
	}

	if (getSetting('showLivingDeath') !== undefined) {
		gauges.necromancy.livingDeath.isActiveOverlay =
			getSetting('showLivingDeath');
	}

	if (getSetting('showIncantations') !== undefined) {
		gauges.necromancy.incantations.isActiveOverlay =
			getSetting('showIncantations');
	}

	if (getSetting('showInvokeDeath') !== undefined) {
		gauges.necromancy.incantations.invokeDeath.isActiveOverlay =
			getSetting('showInvokeDeath');
	}

	if (getSetting('showDarkness') !== undefined) {
		gauges.necromancy.incantations.darkness.isActiveOverlay =
			getSetting('showDarkness');
	}

	if (getSetting('showThreads') !== undefined) {
		gauges.necromancy.incantations.threads.isActiveOverlay =
			getSetting('showThreads');
	}

	if (getSetting('showSplitSoul') !== undefined) {
		gauges.necromancy.incantations.splitSoul.isActiveOverlay =
			getSetting('showSplitSoul');
	}

	if (getSetting('showSouls') !== undefined) {
		gauges.necromancy.stacks.souls.isActiveOverlay =
			getSetting('showSouls');
	}

	if (getSetting('pre95Souls') !== undefined) {
		gauges.necromancy.stacks.pre95Souls = getSetting('pre95Souls');
	}

	if (getSetting('showNecrosis') !== undefined) {
		gauges.necromancy.stacks.necrosis.isActiveOverlay =
			getSetting('showNecrosis');
	}

	if (getSetting('useColoredNecrosis') !== undefined) {
		gauges.necromancy.stacks.useColoredNecrosis = getSetting('useColoredNecrosis');
	}

	if (getSetting('dupeRow') !== undefined) {
		gauges.necromancy.stacks.duplicateNecrosisRow = getSetting('dupeRow');
	}

	if (getSetting('showBloat') !== undefined) {
		gauges.necromancy.bloat.isActiveOverlay = getSetting('showBloat');
	}

	if (getSetting('alarmNecrosisActive') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.isActive = getSetting(
			'alarmNecrosisActive'
		);
	}

	if (getSetting('alarmNecrosisAlertSound') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.sound = getSetting(
			'alarmNecrosisAlertSound'
		);
	}

	if (getSetting('alarmNecrosisLoop') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.isLooping =
			getSetting('alarmNecrosisLoop');
	}

	if (getSetting('alarmNecrosisThreshold') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.threshold = getSetting(
			'alarmNecrosisThreshold'
		);
	}

	if (getSetting('alarmNecrosisVolume') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.volume = getSetting(
			'alarmNecrosisVolume'
		);
	}
	if (getSetting('alarmSoulsActive') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.isActive =
			getSetting('alarmSoulsActive');
	}

	if (getSetting('alarmSoulsAlertSound') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.sound = getSetting(
			'alarmSoulsAlertSound'
		);
	}

	if (getSetting('alarmSoulsLoop') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.isLooping =
			getSetting('alarmSoulsLoop');
	}

	if (getSetting('alarmSoulsThreshold') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.threshold = getSetting(
			'alarmSoulsThreshold'
		);
	}

	if (getSetting('alarmSoulsVolume') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.volume =
			getSetting('alarmSoulsVolume');
	}

	if (getSetting('automaticSwapping') !== undefined) {
		gauges.automaticSwapping =
			getSetting('automaticSwapping');
	}

	if (getSetting('defaultCombatStyle') !== undefined) {
		let input = <HTMLSelectElement>document.getElementById('defaultCombatStyle');
		input.value = getSetting('defaultCombatStyle');
		gauges.combatStyle =
			parseInt(getSetting('defaultCombatStyle'), 10);
	}
}

// TODO: For Gauge Settings I should be able to store the entire gauge in localStorage
// TODO: and recover it instead of setting each property individually from a different setting
// TODO: Just need to figure out why my earlier attempt with setGaugeData() wasn't saving values properly
function getGaugeData(gauges: Overlay) {
	let gaugeData = getSetting('gaugedata');
	if (gaugeData !== undefined) {
		gauges = gaugeData;
		return JSON.parse(gaugeData);
	}
}

window.onload = function () {
	if (window.alt1) {
		alt1.identifyAppUrl('./appconfig.json');
		if (getSetting('checkForUpdates')) startVersionChecking(versionUrl);
		renderSettings(gauges);
		addEventListeners();
		startApp();
	} else {
		const addappurl = `alt1://addapp/${
			new URL('./appconfig.json', document.location.href).href
		}`;
		errorLogger.showError({
			title: 'Alt1 Not Detected',
			message:
				`<p>Click <a href="${addappurl}">here</a> to add this app to Alt1</p>`,
		});
	}
};
