import { Position, Ability } from './common';

export type MeleeGauge = {
    isInCombat: boolean;
    position: Position;
    berserk: Ability;
};
