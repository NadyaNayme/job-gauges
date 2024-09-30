import { Ability, Position } from '../../types/common';
import * as a1lib from 'alt1';
import { adjustPositionForScale, white } from '../utility';
import { ImageOverlay, OverlaysManager } from '../../a1sauce/Overlays';
import { CombatStyle } from '../../types';

export type AbilityCooldown = {
    positionX: number;
    positionY: number;
    cooldownWhenGreater: number;
    cooldownDefault: number;
};

export type Abilities =
    | 'Sunshine'
    | 'Instability'
    | 'Tsunami'
    | 'DeathsSwiftness'
    | 'RangedSplitSoul'
    | 'CrystalRain'
    | 'Soulfire'
    | 'LivingDeath'
    | 'SplitSoul'
    | 'Darkness'
    | 'Invoke_Death'
    | 'Threads';
export type AbilityCooldownText = `${Abilities}_Cooldown_Text`;

const defaultCooldowns: AbilityCooldown = {
    cooldownDefault: 29,
    cooldownWhenGreater: 29,
    positionX: 26,
    positionY: 26,
} as const;

export const AbilityCooldowns = new Map<Abilities, AbilityCooldown>([
    ['Sunshine', { ...defaultCooldowns, cooldownWhenGreater: 22 }],
    ['DeathsSwiftness', { ...defaultCooldowns, cooldownWhenGreater: 22 }],
    ['Instability', { ...defaultCooldowns, positionY: 30 }],
    ['Tsunami', { ...defaultCooldowns }],
    ['CrystalRain', { ...defaultCooldowns }],
    ['Soulfire', { ...defaultCooldowns }],
    ['LivingDeath', { ...defaultCooldowns }],
]);

/**
 * Keep track of which abilities are currently doing overlay countdowns for cooldowns.
 * This helps prevent flickering when this function is relentlessly called over and over
 * by the renderer.
 */
const AbilityCooldown = new Map<Abilities, boolean>();

/**
 * Handles ticking down an abilities cooldown and ending it when it's over or active.
 * @param abilityData Metadata about the ability to get positioning and ending cooldowns.
 * @param abilityName Strongly typed name for consistent overlay updating.
 * @param greater If the ability is the greater variant
 * @param updateStateCallback Have the caller set state cooldown.
 */
export function startAbilityCooldown(
    abilityData: { scaleFactor: number; position: Position; ability: Ability },
    abilityName: Abilities,
    greater: boolean,
    updateStateCallback: () => unknown
) {
    const { scaleFactor, position, ability } = abilityData;

    if (!ability.isActiveOverlay) {
        return;
    }

    const isAbilityOnCooldown = AbilityCooldown.get(abilityName);

    // If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
    if (ability.active) {
        AbilityCooldown.set(abilityName, false);
        updateStateCallback();
        return endAbilityCooldown(abilityData.ability, abilityName);
    }

    // If there's already a timer active... no need to do anything else.
    if (isAbilityOnCooldown) {
        return;
    }

    // We're going to begin the cooldown, so set to true to prevent any extra operations for this ability.
    AbilityCooldown.set(abilityName, true);

    // Otherwise cooldown has started and we can clear the Active text
    OverlaysManager.forceClearOverlay(`${abilityName}_Text`);
    alt1.overLaySetGroupZIndex(`${abilityName}_Cooldown_Text`, 1);

    const cooldowns = AbilityCooldowns.get(abilityName);

    if (!cooldowns) {
        throw Error(`Missing cooldown definitions for ability: ${abilityName}`);
    }

    const { positionX, positionY } = cooldowns;

    let cooldown = greater
        ? cooldowns.cooldownWhenGreater
        : cooldowns.cooldownDefault;

    const timer = setInterval(() => {
        if (ability.active || cooldown <= 0) {
            clearInterval(timer);
            AbilityCooldown.set(abilityName, false);
            updateStateCallback();
            return OverlaysManager.forceClearOverlay(`${abilityName}_Cooldown_Text`)
        }

        cooldown -= 1;

        const cooldownText: AbilityCooldownText = `${abilityName}_Cooldown_Text`;
        OverlaysManager.forceClearOverlay(cooldownText);

        const xPositionAdjusted =
            position.x +
            (ability.offset.x) +
            positionX;
        const yPositionAdjusted =
            position.y +
            (ability.offset.y) +
            positionY;

        alt1.overLayTextEx(
            `${cooldown}`,
            white,
            Math.ceil(14 * (scaleFactor * 0.75)),
            adjustPositionForScale(xPositionAdjusted, scaleFactor),
            adjustPositionForScale(yPositionAdjusted, scaleFactor),
            3000,
            '',
            true,
            true,
        );

        alt1.overLayRefreshGroup(cooldownText);
    }, 1000);
}

/**
 * Clear the abilities cooldown and reset state.
 * @param ability The ability to update.
 * @param name Strongly typed name to clear overlay.
 */
export function endAbilityCooldown(ability: Ability, name: Abilities) {
    OverlaysManager.forceClearOverlay(`${name}_Cooldown_Text`);
}

/**
 * Handle drawing abilities that have an active or inactive state.
 * @param abilityData Required info to draw the ability image.
 * @param name Strongly typed name to draw to image group.
 * @param active If the ability is currently active.
 */
export function handleAbilityActiveState(
    abilityData: {
        position: Position;
        ability: Ability;
        scaleFactor: number;
        images: {
            active: ImageData;
            inactive: ImageData;
        };
    },
    name: Abilities,
    active: boolean,
) {
    const { position, ability, scaleFactor, images } = abilityData;
    const { x, y } = ability.offset;
    const image = active ? images.active : images.inactive;
    const xPosition = position.x + x;
    const yPosition = position.y + y;

    let category;
    switch (name) {
        case 'LivingDeath':
        case 'SplitSoul':
        case 'Threads':
        case 'Invoke_Death':
        case 'Darkness':
            category = CombatStyle.necromancy;
            break;
        case 'Sunshine':
        case 'Instability':
        case 'Tsunami':
        case 'Soulfire':
            category = CombatStyle.magic;
            break;
        case 'DeathsSwiftness':
        case 'CrystalRain':
        case 'RangedSplitSoul':
            category = CombatStyle.ranged;
            break;
    }

    const abilityImageOverlay: ImageOverlay = {
        name: name,
        active: true,
        position: {
                x: adjustPositionForScale(xPosition, scaleFactor),
                y: adjustPositionForScale(yPosition, scaleFactor),
            },
        duration: 30000,
        image: a1lib.encodeImageString(image.toDrawableData()),
        width: image.width,
        category: category,
    };

    OverlaysManager.updateOverlay(abilityImageOverlay);
}

/**
 * Clear an abilities cooldown text and normal text.
 * @param ability Strongly typed name of the ability to clear.
 */
export function clearAbilityOverlays(ability: Abilities): void {
    OverlaysManager.forceClearOverlay(`${ability}`);
    OverlaysManager.forceClearOverlay(`${ability}_Text`);
    OverlaysManager.forceClearOverlay(`${ability}_Cooldown_Text`);
}
