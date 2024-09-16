import { Position, Ability, StackingPlayerBuff } from './common';

export type Spells = {
    isActiveOverlay: boolean;
    activeSpell: number;
    bloodTithe: StackingPlayerBuff;
    glacialEmbrace: StackingPlayerBuff;
};

export type MagicGauge = {
    isInCombat: boolean;
    position: Position;
    spells: Spells;
    odeToDeceit: Ability;
    instability: Ability;
    tsunami: Ability;
    sunshine: Ability;
};
