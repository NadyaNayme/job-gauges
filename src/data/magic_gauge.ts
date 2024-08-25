import { MagicGauge } from '../types';

export const magic_gauge: MagicGauge = {
	isInCombat: false,
	position: {
		x: 50,
		y: 50,
	},
	spells: {
		isActiveOverlay: true,
		activeSpell: 0,
		bloodTithe: {
			name: 'Blood_Tithe',
			isActiveOverlay: true,
			active: true,
			stacks: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 35,
					y: 60,
				},
				split: {
					x: 35,
					y: 60,
				},
				reverse_split: {
					x: 35,
					y: 60,
				},
			},
		},
		glacialEmbrace: {
			name: 'Glacial_Embrace',
			isActiveOverlay: true,
			active: true,
			stacks: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 35,
					y: 60,
				},
				split: {
					x: 35,
					y: 60,
				},
				reverse_split: {
					x: 35,
					y: 60,
				},
			},
		},
	},
	instability: {
		isActiveOverlay: true,
		active: true,
		time: 0,
		isOnCooldown: false,
		cooldownDuration: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 30,
				y: 5,
			},
			split: {
				x: 30,
				y: 5,
			},
			reverse_split: {
				x: 30,
				y: 5,
			},
		},
	},
	tsunami: {
		isActiveOverlay: true,
		active: true,
		time: 0,
		isOnCooldown: false,
		cooldownDuration: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 30,
				y: 55,
			},
			split: {
				x: 60,
				y: 55,
			},
			reverse_split: {
				x: 81,
				y: 55,
			},
		},
	},
	sunshine: {
		isActiveOverlay: true,
		active: true,
		time: 0,
		isOnCooldown: false,
		cooldownDuration: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 30,
				y: 5,
			},
			split: {
				x: 60,
				y: 5,
			},
			reverse_split: {
				x: 81,
				y: 5,
			},
		},
	},
};
