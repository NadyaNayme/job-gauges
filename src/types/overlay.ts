import { NecromancyGauge } from './necromancyGauge';
import { MagicGauge } from './magicGauge';
import { RangedGauge } from './rangedGauge';
import { MeleeGauge } from './meleeGauge';

export enum CombatStyle {
    melee = 1,
    ranged = 2,
    magic = 3,
    necromancy = 4,
}

export type Overlay = {
    isInCombat: boolean;
    checkCombatStatus: boolean;
    hasBeenOutOfCombat: number;
    scaleFactor: number;
    combatStyle: CombatStyle;
    automaticSwapping: boolean;
    necromancy: NecromancyGauge;
    magic: MagicGauge;
    ranged: RangedGauge;
    melee: MeleeGauge;
};
