import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ability, Position } from '../../types/common';
import { RangedGauge } from '../../types';
import { ranged_gauge } from '../../data/rangedGauge';
import { Abilities } from '../../lib/util/ability-helpers';

export type RangedGaugeState = RangedGauge;

const initialState: RangedGaugeState = {
    ...ranged_gauge,
};

export type RangedPropertyAbilities = 'splitSoul' | 'deathsSwiftness' | 'crystalRain';
export type RangedAbilities = Extract<Abilities, 'DeathsSwiftness' | 'CrystalRain' | 'SplitSoul'>

export const RangedGaugeSlice = createSlice({
    name: 'RangedGauge',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<RangedGaugeState>>) => ({
            ...state,
            ...action.payload,
        }),
        updateAbilityTime: (state, action: PayloadAction<{ abilityName: RangedPropertyAbilities, time: number }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                time: action.payload.time,
            };

            return state;
        },
        updateAbility: (state, action: PayloadAction<{
            abilityName: RangedPropertyAbilities,
            ability: Partial<Ability>
        }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                ...action.payload.ability,
            };

            return state;
        },
        updatePerfectEquilibriumStack: (state, action: PayloadAction<{ stacks: number }>) => {
            state.perfectEquilibrium.stacks = action.payload.stacks;
            return state;
        },
        updateBalanceByForce: (state, action: PayloadAction<{ active: boolean }>) => {
            state.balanceByForce = action.payload.active;
            return state;
        },
        updatePosition: (state, action: PayloadAction<Partial<Position>>) => {
            state.position = {
                ...state.position,
                ...action.payload,
            };

            return state;
        },
    },
});
