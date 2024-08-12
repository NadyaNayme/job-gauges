import * as a1lib from 'alt1';


export let white = a1lib.mixColor(255, 255, 255);

export function getByID(id: string): HTMLElement {
	return document.getElementById(id);
}

export let helperItems = {
	Output: getByID('output'),
	settings: getByID('Settings'),
};

export function forceClearOverlay(overlay: string): void {
	alt1.overLaySetGroup(overlay);
	alt1.overLayFreezeGroup(overlay);
	alt1.overLayClearGroup(overlay);
	alt1.overLayRefreshGroup(overlay);
	console.log('Force cleared: ' + overlay);
}

let overlays = [
	'Bloat',
	'Undead_Army',
	'Invoke_Death',
	'Darkness',
	'Threads',
	'SplitSoul',
	'LivingDeath',
	'Necrosis',
	'Necrosis_Row2',
	'Souls'
]

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

export function clearTextOverlays(): void {
	alt1.overLaySetGroup('Undead_Army_Text');
	alt1.overLayClearGroup('Undead_Army_Text');
	alt1.overLayRefreshGroup('Undead_Army_Text');
	alt1.overLaySetGroup('LivingDeath_Text');
	alt1.overLayClearGroup('LivingDeath_Text');
	alt1.overLayRefreshGroup('LivingDeath_Text');
}

export function adjustPositionForScale(position: number, scaleFactor: number): number {
    return parseInt(roundedToFixed(position * scaleFactor, 1), 10);
}

export function adjustPositionWithoutScale(position: number, scaleFactor: number): number {
	return parseInt(roundedToFixed(position * ((1 / scaleFactor)), 1), 10);
}

export function updateCoordinates(component, position: {x: number, y: number}): void {
	component.activePosition.x = position.x;
	component.activePosition.y = position.y;
}

function roundedToFixed(input: number, digits: number) {
	var rounder = Math.pow(10, digits);
	return (Math.round(input * rounder) / rounder).toFixed(digits);
}

export async function resizeImageData(imageData: ImageData, scaleFactor: number) {
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
