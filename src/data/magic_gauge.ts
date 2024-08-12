import { MagicGauge } from '../types';

export const magic_gauge: MagicGauge = {
	isInCombat: false,
	position: {
		x: 0,
		y: 0,
	},
	sunshine: {
		isActiveOverlay: false,
		active: false,
		time: 0,
		isOnCooldown: false,
		cooldownDuration: 0,
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
