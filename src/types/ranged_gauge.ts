import { Position, Ability } from './common';

export type RangedGauge = {
	isInCombat: boolean;
	position: Position;
	deathsSwiftness: Ability;
};
