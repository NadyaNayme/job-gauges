interface HasOrientation {
	position?: Orientation
}

interface HasOverlay {
	isActiveOverlay: boolean;
}

interface HasTime {
	time: number;
}

interface HasStacks {
	stacks: number;
}

interface HasActiveState {
	active: boolean;
}

interface HasCooldown {
	isOnCooldown: boolean;
	cooldownDuration: number;
}

export interface HasName {
	name: string;
}

export interface HasAlarm {
	alarm: {
		isActive: boolean,
		isLooping: boolean,
		volume: number,
		sound: string,
		threshold: number,
	}
}

export type Position = {
	x: number;
	y: number;
};

/**
 * Necromancy Gauge has multiple defualt Orientations that serves to override the position for most of its components
 * A mistake I hope not to repeat with the other combat styles.
 */
export type Orientation = {
	active_orientation: Position;
	grouped: Position;
	split: Position;
	reverse_split: Position;
};

export type Ability = HasOverlay & HasOrientation & HasCooldown & HasTime & HasActiveState;

/**
 * A PlayerBuff is the base class for the types of buffs a player can have. It should not be used on its own and a subtype (TimedPlayerBuff, StackingPLayerBuff, StackingTimedPlayerBuff) should be used instead.
 */
export type PlayerBuff = HasOverlay & HasOrientation & HasActiveState;

/**
 * A TimedPlayerBuff is an overlay that tracks a buff which has a duration of time that it lasts for. The Remaining Duration of the buff is displayed over the buff's icon.
 */
export type TimedPlayerBuff = PlayerBuff & HasTime & HasName;

/**
 * A StackingPlayerBuff is an overlay that tracks a buff which does not have a duration but instead tracks the number of stacks the buff has. e.g. Necrosis Stacks, Residual Souls, and Perfect Equilibrium stacks.
 */
export type StackingPlayerBuff = PlayerBuff & HasStacks & HasName;

/**
 * A StackingTimedPlayerBuff is an overlay which tracks a buff that has both a Duration of Time and a Stack Count. eg. Incense Sticks
 */
export type StackingTimedPlayerBuff = PlayerBuff & HasTime & HasStacks & HasName;

/**
 *  A PlayerDebuff is an overlay that tracks debuffs from the player's debuffs bar. This is primarily used to track cooldowns of Weapon Special Attacks - as the cooldown appears as a debuff on the player.
 */

export type PlayerDebuff = HasOverlay & HasOrientation & HasTime & HasActiveState;

/**
 * An EnemyDebuff is an overlay that tracks debuffs from the enemy nameplate. Enemy nameplates do not show the duration a debuff lasts for - the debuff duration is hard coded and tracked by Job Gauges.
 */
export type EnemyDebuff = HasOverlay & HasOrientation & HasTime & HasActiveState;
