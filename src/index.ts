import * as a1lib from 'alt1';
import * as utility from './lib/utility';
import { helperItems } from './lib/utility';
import * as sauce from './a1sauce';
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
import './icon.png';
import './css/styles.css';

const gauges: Overlay = {
	isInCombat: false,
	checkCombatStatus: false,
	scaleFactor: 1,
	necromancy: necromancy_gauge,
	magic: magic_gauge,
	ranged: ranged_gauge,
	melee: melee_gauge,
};

async function renderOverlays() {
	await readEnemy(gauges);
	if (gauges.isInCombat || sauce.getSetting('updatingOverlayPosition')) {
		await readBuffs(gauges);
		await conjureOverlay(gauges);
		await soulsOverlay(gauges);
		await necrosisOverlay(gauges);
		await incantationsOverlay(gauges);
		await livingDeathOverlay(gauges);
		await bloatOverlay(gauges);
	} else {
		await utility.clearTextOverlays();
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

	loadSettings();

	updateActiveOrientationFromLocalStorage();

	// Apparently setting GroupZIndex is a pretty expensive call to do in the loop - so let's only do it once
	alt1.overLaySetGroupZIndex('Undead_Army_Text', 1);
	alt1.overLaySetGroupZIndex('LivingDeath_Text', 1);

	await findBuffsBar().then(() => {
		setInterval(function () {
			renderOverlays();
		}, 20);
	});
}

function loadSettings(): void {
	if (sauce.getSetting('overlayPosition') !== undefined) {
		//TODO: Each gauge should be able to be positioned separately
		gauges.necromancy.position = sauce.getSetting('overlayPosition');
		gauges.magic.position = sauce.getSetting('overlayPosition');
		gauges.ranged.position = sauce.getSetting('overlayPosition');
		gauges.melee.position = sauce.getSetting('overlayPosition');
	}

	if (sauce.getSetting('hideOutsideCombat') !== undefined) {
		gauges.checkCombatStatus = sauce.getSetting('hideOutsideCombat');
	}

	if (sauce.getSetting('scale') !== undefined) {
		gauges.scaleFactor = sauce.getSetting('scale') / 100;
	} else {
		gauges.scaleFactor = 1;
	}

	// Necromancy Components (TODO: Move the check into the components themselves?)
	updateGaugeData();
}

//TODO: Clean this tf up
function updateGaugeData(): void {
	if (sauce.getSetting('showConjures') !== undefined) {
		gauges.necromancy.conjures.isActiveOverlay =
			sauce.getSetting('showConjures');
	}

	if (sauce.getSetting('showLivingDeath') !== undefined) {
		gauges.necromancy.livingDeath.isActiveOverlay =
			sauce.getSetting('showLivingDeath');
	}

	if (sauce.getSetting('showIncantations') !== undefined) {
		gauges.necromancy.incantations.isActiveOverlay =
			sauce.getSetting('showIncantations');
	}

	if (sauce.getSetting('showInvokeDeath') !== undefined) {
		gauges.necromancy.incantations.invokeDeath.isActiveOverlay =
			sauce.getSetting('showInvokeDeath');
	}

	if (sauce.getSetting('showDarkness') !== undefined) {
		gauges.necromancy.incantations.darkness.isActiveOverlay =
			sauce.getSetting('showDarkness');
	}

	if (sauce.getSetting('showThreads') !== undefined) {
		gauges.necromancy.incantations.threads.isActiveOverlay =
			sauce.getSetting('showThreads');
	}

	if (sauce.getSetting('showSplitSoul') !== undefined) {
		gauges.necromancy.incantations.splitSoul.isActiveOverlay =
			sauce.getSetting('showSplitSoul');
	}

	if (sauce.getSetting('showSouls') !== undefined) {
		gauges.necromancy.stacks.souls.isActiveOverlay =
			sauce.getSetting('showSouls');
	}

	if (sauce.getSetting('showNecrosis') !== undefined) {
		gauges.necromancy.stacks.necrosis.isActiveOverlay =
			sauce.getSetting('showNecrosis');
	}

	if (sauce.getSetting('dupeRow') !== undefined) {
		gauges.necromancy.stacks.duplicateNecrosisRow =
			sauce.getSetting('dupeRow');
	}

	if (sauce.getSetting('showBloat') !== undefined) {
		gauges.necromancy.bloat.isActiveOverlay = sauce.getSetting('showBloat');
	}

	if (sauce.getSetting('alarmNecrosisActive') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.isActive = sauce.getSetting(
			'alarmNecrosisActive'
		);
	}

	if (sauce.getSetting('showBlalarmNecrosisAlertSoundoat') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.sound = sauce.getSetting(
			'showBlalarmNecrosisAlertSoundoat'
		);
	}

	if (sauce.getSetting('alarmNecrosisLoop') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.isLooping =
			sauce.getSetting('alarmNecrosisLoop');
	}

	if (sauce.getSetting('alarmNecrosisThreshold') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.threshold = sauce.getSetting(
			'alarmNecrosisThreshold'
		);
	}

	if (sauce.getSetting('alarmNecrosisVolume') !== undefined) {
		gauges.necromancy.stacks.necrosis.alarm.volume = sauce.getSetting(
			'alarmNecrosisVolume'
		);
	}
	if (sauce.getSetting('alarmSoulsActive') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.isActive =
			sauce.getSetting('alarmSoulsActive');
	}

	if (sauce.getSetting('alarmSoulsAlertSound') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.sound = sauce.getSetting(
			'alarmSoulsAlertSound'
		);
	}

	if (sauce.getSetting('alarmSoulsLoop') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.isLooping =
			sauce.getSetting('alarmSoulsLoop');
	}

	if (sauce.getSetting('alarmSoulsThreshold') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.threshold = sauce.getSetting(
			'alarmSoulsThreshold'
		);
	}

	if (sauce.getSetting('alarmSoulsVolume') !== undefined) {
		gauges.necromancy.stacks.souls.alarm.volume =
			sauce.getSetting('alarmSoulsVolume');
	}
}

function updateActiveOrientationFromLocalStorage(): void {
	// Retrieve selected orientation from localStorage
	let selectedOrientation = sauce.getSetting('selectedOrientation');

	if (!selectedOrientation) {
		selectedOrientation = 'reverse_split';
	}

	// Handle v0.0.3 values that included '_orientation' in the string
	// This should only be needed for a few weeks
	if (selectedOrientation == 'grouped_orientation')
		selectedOrientation = 'grouped';
	if (selectedOrientation == 'split_orientation') selectedOrientation = 'split';
	if (selectedOrientation == 'reverse_split_orientation')
		selectedOrientation = 'reverse_split';

	sauce.updateSetting('selectedOrientation', selectedOrientation);


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
	updateActiveOrientation(necromancy_gauge);
}

const version = '1.0.0';
const settingsObject = {
	appName: sauce.createHeading('h2', 'Job Gauges - v' + version),
	settingDiscord: sauce.createText(
		`Please <a href="https://discord.gg/KJ2SgWyJFF" target="_blank" rel="nofollow">join the Discord</a> for any suggestions or support`
	),
	generalStart: sauce.createSeperator(),
	generalHeader: sauce.createHeading('h3', 'General'),
	hideOutsideCombat: sauce.createCheckboxSetting(
		'hideOutsideCombat',
		'Hide the overlay while out of combat',
		false
	),
	repositionOverlay: sauce.createButton(
		'Reposition Overlay',
		setOverlayPosition,
		{ classes: ['nisbutton'] }
	),
	sizeReset: sauce.createSeperator(),
	ScaleHeader: sauce.createHeading('h3', 'Scale'),
	UIScale: sauce.createRangeSetting(
		'scale',
		'Adjusts the size of the overlay. You must reload and reposition the overlay after scaling.',
		{
			defaultValue: '100',
			min: 50,
			max: 300,
		}
	),
	orientationReset: sauce.createSeperator(),
	orientationHeader: sauce.createHeading('h3', 'Incantation Placement'),
	orientationSelection: sauce.createDropdownSetting(
		'selectedOrientation',
		'Select how to group Incantations',
		sauce.getSetting('selectedOrientation') ?? 'reverse_split',
		[
			{ value: 'grouped', name: 'Grouped' },
			{ value: 'split', name: 'Split' },
			{ value: 'reverse_split', name: 'Reverse Split' },
		]
	),
	visibleReset: sauce.createSeperator(),
	visibleComponentsHeader: sauce.createHeading('h3', 'Visible Components'),
	visibleComponentsText: sauce.createText(
		'Select which components of the overlay you wish to see.'
	),
	showConjures: sauce.createCheckboxSetting(
		'showConjures',
		'Show Conjures',
		sauce.getSetting('showConjures') ?? true
	),
	showLivingDeath: sauce.createCheckboxSetting(
		'showLivingDeath',
		'Show Living Death',
		sauce.getSetting('showLivingDeath') ?? true
	),
	showIncantations: sauce.createCheckboxSetting(
		'showIncantations',
		'Show Incantations',
		sauce.getSetting('showIncantations') ?? true
	),
	showInvokeDeath: sauce.createCheckboxSetting(
		'showInvokeDeath',
		'Show Invoke Death',
		sauce.getSetting('showInvokeDeath') ?? true
	),
	showDarkness: sauce.createCheckboxSetting(
		'showDarkness',
		'Show Darkness',
		sauce.getSetting('showDarkness') ?? true
	),
	showThreads: sauce.createCheckboxSetting(
		'showThreads',
		'Show Threads of Fate',
		sauce.getSetting('showThreads') ?? true
	),
	showSplitSoul: sauce.createCheckboxSetting(
		'showSplitSoul',
		'Show Split Soul',
		sauce.getSetting('showSplitSoul') ?? true
	),
	showSouls: sauce.createCheckboxSetting(
		'showSouls',
		'Show Residual Souls',
		sauce.getSetting('showSouls') ?? true
	),
	showNecrosis: sauce.createCheckboxSetting(
		'showNecrosis',
		'Show Necrosis',
		sauce.getSetting('showNecrosis') ?? true
	),
	dupeRow: sauce.createCheckboxSetting(
		'dupeRow',
		'Show 2nd row of Necrosis stacks',
		sauce.getSetting('dupeRow') ?? false
	),
	showBloat: sauce.createCheckboxSetting(
		'showBloat',
		'Show Bloat',
		sauce.getSetting('showBloat') ?? true
	),
	alarmsSeperator: sauce.createSeperator(),
	alarmSoulsHeader: sauce.createHeading('h3', 'Residual Souls Alarm'),
	alarmSoulsThreshold: sauce.createRangeSetting(
		'alarmSoulsThreshold',
		'Alert when at or above this many souls',
		{ defaultValue: '5', min: 2, max: 5, unit: ' souls' }
	),
	alarmSouls: sauce.createAlarmSetting(
		'Residual Souls Alarm',
		'alarmSouls',
		''
	),
	alarmNecrosisHeader: sauce.createHeading('h3', 'Necrosis Stacks Alarm'),
	alarmNecrosisThreshold: sauce.createRangeSetting(
		'alarmNecrosisThreshold',
		'Alert when at or above this many stacks',
		{ defaultValue: '12', min: 2, max: 12, unit: ' stacks' }
	),
	alarmNecrosis: sauce.createAlarmSetting(
		'Necrosis Stacks Alarm',
		'alarmNecrosis',
		''
	),
};

settingsObject.orientationSelection.addEventListener('change', () => {
	updateActiveOrientationFromLocalStorage();
});

settingsObject.repositionOverlay.addEventListener('click', setOverlayPosition);

settingsObject.showNecrosis.addEventListener('change', () => {
	gauges.necromancy.stacks.duplicateNecrosisRow = sauce.getSetting('dupeRow');
});

settingsObject.UIScale.addEventListener('change', () => {
	location.reload();
});

let updatingOverlayPosition = false;
async function setOverlayPosition() {
	updatingOverlayPosition = true;
	a1lib.once('alt1pressed', updateLocation);
	alt1.setTooltip(
		'Press Primary Keybind to save position (default keybind is alt+1)'
	);
	setTimeout(() => {
		alt1.clearTooltip();
	}, 3000);
	while (updatingOverlayPosition) {
		await sauce.timeout(1000);
		utility.freezeOverlays();
		//TODO: Per-gauge repositioning will be needed here as well
		utility.resizeGaugesWithMousePosition(gauges);
		utility.continueOverlays();
	}
}

function updateLocation(): void {
	updatingOverlayPosition = false;
	sauce.updateSetting('overlayPosition', {
		x: gauges.necromancy.position.x,
		y: gauges.necromancy.position.y,
	});
	alt1.overLayClearGroup('overlayPositionHelper');
	alt1.overLayRefreshGroup('overlayPositionHelper');
	alt1.clearTooltip();
}

window.onload = function () {
	if (window.alt1) {
		alt1.identifyAppUrl('./appconfig.json');
		Object.values(settingsObject).forEach((val) => {
			document.querySelector('#Settings .container').before(val);
		});
		document
			.querySelectorAll('input[type="checkbox"]')
			.forEach((checkbox) => {
				checkbox.addEventListener('change', () => {
					updateGaugeData();
					utility.freezeAndContinueOverlays(); // Force an instant redraw
				});
			});


		/* Update Alarm Thresholds */
		utility.getByID('alarmSoulsThreshold').addEventListener('change', (e) => {
			const target = <HTMLInputElement>e.target;
			gauges.necromancy.stacks.souls.alarm.threshold = parseInt(target.value, 10);
			console.log('Souls alarm threshold: ' + target.value);
		});

		utility
			.getByID('alarmNecrosisThreshold')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.necrosis.alarm.threshold = parseInt(
					target.value,
					10
				);
				console.log('Necrosis alarm threshold: ' + target.value);
			});

		/* Update Active Alarms */
		utility.getByID('alarmSoulsActive').addEventListener('change', (e) => {
			const target = <HTMLInputElement>e.target;
			gauges.necromancy.stacks.souls.alarm.isActive = target.checked;
			console.log('Souls alarm active: ' + target.checked);
		});

		utility.getByID('alarmNecrosisActive').addEventListener('change', (e) => {
			const target = <HTMLInputElement>e.target;
			gauges.necromancy.stacks.necrosis.alarm.isActive = target.checked;
			console.log('Necrosis alarm active: ' + target.checked);
		});

		/* Update Looping Alarms */
		utility.getByID('alarmNecrosisLoop').addEventListener('change', (e) => {
			const target = <HTMLInputElement>e.target;
			gauges.necromancy.stacks.necrosis.alarm.isLooping = target.checked;
			console.log('Necrosis alarm looping: ' + target.checked);
		});

		utility
			.getByID('alarmSoulsLoop')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.souls.alarm.isLooping = target.checked;
				console.log(
					'Souls alarm volume looping: ' + target.checked
				);
			});

		/* Update Alarm Volumes */
		utility
			.getByID('alarmNecrosisVolume')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.necrosis.alarm.volume = parseInt(
					target.value,
					10
				);
				console.log('Necrosis alarm volume updated to: ' + target.value);
			});

		utility
			.getByID('alarmSoulsVolume')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.souls.alarm.volume = parseInt(
					target.value,
					10
				);
				console.log('Souls alarm volume updated to: ' + target.value);
			});

		/* Update Alarm Sounds */
		utility
			.getByID('alarmNecrosisAlertSound')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.necrosis.alarm.sound = target.value;
				console.log('Necrosis alarm sound updated to:' + target.value);
			});

		utility
			.getByID('alarmSoulsAlertSound')
			.addEventListener('change', (e) => {
				const target = <HTMLInputElement>e.target;
				gauges.necromancy.stacks.souls.alarm.sound = target.value;
				console.log('Souls alarm sound updated to:' + target.value);
			});

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
}
