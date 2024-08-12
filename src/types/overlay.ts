import { NecromancyGauge } from './necromancy_gauge';
import { MagicGauge } from './magic_gauge';
import { RangedGauge } from './ranged_gauge';
import { MeleeGauge } from './melee_gauge';

export type Overlay = {
	inCombat: boolean;
	checkCombatStatus: boolean;
	necromancy: NecromancyGauge;
	magic: MagicGauge;
	ranged: RangedGauge;
	melee: MeleeGauge;
};
