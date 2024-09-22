import { createSlice } from '@reduxjs/toolkit';

export type AlarmState = {
    alarmNecrosisActive: boolean,
    alarmNecrosisAlertSound: string,
    alarmNecrosisLoop: boolean,
    alarmNecrosisThreshold: string,
    alarmNecrosisVolume: string,
    alarmSoulsActive: boolean,
    alarmSoulsAlertSound: string,
    alarmSoulsLoop: boolean,
    alarmSoulsThreshold: string,
    alarmSoulsVolume: string,
};

const initialState: AlarmState = {
    alarmNecrosisActive: false,
    alarmNecrosisAlertSound: "./a1sauce/Settings/Library/Controls/Alarms/alarm2.wav",
    alarmNecrosisLoop: false,
    alarmNecrosisThreshold: "12",
    alarmNecrosisVolume: "100",
    alarmSoulsActive: false,
    alarmSoulsAlertSound: "./a1sauce/Settings/Library/Controls/Alarms/alarm2.wav",
    alarmSoulsLoop: false,
    alarmSoulsThreshold: "5",
    alarmSoulsVolume: "100",
};

export const AlarmSlice = createSlice({
    name: "Alarm",
    initialState,
    reducers: {

    }
});