import { NecromancyGauge, StackingAbilities } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ability, EnemyDebuff, HasAlarm, OrientationTypes, Position, TimedPlayerBuff } from '../../types/common';
import { necromancy_gauge } from '../../data/necromancyGauge';

export type NecromancyGaugeState = NecromancyGauge;

const initialState: NecromancyGaugeState = {
    ...necromancy_gauge,
};

export const NecromancyGaugeSlice = createSlice({
    name: 'NecromancyGauge',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<NecromancyGaugeState>) => ({
            ...state,
            ...action.payload,
        }),
        updateAbility: (state, action: PayloadAction<{
            key: 'livingDeath',
            ability: Partial<Ability>,
        }>) => ({
            ...state,
            [action.payload.key]: {
                ...state[action.payload.key],
                ...action.payload.ability,
            },
        }),
        updateStacksAbility: (state, action: PayloadAction<{
            stackType: 'necrosis' | 'souls',
            stack: Partial<{
                stacks: number,
                isActiveOverlay: boolean,
            }>,
        }>) => {
            state.stacks[action.payload.stackType] = {
                ...state.stacks[action.payload.stackType],
                ...action.payload.stack,
            };

            return state;
        },
        updateStacks: (state, action: PayloadAction<Partial<StackingAbilities>>) => {
            state.stacks = {
                ...state.stacks,
                ...action.payload,
            };

            return state;
        },
        updateConjures: (state, action: PayloadAction<{
            conjureType: 'skeleton' | 'zombie' | 'phantom' | 'ghost',
            conjure: Partial<Omit<TimedPlayerBuff, 'position'>>
        }>) => {
            state.conjures[action.payload.conjureType] = {
                ...state.conjures[action.payload.conjureType],
                ...action.payload.conjure,
            };

            state.conjures.active = !!action.payload.conjure.active;

            return state;
        },
        updateActiveIncantation: (state, action: PayloadAction<{
            incantation: 0 | 1 | 2 | 3 | 4,
            active: boolean
        }>) => {
            state.incantations.active[action.payload.incantation] = action.payload.active;

            return state;
        },
        updateIncantationActive: (state, action: PayloadAction<{
            key: 'invokeDeath' | 'darkness' | 'threads' | 'splitSoul',
            isActiveOverlay: boolean
        }>) => {
            state.incantations[action.payload.key].isActiveOverlay = action.payload.isActiveOverlay;

            return state;
        },
        updateBloat: (state, action: PayloadAction<Partial<EnemyDebuff>>) => {
            state.bloat = {
                ...state.bloat,
                ...action.payload,
            };

            return state;
        },
        updateAbilityCooldown: (state, action: PayloadAction<{
            abilityName: 'livingDeath',
            ability: Partial<Ability>
        }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                ...action.payload.ability,
            };

            return state;
        },
        updateAbilityTime: (state, action: PayloadAction<{ abilityName: 'livingDeath', time: number }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                time: action.payload.time,
            };

            return state;
        },
        updateStackAlarm: (state, action: PayloadAction<{
            stackName: 'necrosis' | 'souls',
            alarm: Partial<HasAlarm['alarm']>
        }>) => {
            state.stacks[action.payload.stackName].alarm = {
                ...state.stacks[action.payload.stackName].alarm,
                ...action.payload.alarm,
            };

            return state;
        },
        updatePosition: (state, action: PayloadAction<Partial<Position>>) => {
            state.position = {
                ...state.position,
                ...action.payload,
            };

            return state;
        },
        updateIsActiveOverlay: (state, action: PayloadAction<{
            key: 'conjures' | 'livingDeath' | 'incantations',
            isActiveOverlay: boolean,
        }>) => {
            state[action.payload.key].isActiveOverlay = action.payload.isActiveOverlay;
            return state;
        },
        updateActiveOrientation: (state, action: PayloadAction<OrientationTypes>) => {
            console.log(`Updating orientation:`, action.payload);

            // Conjures
            state.conjures.position.active_orientation = {
                ...state.conjures.position[action.payload],
            };

            // Stacks
            state.stacks.souls.position.active_orientation = {
                ...state.stacks.souls.position[action.payload],
            };
            state.stacks.necrosis.position.active_orientation = {
                ...state.stacks.necrosis.position[action.payload],
            };

            // Incantations
            state.incantations.invokeDeath.position.active_orientation = {
                ...state.incantations.invokeDeath.position[action.payload],
            };
            state.incantations.darkness.position.active_orientation = {
                ...state.incantations.darkness.position[action.payload],
            };
            state.incantations.splitSoul.position.active_orientation = {
                ...state.incantations.splitSoul.position[action.payload],
            };
            state.incantations.threads.position.active_orientation = {
                ...state.incantations.threads.position[action.payload],
            };

            // Abilities
            state.livingDeath.position.active_orientation = {
                ...state.livingDeath.position[action.payload],
            };
            state.bloat.position.active_orientation = {
                ...state.bloat.position[action.payload],
            };

            return state;
        },
    },
});

