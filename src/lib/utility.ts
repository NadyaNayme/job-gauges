import * as a1lib from 'alt1';
import { getSetting } from '../a1sauce/Settings/Storage';
import { timeout } from '../a1sauce/Utils/timeout';

import PouchDB from 'pouchdb';
import { appName } from '../data/constants';
import { Abilities } from './util/ability-helpers';
import { store } from '../state';
import { NecromancyGaugeSlice } from '../state/gauge-data/necromancy-gauge.state';
import { MagicGaugeSlice } from '../state/gauge-data/magic-gauge.state';
import { RangedGaugeSlice } from '../state/gauge-data/ranged-gauge.state';
import { GaugeDataSlice } from '../state/gauge-data/gauge-data.state';
import { CombatStyle } from '../types';
import { OverlaysManager } from '../a1sauce/Overlays';

const db = new PouchDB(appName);

export const white = a1lib.mixColor(255, 255, 255);
export const red = a1lib.mixColor(255, 0, 0);
export const green = a1lib.mixColor(0, 255, 0);
export const blue = a1lib.mixColor(0, 0, 255);
export const black = a1lib.mixColor(1, 1, 1);

/*
 * Should only return null if a typo is made as elements
 * that are fetched are created by A1 Sauce
 */
export function getByID(id: string): HTMLElement | null {
    return document.getElementById(id)!;
}

export const helperItems = {
    Output: getByID('output'),
    settings: getByID('Settings'),
};

export async function setOverlayPosition(all: boolean) {
    store.dispatch(GaugeDataSlice.actions.updateState({ updatingOverlayPosition: true }));

    a1lib.once('alt1pressed', updateLocation);

    alt1.setTooltip(
        'Press Primary Keybind to save position (default keybind is alt+1)',
    );

    setTimeout(() => {
        alt1.clearTooltip();
    }, 3000);

    while (true) {
        const { gaugeData } = store.getState();

        if (!gaugeData.updatingOverlayPosition) {
            break;
        }

        await timeout(500);

        OverlaysManager.freezeOverlays();
        resizeGaugesWithMousePosition(all);
        OverlaysManager.continueOverlays();
    }
}

export function updateLocation(): void {
    store.dispatch(GaugeDataSlice.actions.updateState({ updatingOverlayPosition: false }));
    alt1.clearTooltip();
}

export type AbilitiesOverlayText = `${Abilities}_${'Text' | 'Cooldown_Text'}`;

export function adjustPositionForScale(
    position: number,
    scaleFactor: number,
): number {
    return parseInt(roundedToFixed(position * scaleFactor, 1), 10);
}

export function adjustPositionWithoutScale(
    position: number,
    scaleFactor: number,
): number {
    return parseInt(roundedToFixed(position * (1 / scaleFactor), 1), 10);
}

export function resizeGaugesWithMousePosition(all: boolean) {
    const position = a1lib.getMousePosition();

    if (!position) {
        return;
    }

    const { gaugeData } = store.getState();
    const { x, y } = position;

    const adjustedXPosition = adjustPositionWithoutScale(x, gaugeData.scaleFactor);
    const adjustedYPosition = adjustPositionWithoutScale(y, gaugeData.scaleFactor);

    if (all) {
        store.dispatch(
            MagicGaugeSlice.actions.updatePosition({
                x: adjustedXPosition,
                y: adjustedYPosition,
            }),
        );
        store.dispatch(
            RangedGaugeSlice.actions.updatePosition({
                x: adjustedXPosition,
                y: adjustedYPosition,
            }),
        );
        store.dispatch(
            NecromancyGaugeSlice.actions.updatePosition({
                x: adjustedXPosition,
                y: adjustedYPosition,
            }),
        );
        return;
    }

    switch (gaugeData.combatStyle) {
        case CombatStyle.magic:
            store.dispatch(
                MagicGaugeSlice.actions.updatePosition({
                    x: adjustedXPosition,
                    y: adjustedYPosition,
                }),
            );
            break;
        case CombatStyle.ranged:
            store.dispatch(
                RangedGaugeSlice.actions.updatePosition({
                    x: adjustedXPosition,
                    y: adjustedYPosition,
                }),
            );
            break;
        case CombatStyle.necromancy:
            store.dispatch(
                NecromancyGaugeSlice.actions.updatePosition({
                    x: adjustedXPosition,
                    y: adjustedYPosition,
                }),
            );
            break;
    }
}

