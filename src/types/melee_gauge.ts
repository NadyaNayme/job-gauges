import { Orientation, UltimateAbility } from './common';

export type MeleeGauge = {
	inCombat: boolean;
	position: {
		x: number;
		y: number;
	};
	berserk: UltimateAbility;
};
