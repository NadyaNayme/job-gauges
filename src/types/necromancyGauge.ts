import {
    EnemyDebuff,
    Position,
    Ability,
    TimedPlayerBuff,
    StackingPlayerBuff,
    HasAlarm,
} from './common';

export type StackingAbilities = {
    souls: StackingPlayerBuff & HasAlarm;
    necrosis: StackingPlayerBuff & HasAlarm;
    pre95Souls: boolean;
    useColoredNecrosis: boolean;
    duplicateNecrosisRow: boolean;
};

type Conjures = {
    active: boolean;
    isActiveOverlay: boolean;
    offset: Position;
    skeleton: Omit<TimedPlayerBuff, 'offset'>;
    zombie: Omit<TimedPlayerBuff, 'offset'>;
    ghost: Omit<TimedPlayerBuff, 'offset'>;
    phantom: Omit<TimedPlayerBuff, 'offset'>;
};

type Incantations = {
    active: boolean[];
    isActiveOverlay: boolean;
    invokeDeath: EnemyDebuff;
    darkness: TimedPlayerBuff;
    splitSoul: Ability;
    threads: Ability;
};

export type NecromancyGauge = {
    isInCombat: boolean;
    position: Position;
    stacks: StackingAbilities;
    conjures: Conjures;
    incantations: Incantations;
    livingDeath: Ability;
    bloat: EnemyDebuff;
};
