const necromancy_overlay_data = {
	inCombat: false,
	position: {
		x: 50,
		y: 50,
	},
	stacks: {
		souls: {
			visible: true,
			count: 0,
		},
		necrosis: {
			visible: true,
			count: 0,
			dupeRow: false,
		},
	},
	conjures: {
		active: false,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped_orientation: {
				x: 0,
				y: 0,
			},
			split_orientation: {
				x: 10,
				y: 0,
			},
			reverse_split_orientation: {
				x: -5,
				y: 0,
			}
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
		invokeDeath: {
			visible: true,
			active: false,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped_orientation: {
					x: 62,
					y: 0,
				},
				split_orientation: {
					x: -8,
					y: 0,
				},
				reverse_split_orientation: {
					x: 29,
					y: 0,
				}
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
					x: 62,
					y: 16,
				},
				split_orientation: {
					x: -8,
					y: 16,
				},
				reverse_split_orientation: {
					x: 29,
					y: 16,
				}
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
					x: 40,
					y: 16,
				},
				split_orientation: {
					x: 36,
					y: 16,
				},
				reverse_split_orientation: {
					x: 22,
					y: 16,
				}
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
					x: 40,
					y: 0,
				},
				split_orientation: {
					x: 36,
					y: 0,
				},
				reverse_split_orientation: {
					x: 22,
					y: 0,
				}
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
				x: 31,
				y: 0,
			},
			split_orientation: {
				x: 43,
				y: 0,
			},
			reverse_split_orientation: {
				x: 65,
				y: 0,
			}
		},
	},
	bloat: {
		visible: true,
		time: 0,
		position: {
			active_orientation: {
				x: -4,
				y: 47,
			},
			grouped_orientation: {
				x: -4,
				y: 47,
			},
			split_orientation: {
				x: -4,
				y: 47,
			},
			reverse_split_orientation: {
				x: -4,
				y: 47,
			}
		},
	},
};

exports.necromancy_overlay_data = necromancy_overlay_data;
