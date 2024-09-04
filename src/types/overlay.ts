import { NecromancyGauge } from './necromancyGauge';
import { MagicGauge } from './magicGauge';
import { RangedGauge } from './rangedGauge';
import { MeleeGauge } from './meleeGauge';

export type Overlay = {
	isInCombat: boolean;
	checkCombatStatus: boolean;
	hasBeenOutOfCombat: number;
	scaleFactor: number;
	combatStyle: number;
	automaticSwapping: boolean;
	necromancy: NecromancyGauge;
	magic: MagicGauge;
	ranged: RangedGauge;
	melee: MeleeGauge;
};
