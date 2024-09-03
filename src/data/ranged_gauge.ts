import { RangedGauge } from '../types';

export const ranged_gauge: RangedGauge = {
	isInCombat: false,
	position: {
		x: 50,
		y: 50,
	},
	ammo: {
		isActiveOverlay: true,
		activeAmmo: '',
	},
	deathsSwiftness: {
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
				x: 81,
				y: 5,
			},
			split: {
				x: 81,
				y: 5,
			},
			reverse_split: {
				x: 81,
				y: 5,
			},
		},
	},
	crystalRain: {
		isActiveOverlay: true,
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
	splitSoul: {
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
				x: 81,
				y: 55,
			},
			split: {
				x: 81,
				y: 55,
			},
			reverse_split: {
				x: 81,
				y: 55,
			},
		},
	},
	perfectEquilibrium: {
		name: 'Perfect_Equilibrium',
		isActiveOverlay: true,
		active: true,
		stacks: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 40,
				y: 11,
			},
			split: {
				x: 40,
				y: 11,
			},
			reverse_split: {
				x: 40,
				y: 11,
			},
		},
	},
};
