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
        offset: {
            x: 10,
            y: 45,
        }
    },
    balanceByForce: false,
    deathsSwiftness: {
        isActiveOverlay: true,
        active: true,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        offset: {
            x: 10,
            y: 45,
        },
    },
    crystalRain: {
        isActiveOverlay: true,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        offset: {
            x: 35,
            y: 5,
        },
    },
    splitSoul: {
        isActiveOverlay: true,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        offset: {
            x: -3,
            y: 5,
        },
    },
    perfectEquilibrium: {
        name: 'Perfect_Equilibrium',
        isActiveOverlay: true,
        active: true,
        stacks: 0,
        offset: {
            x: 55,
            y: 45,
        },
    },
};
