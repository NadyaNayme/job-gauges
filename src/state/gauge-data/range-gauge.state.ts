import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ability } from '../../types/common';
import { RangedGauge } from '../../types';
import { ranged_gauge } from '../../data/rangedGauge';
import { Abilities } from '../../lib/util/ability-helpers';

export type RangeGaugeState = RangedGauge;

const initialState: RangeGaugeState = {
    ...ranged_gauge,
};

export type RangePropertyAbilities = 'splitSoul' | 'deathsSwiftness' | 'crystalRain';
export type RangeAbilities = Extract<Abilities, 'DeathsSwiftness' | 'CrystalRain' | 'SplitSoul'>

export const RangeGaugeSlice = createSlice({
    name: 'RangeGauge',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<RangeGaugeState>>) => {
            state = {
                ...state,
                ...action.payload,
            };
        },
        updateAbilityTime: (state, action: PayloadAction<{ abilityName: RangePropertyAbilities, time: number }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                time: action.payload.time,
            };
        },
        updateAbility: (state, action: PayloadAction<{
            abilityName: RangePropertyAbilities,
            ability: Partial<Ability>
        }>) => {
            state[action.payload.abilityName] = {
                ...state[action.payload.abilityName],
                ...action.payload.ability,
            };
        },
        updatePerfectEquilibriumStack: (state, action: PayloadAction<{ stacks: number }>) => {
            state.perfectEquilibrium.stacks = action.payload.stacks;
        },
        updateBalanceByForce: (state, action: PayloadAction<{ active: boolean }>) => {
            state.balanceByForce = action.payload.active;
        },
    },
});
