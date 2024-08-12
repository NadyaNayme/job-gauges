import { ActiveBuff, EnemyDebuff, Orientation, UltimateAbility } from './common';

type Stack = {
	visible: boolean;
	count: number;
	position: Orientation;
	dupeRow?: boolean;
};

type Stacks = {
	souls: Stack;
	necrosis: Stack;
};

type Conjures = {
	active: boolean;
	visible: boolean;
	position: Orientation;
	skeleton: ActiveBuff;
	zombie: ActiveBuff;
	ghost: ActiveBuff;
	fourth: ActiveBuff;
};

type PassiveIncantation = {
	visible: boolean;
	position: Orientation;
	active?: boolean;
	time?: number;
};

type ActiveIncantation = {
	visible: boolean;
	time: number;
	activeCooldown: boolean;
	cooldown: number;
	position: Orientation;
};

type Incantations = {
	active: number[];
	visible: boolean;
	invokeDeath: PassiveIncantation;
	darkness: PassiveIncantation;
	splitSoul: ActiveIncantation;
	threads: ActiveIncantation;
};

type Bloat = EnemyDebuff;

export type NecromancyGauge = {
	inCombat: boolean;
	position: {
		x: number;
		y: number;
	};
	stacks: Stacks;
	conjures: Conjures;
	incantations: Incantations;
	livingDeath: UltimateAbility;
	bloat: Bloat;
};
