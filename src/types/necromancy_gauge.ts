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
	duplicateNecrosisRow: boolean;
};

type Conjures = {
	active: boolean;
	isActiveOverlay: boolean;
	position: Orientation;
	skeleton: TimedPlayerBuff;
	zombie: TimedPlayerBuff;
	ghost: TimedPlayerBuff;
	fourth: TimedPlayerBuff;
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
