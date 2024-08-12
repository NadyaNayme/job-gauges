import * as a1lib from 'alt1';
import * as TargetMob from 'alt1/targetmob';
import * as utility from './lib/utility';
import { helperItems } from './lib/utility';
import * as sauce from './a1sauce';
import { Overlay, NecromancyGauge, MagicGauge, RangedGauge, MeleeGauge } from './types/index';

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
	function updateActiveOrientation(obj: Object) {
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

const version = '0.0.5';
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
};

settingsObject.orientationSelection.addEventListener('change', () => {
	updateActiveOrientationFromLocalStorage();
});

settingsObject.repositionOverlay.addEventListener('click', setOverlayPosition);

settingsObject.showNecrosis.addEventListener('change', (e) => {
	gauges.necromancy.stacks.duplicateNecrosisRow = sauce.getSetting('dupeRow');
})

let updatingOverlayPosition = false;
async function setOverlayPosition() {
	let scaleFactor = sauce.getSetting('scale') / 100;
	updatingOverlayPosition = true;
	a1lib.once('alt1pressed', updateLocation);
	alt1.setTooltip(
		'Press Primary Keybind to save position (default keybind is alt+1)'
	);
	setTimeout(() => {
		alt1.clearTooltip();
	}, 3000);
	while (updatingOverlayPosition) {
		let _time = await sauce.timeout(1000);
		let _freeze = await utility.freezeOverlays();
		//TODO: Per-gauge repositioning will be needed here as well
		gauges.necromancy.position.x =
			utility.adjustPositionWithoutScale(a1lib.getMousePosition().x, scaleFactor);
		gauges.necromancy.position.y =
			utility.adjustPositionWithoutScale(a1lib.getMousePosition().y, scaleFactor);
		gauges.magic.position.x = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().x,
			scaleFactor
		);
		gauges.magic.position.y = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().y,
			scaleFactor
		);
		gauges.ranged.position.x = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().x,
			scaleFactor
		);
		gauges.ranged.position.y = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().y,
			scaleFactor
		);
		gauges.melee.position.x = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().x,
			scaleFactor
		);
		gauges.melee.position.y = utility.adjustPositionWithoutScale(
			a1lib.getMousePosition().y,
			scaleFactor
		);
		let _continue = await utility.continueOverlays();
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
		document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				updateGaugeData();
				utility.freezeAndContinueOverlays(); // Force an instant redraw
			});
		});
		startApp();
	} else {
		let addappurl = `alt1://addapp/${
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
