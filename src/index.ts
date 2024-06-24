import * as a1lib from 'alt1';
import * as TargetMob from 'alt1/targetmob';
import * as sauce from './a1sauce';

const { necromancy_gauge } = require('./data/necromancy_job_gauge');
const { readBuffs } = require('./lib/readBuffs');
const { conjureOverlay } = require('./lib/necromancy/conjures');
const { soulsOverlay } = require('./lib/necromancy/soul_stacks');
const { necrosisOverlay } = require('./lib/necromancy/necrosis_stacks');
const { incantationsOverlay } = require('./lib/necromancy/incantations');
const { livingDeathOverlay } = require('./lib/necromancy/living_death');
const { readEnemy } = require('./lib/readEnemy');

import './index.html';
import './appconfig.json';
import './icon.png';
import './css/styles.css';
import { bloatOverlay } from './lib/necromancy/bloat';

var targetDisplay = new TargetMob.default();

function getByID(id: string) {
	return document.getElementById(id);
}

let helperItems = {
	Output: getByID('output'),
	settings: getByID('Settings'),
};

const gauges = {
	inCombat: false,
	checkCombatStatus: false,
	necromancy: necromancy_gauge,
};

async function renderOverlay() {
	await readEnemy(gauges);
	if (gauges.inCombat || sauce.getSetting('updatingOverlayPosition')) {
		await readBuffs(gauges);
		await conjureOverlay(gauges);
		await soulsOverlay(gauges);
		await necrosisOverlay(gauges);
		await incantationsOverlay(gauges);
		await livingDeathOverlay(gauges);
		await bloatOverlay(gauges);
	} else {
		await clearTextOverlays();
	}
}

async function clearTextOverlays() {
	alt1.overLaySetGroup('Undead_Army_Text');
	alt1.overLayClearGroup('Undead_Army_Text');
	alt1.overLayRefreshGroup('Undead_Army_Text');
	alt1.overLaySetGroup('LivingDeath_Text');
	alt1.overLayClearGroup('LivingDeath_Text');
	alt1.overLayRefreshGroup('LivingDeath_Text');
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

	if (sauce.getSetting('overlayPosition') !== undefined) {
		gauges.necromancy.position = sauce.getSetting('overlayPosition');
	}

	if (sauce.getSetting('hideOutsideCombat') !== undefined) {
		gauges.checkCombatStatus = sauce.getSetting('hideOutsideCombat');
	}

	if (sauce.getSetting('showConjures') !== undefined) {
		gauges.necromancy.conjures.visible = sauce.getSetting('showConjures');
	}

	if (sauce.getSetting('showLivingDeath') !== undefined) {
		gauges.necromancy.livingDeath.visible = sauce.getSetting('showLivingDeath');
	}

	if (sauce.getSetting('showIncantations') !== undefined) {
		gauges.necromancy.incantations.visible = sauce.getSetting('showIncantations');
	}

	if (sauce.getSetting('showInvokeDeath') !== undefined) {
		gauges.necromancy.incantations.invokeDeath.visible = sauce.getSetting('showInvokeDeath');
	}

	if (sauce.getSetting('showDarkness') !== undefined) {
		gauges.necromancy.incantations.darkness.visible = sauce.getSetting('showDarkness');
	}

	if (sauce.getSetting('showThreads') !== undefined) {
		gauges.necromancy.incantations.threads.visible = sauce.getSetting('showThreads');
	}

	if (sauce.getSetting('showSplitSoul') !== undefined) {
		gauges.necromancy.incantations.splitSoul.visible = sauce.getSetting('showSplitSoul');
	}

	if (sauce.getSetting('showSouls') !== undefined) {
		gauges.necromancy.stacks.souls.visible = sauce.getSetting('showSouls');
	}

	if (sauce.getSetting('showNecrosis') !== undefined) {
		gauges.necromancy.stacks.necrosis.visible = sauce.getSetting('showNecrosis');
	}

	if (sauce.getSetting('showBloat') !== undefined) {
		gauges.necromancy.bloat.visible = sauce.getSetting('showBloat');
	}

	updateActiveOrientationFromLocalStorage();

	setInterval(function () {
		renderOverlay();
	}, 20);
}

function updateActiveOrientationFromLocalStorage() {
	// Retrieve selected orientation from localStorage
	let selectedOrientation = sauce.getSetting('selectedOrientation');

	if (!selectedOrientation) {
		selectedOrientation = 'reverse_split_orientation';
		sauce.updateSetting('selectedOrientation', 'reverse_split_orientation');
	}

	// Function to recursively update active_orientation in an object
	function updateActiveOrientation(obj) {
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
	}
	updateActiveOrientation(necromancy_gauge);
}

const version = '0.0.1';
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
	orientationReset: sauce.createSeperator(),
	orientationHeader: sauce.createHeading('h3', 'Incantation Placement'),
	orientationSelection: sauce.createDropdownSetting(
		'selectedOrientation',
		'Select how to group Incantations',
		sauce.getSetting('selectedOrientation') ?? 'reverse_split_orientation',
		[
			{ value: 'grouped_orientation', name: 'Grouped' },
			{ value: 'split_orientation', name: 'Split' },
			{ value: 'reverse_split_orientation', name: 'Reverse Split' },
		]
	),
	visibleReset: sauce.createSeperator(),
	visibleComponentsHeader: sauce.createHeading('h3', 'Visible Components'),
	visibleComponentsText: sauce.createText(
		'Select which components of the overlay you wish to see.'
	),
	visibleComponentsSmallText: sauce.createSmallText(
		'Give it a few seconds to update.'
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
	showBloat: sauce.createCheckboxSetting(
		'showBloat',
		'Show Bloat',
		sauce.getSetting('showBloat') ?? true
	),
};

settingsObject.orientationSelection.addEventListener('change', () => {
	updateActiveOrientationFromLocalStorage();
	console.log(gauges);
});

settingsObject.repositionOverlay.addEventListener('click', setOverlayPosition);

let updatingOverlayPosition = false;
async function setOverlayPosition() {
	updatingOverlayPosition = true;
	a1lib.once('alt1pressed', updateLocation);
	alt1.setTooltip(
		'Press Alt+1 to save position \n Screen tearing is temporary'
	);
	setTimeout(() => {
		alt1.clearTooltip();
	}, 3000);
	while (updatingOverlayPosition) {
		gauges.necromancy.position.x = a1lib.getMousePosition().x;
		gauges.necromancy.position.y = a1lib.getMousePosition().y;
		await new Promise((done) => setTimeout(done, 20));
	}
}

function updateLocation(e) {
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
	//check if we are running inside alt1 by checking if the alt1 global exists
	if (window.alt1) {
		//tell alt1 about the app
		//this makes alt1 show the add app button when running inside the embedded browser
		//also updates app settings if they are changed

		alt1.identifyAppUrl('./appconfig.json');
		Object.values(settingsObject).forEach((val) => {
			document.querySelector('#Settings .container').before(val);
		});
		document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
			checkbox.addEventListener('click', () => {
				location.reload();
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
