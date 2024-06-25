const necromancy_gauge = {
	inCombat: false,
	position: {
		x: 50,
		y: 50,
	},
	stacks: {
		souls: {
			visible: true,
			count: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: -10,
					y: 50,
				},
				split_orientation: {
					x: -10,
					y: 50,
				},
				reverse_split_orientation: {
					x: -10,
					y: 50,
				},
			},
		},
		necrosis: {
			visible: true,
			count: 0,
			dupeRow: false,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: -10,
					y: 98,
				},
				split_orientation: {
					x: -10,
					y: 98,
				},
				reverse_split_orientation: {
					x: -10,
					y: 98,
				},
			},
		},
	},
	conjures: {
		active: false,
		visible: true,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped_orientation: {
				x: -12,
				y: 5,
			},
			split_orientation: {
				x: 15,
				y: 5,
			},
			reverse_split_orientation: {
				x: -12,
				y: 5,
			},
		},
		skeleton: {
			visible: true,
			time: 0,
			active: false,
		},
		zombie: {
			visible: true,
			time: 0,
			active: false,
		},
		ghost: {
			visible: true,
			time: 0,
			active: false,
		},
		fourth: {
			visible: true,
			time: 0,
			active: false,
		},
	},
	incantations: {
		active: [0, 0, 1, 1],
		visible: true,
		invokeDeath: {
			visible: true,
			active: false,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: 72,
					y: 5,
				},
				split_orientation: {
					x: -9,
					y: 0,
				},
				reverse_split_orientation: {
					x: 29,
					y: 0,
				},
			},
		},
		darkness: {
			visible: true,
			time: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: 72,
					y: 24,
				},
				split_orientation: {
					x: -9,
					y: 24,
				},
				reverse_split_orientation: {
					x: 29,
					y: 24,
				},
			},
		},
		splitSoul: {
			visible: true,
			time: 0,
			activeCooldown: false,
			cooldown: 41,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: 50,
					y: 24,
				},
				split_orientation: {
					x: 49,
					y: 24,
				},
				reverse_split_orientation: {
					x: 28,
					y: 24,
				},
			},
		},
		threads: {
			visible: true,
			time: 0,
			activeCooldown: false,
			cooldown: 40,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: 50,
					y: 0,
				},
				split_orientation: {
					x: 49,
					y: 0,
				},
				reverse_split_orientation: {
					x: 28,
					y: 0,
				},
			},
		},
	},
	livingDeath: {
		visiblie: true,
		active: false,
		time: 0,
		cooldown: 60,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped_orientation: {
				x: 30,
				y: 5,
			},
			split_orientation: {
				x: 60,
				y: 5,
			},
			reverse_split_orientation: {
				x: 81,
				y: 5,
			},
		},
	},
	bloat: {
		visible: true,
		time: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped_orientation: {
				x: -10,
				y: 74,
			},
			split_orientation: {
				x: -10,
				y: 74,
			},
			reverse_split_orientation: {
				x: -10,
				y: 74,
			},
		},
	},
};

exports.necromancy_gauge = necromancy_gauge;
