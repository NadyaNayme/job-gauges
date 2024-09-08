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
	balanceByForce: false,
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
				x: 10,
				y: 45,
			},
			split: {
				x: 10,
				y: 45,
			},
			reverse_split: {
				x: 10,
				y: 45,
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
				y: 5,
			},
			split: {
				x: 35,
				y: 5,
			},
			reverse_split: {
				x: 35,
				y: 5,
			},
		},
	},
	splitSoul: {
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
				x: -3,
				y: 5,
			},
			split: {
				x: -3,
				y: 5,
			},
			reverse_split: {
				x: -3,
				y: 5,
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
				x: 55,
				y: 45,
			},
			split: {
				x: 55,
				y: 45,
			},
			reverse_split: {
				x: 55,
				y: 45,
			},
		},
	},
};
