import { Position, Ability, StackingPlayerBuff } from './common';

export type Ammo = {
	isActiveOverlay: boolean;
	activeAmmo: string;
};

export type RangedGauge = {
	isInCombat: boolean;
	position: Position;
	balanceByForce: boolean;
	ammo: Ammo;
	crystalRain: Ability;
	deathsSwiftness: Ability;
	perfectEquilibrium: StackingPlayerBuff;
	splitSoul: Ability;
};
