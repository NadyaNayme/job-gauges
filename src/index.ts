import * as a1lib from 'alt1';
import * as TargetMob from 'alt1/targetmob';
import * as sauce from './a1sauce';

const { necromancy_overlay_data } = require('./data/necromancy_job_gauge');
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
	necromancy: necromancy_overlay_data,
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
	updateActiveOrientation(necromancy_overlay_data);
}


const settingsObject = {
	settingsHeader: sauce.createHeading('h2', 'Settings'),
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
	// visibleComponentsHeader: sauce.createHeading('h3', 'Visible Components'),
	// showConjures: sauce.createCheckboxSetting(
	// 	'showConjures',
	// 	'Show the Conjures component',
	// 	true
	// ),
	// showLivingDeath: sauce.createCheckboxSetting(
	// 	'showLivingDeath',
	// 	'Show Living Death component',
	// 	true
	// ),
	// showIncantations: sauce.createCheckboxSetting(
	// 	'showIncantations',
	// 	'Show the Incantations component',
	// 	true
	// ),
	// showSouls: sauce.createCheckboxSetting(
	// 	'showSouls',
	// 	'Show the Residual Souls component',
	// 	true
	// ),
	// showNecrosis: sauce.createCheckboxSetting(
	// 	'showNecrosis',
	// 	'Show the Necrosis component',
	// 	true
	// ),
	// showBloat: sauce.createCheckboxSetting(
	// 	'showBloat',
	// 	'Show the Bloat component',
	// 	true
	// ),
};

settingsObject.hideOutsideCombat.addEventListener('click', () => {
	location.reload();
});

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
			helperItems.settings.before(val);
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
