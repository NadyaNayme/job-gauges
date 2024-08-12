import { Orientation, UltimateAbility } from './common';

export type RangedGauge = {
	inCombat: boolean;
	position: {
		x: number;
		y: number;
	};
	deathsSwiftness: UltimateAbility;
};
