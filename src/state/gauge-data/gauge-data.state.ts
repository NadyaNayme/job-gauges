import { CombatStyle, Overlay } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { OrientationTypes } from '../../types/common';

export type GaugeDataState = Overlay & {
    updatingOverlayPosition: boolean;
    selectedOrientation: OrientationTypes;
};

const initialState: Omit<GaugeDataState, 'ranged' | 'necromancy' | 'magic' | 'melee'> = {
    scaleFactor: 1,
    hasBeenOutOfCombat: 5,
    automaticSwapping: false,
    checkCombatStatus: false,
    isInCombat: false,
    combatStyle: CombatStyle.necro,
    updatingOverlayPosition: false,
    selectedOrientation: 'reverse_split'
};

export const GaugeDataSlice = createSlice({
    name: 'GaugeData',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<GaugeDataState>>) => ({
            ...state,
            ...action.payload,
        }),
        updateCombatStyle: (state, action: PayloadAction<CombatStyle>) => ({
            ...state,
            combatStyle: action.payload,
        }),
    },
});
