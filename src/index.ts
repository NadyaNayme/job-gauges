import * as utility from './lib/utility';
import { helperItems } from './lib/utility';
import { Overlay } from './types/index';

// General Purpose
import { findBuffsBar, readBuffs } from './lib/readBuffs';
import { readEnemy } from './lib/readEnemy';

// Necromancy Gauge
import { necromancy_gauge } from './data/necromancy_gauge';
import { conjureOverlay } from './lib/necromancy/conjures';
import { soulsOverlay } from './lib/necromancy/soul_stacks';
import { necrosisOverlay } from './lib/necromancy/necrosis_stacks';
import { incantationsOverlay } from './lib/necromancy/incantations';
import { livingDeathOverlay } from './lib/necromancy/living_death';
import { bloatOverlay } from './lib/necromancy/bloat';

// Magic Gauge
import { magic_gauge } from './data/magic_gauge';

// Ranged Gauge
import { ranged_gauge } from './data/ranged_gauge';

// Melee Gauge
import { melee_gauge } from './data/melee_gauge';

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
import { spellsOverlay } from './lib/magic/active_spell';
import { fsoaOverlay } from './lib/magic/instability';
import { tsunamiOverlay } from './lib/magic/tsunami';

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
sauce.createSettings();

const gauges: Overlay = {
	isInCombat: false,
	checkCombatStatus: false,
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
				break;
			case 2:
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
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div>You need to run this page in alt1 to capture the screen</div>`
		);
		return;
	}
	if (!alt1.permissionPixel) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div><p>Page is not installed as app or capture permission is not enabled</p></div>`
		);
		return;
	}
	if (!alt1.permissionOverlay) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div><p>Attempted to use Overlay but app overlay permission is not enabled. Please enable "Show Overlay" permission in Alt1 settinsg (wrench icon in corner).</p></div>`
		);
		return;
	}

	let patchCheck = new Patches();
	patchCheck.setNotes(notes);
	patchCheck.showPatchNotes();

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

	await findBuffsBar().then(() => {
		setInterval(function () {
			renderOverlays();
		}, 20);
	});
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
					console.log(obj);
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
	const value =
		((parseInt(scaleRange.value, 10) - parseInt(scaleRange.min, 10)) /
			(parseInt(scaleRange.max, 10) - parseInt(scaleRange.min))) *
		100;
	scaleRange.style.background =
		'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
		value +
		'%, #0d1c24 ' +
		value +
		'%, #0d1c24 100%)';

	getById('scale').addEventListener('change', () => {
		location.reload();
	});

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
		console.log('Souls alarm threshold: ' + target.value);
	});

	getById('alarmNecrosisThreshold').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.threshold = parseInt(
			target.value,
			10
		);
		console.log('Necrosis alarm threshold: ' + target.value);
	});

	/* Update Active Alarms */
	getById('alarmSoulsActive').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.isActive = target.checked;
		console.log('Souls alarm active: ' + target.checked);
	});

	getById('alarmNecrosisActive').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.isActive = target.checked;
		console.log('Necrosis alarm active: ' + target.checked);
	});

	/* Update Looping Alarms */
	getById('alarmNecrosisLoop').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.isLooping = target.checked;
		console.log('Necrosis alarm looping: ' + target.checked);
	});

	getById('alarmSoulsLoop').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.isLooping = target.checked;
		console.log('Souls alarm volume looping: ' + target.checked);
	});

	/* Update Alarm Volumes */
	getById('alarmNecrosisVolume').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.volume = parseInt(
			target.value,
			10
		);
		console.log('Necrosis alarm volume updated to: ' + target.value);
	});

	getById('alarmSoulsVolume').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.volume = parseInt(
			target.value,
			10
		);
		console.log('Souls alarm volume updated to: ' + target.value);
	});

	/* Update Alarm Sounds */
	getById('alarmNecrosisAlertSound').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.necrosis.alarm.sound = target.value;
		console.log('Necrosis alarm sound updated to:' + target.value);
	});

	getById('alarmSoulsAlertSound').addEventListener('change', (e) => {
		const target = <HTMLInputElement>e.target;
		gauges.necromancy.stacks.souls.alarm.sound = target.value;
		console.log('Souls alarm sound updated to:' + target.value);
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

	if (getSetting('showBlalarmNecrosisAlertSoundoat') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.sound = getSetting(
			'showBlalarmNecrosisAlertSoundoat'
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
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`
			Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
		`
		);
	}
};
