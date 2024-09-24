import { configureStore } from '@reduxjs/toolkit';
import { GaugeDataSlice } from './gauge-data/gauge-data.state';
import { AlarmSlice } from './alarms/alarm.state';
import { MagicGaugeSlice } from './gauge-data/magic-gauge.state';
import { RangeGaugeSlice } from './gauge-data/range-gauge.state';
import { NecromancyGaugeSlice } from './gauge-data/necromancy-gauge.state';

export const store = configureStore({
    reducer: {
        gaugeData: GaugeDataSlice.reducer,
        alarms: AlarmSlice.reducer,
        magic: MagicGaugeSlice.reducer,
        ranged: RangeGaugeSlice.reducer,
        necromancy: NecromancyGaugeSlice.reducer,
    },
});

export type RootStore = ReturnType<typeof store.getState>;