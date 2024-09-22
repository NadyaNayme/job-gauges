import { CombatStyle, NecromancyGauge, Overlay } from '../../types';
import { necromancy_gauge } from '../../data/necromancyGauge';
import { magic_gauge } from '../../data/magicGauge';
import { ranged_gauge } from '../../data/rangedGauge';
import { melee_gauge } from '../../data/meleeGauge';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type GaugeDataState = Overlay;

const initialState: Omit<GaugeDataState, 'ranged' | 'necromancy' | 'magic' | 'melee'> = {
    scaleFactor: 1,
    hasBeenOutOfCombat: 5,
    automaticSwapping: false,
    checkCombatStatus: false,
    isInCombat: false,
    combatStyle: CombatStyle.mage,
};

export const GaugeDataSlice = createSlice({
    name: 'GaugeData',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<GaugeDataState>>) => {
            state = {
                ...state,
                ...action.payload
            };
        }
    },
    selectors: {
        selectState: state => state,
    }
});

export const { selectState } = GaugeDataSlice.getSelectors();