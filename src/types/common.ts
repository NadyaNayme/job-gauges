export type Position = {
	x: number;
	y: number;
};

export type Orientation = {
	active_orientation: Position;
	grouped: Position;
	split: Position;
	reverse_split: Position;
};

export type UltimateAbility = {
	visible: boolean;
	active: boolean;
	time: number;
	onCooldown: boolean;
	cooldown: number;
	position?: Orientation;
};

export type ActiveBuff = {
	visible: boolean;
	time: number;
	active: boolean;
	position?: Orientation;
};

export type EnemyDebuff = {
	visible: boolean;
	time: number;
	active?: boolean;
	position?: Orientation;
}
