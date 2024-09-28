import { Ability, Position } from '../../types/common';
import * as a1lib from 'alt1';
import { adjustPositionForScale, forceClearOverlay, white } from '../utility';

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
    forceClearOverlay(`${abilityName}_Text`);
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
            return forceClearOverlay(`${abilityName}_Cooldown_Text`)
        }

        cooldown -= 1;

        const cooldownText: AbilityCooldownText = `${abilityName}_Cooldown_Text`;
        forceClearOverlay(cooldownText);

        const xPositionAdjusted =
            position.x +
            (ability.position?.active_orientation.x ?? 0) +
            positionX;
        const yPositionAdjusted =
            position.y +
            (ability.position?.active_orientation.y ?? 0) +
            positionY;

        alt1.overLayTextEx(
            `${cooldown}`,
            white,
            14,
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
    forceClearOverlay(`${name}_Cooldown_Text`);
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
    const image = active ? images.active : images.inactive;
    const xPosition = position.x + ability.position.active_orientation.x;
    const yPosition = position.y + ability.position.active_orientation.y;

    alt1.overLaySetGroup(name);
    alt1.overLayImage(
        adjustPositionForScale(xPosition, scaleFactor),
        adjustPositionForScale(yPosition, scaleFactor),
        a1lib.encodeImageString(image.toDrawableData()),
        image.width,
        1000,
    );
}

/**
 * Clear an abilities cooldown text and normal text.
 * @param ability Strongly typed name of the ability to clear.
 */
export function clearAbilityOverlays(ability: Abilities): void {
    forceClearOverlay(`${ability}_Text`);
    forceClearOverlay(`${ability}_Cooldown_Text`);
    alt1.overLayClearGroup(ability);
}
