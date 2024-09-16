import { MeleeGauge } from '../types';

export const melee_gauge: MeleeGauge = {
    isInCombat: false,
    position: {
        x: 50,
        y: 50,
    },
    berserk: {
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
