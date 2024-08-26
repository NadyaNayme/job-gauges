import * as a1lib from 'alt1';
import { Overlay } from '../types';
import { getSetting, updateSetting } from '../a1sauce/Settings/Storage';
import { timeout } from '../a1sauce/Utils/timeout';

import PouchDB from 'pouchdb';
import { appName } from '../data/constants';

const db = new PouchDB(appName);

export const white = a1lib.mixColor(255, 255, 255);
export const red = a1lib.mixColor(255, 0, 0);
export const green = a1lib.mixColor(0, 255, 0);
export const blue = a1lib.mixColor(0, 0, 255);
export const black = a1lib.mixColor(1, 1, 1);

export function getByID(id: string): HTMLElement {
	return document.getElementById(id);
}

export const helperItems = {
	Output: getByID('output'),
	settings: getByID('Settings'),
};

let updatingOverlayPosition = false;
export async function setOverlayPosition(gauges: Overlay, utility) {
	updatingOverlayPosition = true;
	a1lib.once('alt1pressed', updateLocation);
	alt1.setTooltip(
		'Press Primary Keybind to save position (default keybind is alt+1)'
	);
	setTimeout(() => {
		alt1.clearTooltip();
	}, 3000);
	while (updatingOverlayPosition) {
		await timeout(1000);
		utility.freezeOverlays();
		//TODO: Per-gauge repositioning will be needed here as well
		utility.resizeGaugesWithMousePosition(gauges);
		utility.continueOverlays();
	}
	updateSetting('overlayPosition', {
		x: gauges.necromancy.position.x,
		y: gauges.necromancy.position.y,
	});
}

export function updateLocation(): void {
	updatingOverlayPosition = false;
	alt1.overLayClearGroup('overlayPositionHelper');
	alt1.overLayRefreshGroup('overlayPositionHelper');
	alt1.clearTooltip();
}

export function forceClearOverlay(overlay: string): void {
	alt1.overLaySetGroup(overlay);
	alt1.overLayFreezeGroup(overlay);
	alt1.overLayClearGroup(overlay);
	alt1.overLayRefreshGroup(overlay);
}

// TODO: Overlays need to be able to add/remove themselves from this list
const overlays = [
	'Bloat',
	'Undead_Army',
	'Invoke_Death',
	'Darkness',
	'Threads',
	'SplitSoul',
	'LivingDeath',
	'Necrosis',
	'Necrosis_Row2',
	'Souls',
	'Sunshine',
	'Instability',
	'Tsunami',
];

export function freezeOverlays(): void {
	overlays.forEach((overlay) => {
		alt1.overLayFreezeGroup(overlay);
		alt1.overLayClearGroup(overlay);
		alt1.overLayRefreshGroup(overlay);
	});
}

export function continueOverlays(): void {
	overlays.forEach((overlay) => {
		alt1.overLayContinueGroup(overlay);
	});
}

export function freezeAndContinueOverlays(): void {
	freezeOverlays();
	continueOverlays();
}

export function forceClearOverlays(): void {
	overlays.forEach((overlay) => {
		alt1.overLaySetGroup(overlay);
		alt1.overLayFreezeGroup(overlay);
		alt1.overLayClearGroup(overlay);
		alt1.overLayRefreshGroup(overlay);
		alt1.overLayContinueGroup(overlay);
		clearTextOverlays();
		console.log('Force cleared: ' + overlay);
	});
}

export function clearTextOverlays(): void {
	alt1.overLayClearGroup('Undead_Army_Text');
	alt1.overLayRefreshGroup('Undead_Army_Text');

	alt1.overLayClearGroup('LivingDeath_Text');
	alt1.overLayRefreshGroup('LivingDeath_Text');
	alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
	alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');

	alt1.overLayClearGroup('Sunshine_Text');
	alt1.overLayRefreshGroup('Sunshine_Text');
	alt1.overLayClearGroup('Sunshine_Cooldown_Text');
	alt1.overLayRefreshGroup('Sunshine_Cooldown_Text');

	alt1.overLayClearGroup('Instability_Text');
	alt1.overLayRefreshGroup('Instability_Text');
	alt1.overLayClearGroup('Instability_Cooldown_Text');
	alt1.overLayRefreshGroup('Instability_Cooldown_Text');

	alt1.overLayClearGroup('Tsunami_Text');
	alt1.overLayRefreshGroup('Tsunami_Text');
	alt1.overLayClearGroup('Tsunami_Cooldown_Text');
	alt1.overLayRefreshGroup('Tsunami_Cooldown_Text');

	alt1.overLayClearGroup('Spell_Text');
	alt1.overLayRefreshGroup('Spell_Text');
}

