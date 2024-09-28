import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AlarmState = {
    alarmSoulsLoop: boolean,
    alarmSoulsActive: boolean,
    alarmNecrosisLoop: boolean,
    alarmNecrosisActive: boolean,

    /**
     * Sound = location of alarm.wav files.
     */
    alarmSoulsAlertSound: string,
    alarmNecrosisAlertSound: string,

    alarmSoulsVolume: number,
    alarmNecrosisVolume: number,
    alarmSoulsThreshold: number,
    alarmNecrosisThreshold: number,
};

const initialState: AlarmState = {
    alarmNecrosisActive: false,
    alarmNecrosisAlertSound: './a1sauce/Settings/Library/Controls/Alarms/alarm2.wav',
    alarmNecrosisLoop: false,
    alarmNecrosisThreshold: 12,
    alarmNecrosisVolume: 100,
    alarmSoulsActive: false,
    alarmSoulsAlertSound: './a1sauce/Settings/Library/Controls/Alarms/alarm2.wav',
    alarmSoulsLoop: false,
    alarmSoulsThreshold: 5,
    alarmSoulsVolume: 100,
};

export const AlarmSlice = createSlice({
    name: 'Alarm',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<AlarmState>>) => ({
            ...state,
            ...action.payload,
        }),
    },
});