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
        offset: {
            x: 0,
            y: 0,
        },
    },
};
