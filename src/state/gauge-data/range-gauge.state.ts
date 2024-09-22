import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ability } from '../../types/common';
import { RangedGauge } from '../../types';
import { ranged_gauge } from '../../data/rangedGauge';

export type RangeGaugeState = RangedGauge;

const initialState: RangeGaugeState = {
    ...ranged_gauge,
};

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
        updateAbility: (state, action: PayloadAction<{
            key: 'splitSoul' | 'deathsSwiftness' | 'crystalRain',
            ability: Partial<Ability>,
        }>) => {
            state[action.payload.key] = {
                ...state[action.payload.key],
                ...action.payload.ability,
            };
        },
    },
});
