import { MeleeGauge } from '../types';

export const melee_gauge: MeleeGauge = {
	inCombat: false,
	position: {
		x: 0,
		y: 0,
	},
	berserk: {
		visible: false,
		active: false,
		time: 0,
		onCooldown: false,
		cooldown: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 0,
				y: 0,
			},
			split: {
				x: 0,
				y: 0,
			},
			reverse_split: {
				x: 0,
				y: 0,
			},
		},
	},
};