export function roundedToFixed(input: number, digits: number): string {
    const rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
}

export function handleResizingImages(
    images: Record<string, ImageData | unknown>,
    scaleFactor: number,
) {
    for (const key of Object.keys(images)) {
        if (images[key] instanceof ImageData) {
            const resize = resizeImageData(images[key], scaleFactor);

            if (resize) {
                images[key] = resize;
            }
        }
    }
}

export function resizeImageData(imageData: ImageData, scaleFactor: number) {
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
    if (tempContext === null) return;
    tempContext.putImageData(imageData, 0, 0);

    // Draw the temporary canvas onto the new canvas with the desired scale
    if (context === null) return;
    context.drawImage(
        tempCanvas,
        0,
        0,
        imageData.width,
        imageData.height,
        0,
        0,
        newWidth,
        newHeight,
    );

    // Extract the new image data from the resized canvas
    return context.getImageData(0, 0, newWidth, newHeight);
}

async function createAlarmElement(alarmId: string) {
    const alertElement: HTMLAudioElement = new Audio();
    const volume = Number(getSetting(alarmId + 'Volume')) / 100;

    alertElement.id = alarmId;
    alertElement.volume = volume;

    await loadAlarm(alertElement);

    document.body.appendChild(alertElement);

    return alertElement;
}

const AlarmHasPlayed = new Map();

export async function alarmLoop() {
    const necrosisAlarm = await createAlarmElement('alarmNecrosis');
    const soulsAlarm = await createAlarmElement('alarmSouls');

    while (true) {
        // Arbitrary wait time, this number holds no meaning besides how often we want to check to play an alarm.
        await timeout(200);

        const { necromancy } = store.getState();
        const { stacks: { necrosis, souls } } = necromancy;

        const shouldNecrosisAlarmPlay = (necrosis.alarm.isLooping || !AlarmHasPlayed.has('alarmNecrosis')) && necrosis.alarm.isActive;

        if (shouldNecrosisAlarmPlay && necrosis.stacks >= necrosis.alarm.threshold) {
            AlarmHasPlayed.set('alarmNecrosis', true);
            necrosisAlarm.play();
        } else if (necrosis.stacks < necrosis.alarm.threshold && AlarmHasPlayed.has('alarmNecrosis')) {
            AlarmHasPlayed.delete('alarmNecrosis');
            necrosisAlarm.pause();
            necrosisAlarm.currentTime = 0;
        }


        const shouldSoulsAlarmPlay = (souls.alarm.isLooping || !AlarmHasPlayed.has('alarmSouls')) && souls.alarm.isActive;

        if (shouldSoulsAlarmPlay && souls.stacks >= souls.alarm.threshold) {
            AlarmHasPlayed.set('alarmSouls', true);
            soulsAlarm.play();
        } else if (souls.stacks < souls.alarm.threshold && AlarmHasPlayed.has('alarmSouls')) {
            AlarmHasPlayed.delete('alarmSouls');
            soulsAlarm.pause();
            soulsAlarm.currentTime = 0;
        }
    }
}

async function loadAlarm(alarm: HTMLAudioElement) {
    const alarmSrc = getSetting(alarm.id + 'AlertSound');

    if (!alarmSrc.startsWith('custom:') && !alarmSrc.startsWith('Custom:') && !alarmSrc.startsWith('data')) {
        alarm.src = getSetting(alarm.id + 'AlertSound');
        return alarm.load();
    }

    try {
        const customAudio = alarmSrc.substring(7);
        const doc = await db.get(customAudio, { attachments: true });
        // @ts-ignore
        alarm.src = `data:${doc._attachments?.filename.content_type};base64,${doc._attachments?.filename.data}`;
        alarm.load();
    } catch (e) {
        console.error(`Encountered an error loading custom audio source: ${JSON.stringify(e)}`);
    }
}
