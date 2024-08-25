import { NecromancyGauge } from './necromancy_gauge';
import { MagicGauge } from './magic_gauge';
import { RangedGauge } from './ranged_gauge';
import { MeleeGauge } from './melee_gauge';

export type Overlay = {
	isInCombat: boolean;
	checkCombatStatus: boolean;
	scaleFactor: number;
	combatStyle: number;
	automaticSwapping: boolean;
	necromancy: NecromancyGauge;
	magic: MagicGauge;
	ranged: RangedGauge;
	melee: MeleeGauge;
};
