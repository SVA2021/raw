import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { ModeType } from './pomodoroTypes';

export interface Country {
	countryCode: string
	name: string
}

export interface PomodoroState {
	mode : ModeType
	settingsStatus: boolean
	isRunning: boolean
}


const initialState = {
	mode: 'work',
	settingsStatus: false,
	isRunning: false,
};


export const pomodoroSlice = createSlice({
	name: 'pomodoro',
	initialState,

	reducers: {
		setMode: (state, action: PayloadAction<ModeType>) => {
			state.mode = action.payload;
		},
		setSettingsStatus: (state, action: PayloadAction<boolean>) => {
			state.settingsStatus = action.payload;
		},
		setRunningStatus: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
	},
});

export const { setMode, } = pomodoroSlice.actions;

export const selectMode = (state: RootState) => state.pomodoro.mode;
export const selectSettingsStatus = (state: RootState) => state.pomodoro.settingsStatus;
export const selectRunningStatus = (state: RootState) => state.pomodoro.isRunning;

export default pomodoroSlice.reducer;
