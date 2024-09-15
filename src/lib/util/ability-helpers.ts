import { Ability, Position } from '../../types/common';
import * as utility from '../utility';

export type AbilityCooldown = {
  positionX: number;
  positionY: number;
  cooldownWhenGreater: number;
  cooldownDefault: number;
};

export type Abilities = 'Sunshine' | 'Instability' | 'Tsunami' | 'DeathsSwiftness' | 'CrystalRain' | 'OdeToDeceit' | 'LivingDeath';
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
  ['OdeToDeceit', { ...defaultCooldowns }],
  ['LivingDeath', { ...defaultCooldowns }],
]);

export function updateAbility(ability: Ability, position: Position, duration: number, greater: boolean) {
  /**
   * Ignore this as empty. I should've committed MUCH earlier :)
   */
}

export async function startAbilityCooldown(abilityData: { scaleFactor: number, position: Position, ability: Ability }, abilityName: Abilities, greater: boolean) {
  const { scaleFactor, position, ability } = abilityData;

  if (!ability.isActiveOverlay) {
    return;
  }

  // If the buff is active we don't need to do a cooldown and can clear the Cooldown text and exit early
  if (ability.active) {
    return endAbilityCooldown(abilityData.ability, abilityName);
  }

  // Otherwise cooldown has started and we can clear the Active text
  utility.forceClearOverlay(`${abilityName}_Text`);
  alt1.overLaySetGroupZIndex(`${abilityName}_Cooldown_Text`, 1);

  const cooldowns = AbilityCooldowns.get(abilityName);

  if (!cooldowns) {
    throw Error(`Missing cooldown definitions for ability: ${abilityName}`);
  }

  const { positionX, positionY } = cooldowns;

  let cooldown = greater ? cooldowns.cooldownWhenGreater : cooldowns.cooldownDefault;

  const timer = setInterval(() => {
    if (ability.active || cooldown <= 0) {
      clearInterval(timer);
      return endAbilityCooldown(abilityData.ability, abilityName)
    }

    cooldown -= 1;
    const cooldownText: AbilityCooldownText = `${abilityName}_Cooldown_Text`;
    utility.forceClearOverlay(cooldownText);

    const xPositionAdjusted = position.x + (ability.position?.active_orientation.x ?? 0) + positionX;
    const yPositionAdjusted = position.y + (ability.position?.active_orientation.y ?? 0) + positionY;

    alt1.overLayTextEx(
      `${cooldown}`,
      utility.white,
      14,
      utility.adjustPositionForScale(xPositionAdjusted, scaleFactor),
      utility.adjustPositionForScale(yPositionAdjusted, scaleFactor),
      3000,
      '',
      true,
      true
    );

    alt1.overLayRefreshGroup(cooldownText);
  }, 1000);
}

export function endAbilityCooldown(ability: Ability, name: Abilities) {
  ability.isOnCooldown = false;
  ability.cooldownDuration = 0;
  utility.forceClearOverlay(`${name}_Cooldown_Text`);
}