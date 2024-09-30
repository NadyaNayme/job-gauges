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
            offset: {
                x: 68,
                y: 12,
            },
        },
        glacialEmbrace: {
            name: 'Glacial_Embrace',
            isActiveOverlay: true,
            active: true,
            stacks: 0,
            offset: {
                x: 68,
                y: 12,
            },
        },
    },
    instability: {
        isActiveOverlay: true,
        active: true,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        offset: {
            x: 30,
            y: 5,
        },
    },
    soulfire: {
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
    tsunami: {
        isActiveOverlay: true,
        active: true,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        offset: {
            x: 55,
            y: 45,
        },
    },
    sunshine: {
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
};