export function adjustPositionForScale(
	position: number,
	scaleFactor: number
): number {
	return parseInt(roundedToFixed(position * scaleFactor, 1), 10);
}

export function adjustPositionWithoutScale(
	position: number,
	scaleFactor: number
): number {
	return parseInt(roundedToFixed(position * (1 / scaleFactor), 1), 10);
}

// TODO: Use future overlays[] to iterate over active overlays
export function resizeGaugesWithMousePosition(gauges: Overlay) {
	gauges.necromancy.position.x = adjustPositionWithoutScale(
		a1lib.getMousePosition().x,
		gauges.scaleFactor
	);
	gauges.necromancy.position.y = adjustPositionWithoutScale(
		a1lib.getMousePosition().y,
		gauges.scaleFactor
	);
	gauges.magic.position.x = adjustPositionWithoutScale(
		a1lib.getMousePosition().x,
		gauges.scaleFactor
	);
	gauges.magic.position.y = adjustPositionWithoutScale(
		a1lib.getMousePosition().y,
		gauges.scaleFactor
	);
	gauges.ranged.position.x = adjustPositionWithoutScale(
		a1lib.getMousePosition().x,
		gauges.scaleFactor
	);
	gauges.ranged.position.y = adjustPositionWithoutScale(
		a1lib.getMousePosition().y,
		gauges.scaleFactor
	);
	gauges.melee.position.x = adjustPositionWithoutScale(
		a1lib.getMousePosition().x,
		gauges.scaleFactor
	);
	gauges.melee.position.y = adjustPositionWithoutScale(
		a1lib.getMousePosition().y,
		gauges.scaleFactor
	);
}

export function updateCoordinates(
	component,
	position: { x: number; y: number }
): void {
	component.activePosition.x = position.x;
	component.activePosition.y = position.y;
}

export function roundedToFixed(input: number, digits: number): string {
	const rounder = Math.pow(10, digits);
	return (Math.round(input * rounder) / rounder).toFixed(digits);
}

export async function resizeImageData(
	imageData: ImageData,
	scaleFactor: number
) {
	// Create a new canvas element
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	// Calculate the dimensions of the new canvas
	const newWidth = Math.round(imageData.width * scaleFactor);
	const newHeight = Math.round(imageData.height * scaleFactor);

	// Set the canvas dimensions
	canvas.width = newWidth;
	canvas.height = newHeight;

	// Create a temporary canvas to draw the original image data
	const tempCanvas = document.createElement('canvas');
	const tempContext = tempCanvas.getContext('2d');
	tempCanvas.width = imageData.width;
	tempCanvas.height = imageData.height;

	// Draw the original image data onto the temporary canvas
	tempContext.putImageData(imageData, 0, 0);

	// Draw the temporary canvas onto the new canvas with the desired scale
	context.drawImage(
		tempCanvas,
		0,
		0,
		imageData.width,
		imageData.height,
		0,
		0,
		newWidth,
		newHeight
	);

	// Extract the new image data from the resized canvas
	return context.getImageData(0, 0, newWidth, newHeight);
}

export async function playAlert(alarm: HTMLAudioElement) {
	console.log(`Playing ${alarm.id} - above alarm's threshold`);
	loadAlarm(alarm);
	alarm.loop = Boolean(getSetting(alarm.id + 'Loop'));
	alarm.volume = Number(getSetting(alarm.id + 'Volume')) / 100;
	await timeout(20).then(() => {
		alarm.pause();
		loadAlarm(alarm);
		alarm.play();
	});
	console.log(
		`Loop: ${alarm.loop} | Volume: ${alarm.volume} | Alert: ${alarm.src}`
	);
}

function loadAlarm(alarm: HTMLAudioElement) {
	if (alarm.src.startsWith('custom:') || alarm.src.startsWith('Custom:')) {
		let customAudio = getSetting(alarm.id + 'AlertSound').substring(7);
		db.get(customAudio, { attachments: true })
			.then((doc) => {
				console.log(doc._attachments.filename);
				// @ts-ignore
				alarm.src = `data:${doc._attachments.filename.content_type};base64,${doc._attachments.filename.data}`;
			})
			.then(() => {
				alarm.load();
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		alarm.src = getSetting(alarm.id + 'AlertSound');
		alarm.load();
	}
}

export function pauseAlert(alarm: HTMLAudioElement) {
	console.log(`Resetting ${alarm.id} - below alarm's threshold.`);
	alarm.volume = 0;
	alarm.play().then(() => {
		alarm.currentTime = 0;
		alarm.pause();
	});
}
