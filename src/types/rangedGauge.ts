import { Position, Ability, StackingPlayerBuff } from './common';

export type Ammo = {
    isActiveOverlay: boolean;
    activeAmmo: string;
    offset: Position;
};

export type RangedGauge = {
    isInCombat: boolean;
    position: Position;
    balanceByForce: boolean;
    ammo: Ammo;
    crystalRain: Ability;
    deathsSwiftness: Ability;
    splitSoul: Ability;
    perfectEquilibrium: StackingPlayerBuff;
};
