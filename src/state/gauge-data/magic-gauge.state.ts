import { ActiveSpells, MagicGauge } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { magic_gauge } from '../../data/magicGauge';
import { Ability, Position, StackingPlayerBuff } from '../../types/common';
import { Abilities } from '../../lib/util/ability-helpers';

export type MagicGaugeState = MagicGauge;

const initialState: MagicGaugeState = {
    ...magic_gauge,
};

export type MagicPropertyAbilities = 'odeToDeceit' | 'instability' | 'tsunami' | 'sunshine';
export type MagicSpells = 'bloodTithe' | 'glacialEmbrace';
export type MagicAbilities = Extract<Abilities, 'Sunshine' | 'OdeToDeceit' | 'Tsunami' | 'Instability'>

export const MagicGaugeSlice = createSlice({
    name: 'MagicGauge',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<MagicGaugeState>) => ({
            ...state,
            ...action.payload,
        }),
        updateAbility: (state, action: PayloadAction<{
            abilityName: MagicPropertyAbilities,
            ability: Partial<Ability>
        }>) => ({
            ...state,
            [action.payload.abilityName]: {
                ...state[action.payload.abilityName],
                ...action.payload.ability,
            },
        }),
        updateAbilityTime: (state, action: PayloadAction<{ abilityName: MagicPropertyAbilities, time: number }>) => ({
            ...state,
            [action.payload.abilityName]: {
                ...state[action.payload.abilityName],
                time: action.payload.time,
            },
        }),
        updateSpell: (state, action: PayloadAction<{
            spellName: MagicSpells,
            spell: Partial<StackingPlayerBuff>
        }>) => ({
            ...state,
            spells: {
                ...state.spells,
                [action.payload.spellName]: {
                    ...state.spells[action.payload.spellName],
                    ...action.payload.spell,
                },
            },
        }),
        updateActiveSpell: (state, action: PayloadAction<{ activeSpell: ActiveSpells }>) => ({
            ...state,
            spells: {
                ...state.spells,
                ...action.payload,
            },
        }),
        updatePosition: (state, action: PayloadAction<Partial<Position>>) => ({
            ...state,
            position: {
                ...state.position,
                ...action.payload,
            },
        }),
    },
});
