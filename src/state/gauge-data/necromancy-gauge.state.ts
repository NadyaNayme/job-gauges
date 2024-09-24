import { NecromancyGauge, StackingAbilities } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ability, EnemyDebuff, HasAlarm, Position, TimedPlayerBuff } from '../../types/common';
import { necromancy_gauge } from '../../data/necromancyGauge';

export type NecromancyGaugeState = NecromancyGauge;

const initialState: NecromancyGaugeState = {
    ...necromancy_gauge,
};

export const NecromancyGaugeSlice = createSlice({
    name: 'NecromancyGauge',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<NecromancyGaugeState>) => {
            state = {
                ...state,
                ...action.payload,
            };
        },
        updateAbility: (state, action: PayloadAction<{
            key: 'livingDeath',
            ability: Partial<Ability>,
        }>) => {
            state[action.payload.key] = {
                ...state[action.payload.key],
                ...action.payload.ability,
            };
        },
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
        },
        updateStacks: (state, action: PayloadAction<Partial<StackingAbilities>>) => {
            state.stacks= {
                ...state.stacks,
                ...action.payload,
            };
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
        },
        updateActiveIncantation: (state, action: PayloadAction<{
            incantation: 0 | 1 | 2 | 3 | 4,
            active: boolean
        }>) => {
            state.incantations.active[action.payload.incantation] = action.payload.active;
        },
        updateIncantationActive: (state, action: PayloadAction<{
            key: 'invokeDeath' | 'darkness' | 'threads' | 'splitSoul',
            isActiveOverlay: boolean
        }>) => {
            state.incantations[action.payload.key].isActiveOverlay = action.payload.isActiveOverlay;
        },
        updateBloat: (state, action: PayloadAction<Partial<EnemyDebuff>>) => {
            state.bloat = {
                ...state.bloat,
                ...action.payload,
            };
        },
        updateAbilityCooldown: (state, action: PayloadAction<{
            abilityName: 'livingDeath',
            ability: Partial<Ability>
        }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                ...action.payload.ability,
            };
        },
        updateAbilityTime: (state, action: PayloadAction<{ abilityName: 'livingDeath', time: number }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                time: action.payload.time,
            };
        },
        updateStackAlarm: (state, action: PayloadAction<{
            stackName: 'necrosis' | 'souls',
            alarm: Partial<HasAlarm['alarm']>
        }>) => {
            state.stacks[action.payload.stackName].alarm = {
                ...state.stacks[action.payload.stackName].alarm,
                ...action.payload.alarm,
            };
        },
        updatePosition: (state, action: PayloadAction<Partial<Position>>) => {
            state.position = {
                ...state.position,
                ...action.payload,
            };
        },
        updateIsActiveOverlay: (state, action: PayloadAction<{
            key: 'conjures' | 'livingDeath' | 'incantations',
            isActiveOverlay: boolean,
        }>) => {
            state[action.payload.key].isActiveOverlay = action.payload.isActiveOverlay;
        },
    },
});

