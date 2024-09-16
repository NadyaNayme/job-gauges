import {
    EnemyDebuff,
    Position,
    Orientation,
    Ability,
    TimedPlayerBuff,
    StackingPlayerBuff,
    HasAlarm,
} from './common';

type StackingAbilities = {
    souls: StackingPlayerBuff & HasAlarm;
    necrosis: StackingPlayerBuff & HasAlarm;
    pre95Souls: boolean;
    useColoredNecrosis: boolean;
    duplicateNecrosisRow: boolean;
};

type Conjures = {
    active: boolean;
    isActiveOverlay: boolean;
    position: Orientation;
    skeleton: Omit<TimedPlayerBuff, 'position'>;
    zombie: Omit<TimedPlayerBuff, 'position'>;
    ghost: Omit<TimedPlayerBuff, 'position'>;
    phantom: Omit<TimedPlayerBuff, 'position'>;
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
