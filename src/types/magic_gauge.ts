import { Orientation, UltimateAbility } from './common';

export type MagicGauge = {
	inCombat: boolean;
	position: {
		x: number;
		y: number;
	};
	sunshine: UltimateAbility;
};
