import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { ModeType, SettingsType, StatisticType } from './pomodoroTypes';

export const DEFAULT_TIMERS: SettingsType = { work: 25, short: 5, long: 15 };

export interface PomodoroState {
	mode: ModeType
	settings: SettingsType
	settingsStatus: boolean
	isRunning: boolean
	statistic: StatisticType
}

const initialState = {
	mode: 'work',
	settings: {
		work: 25,
		short: 5,
		long: 15
	},
	settingsStatus: false,
	isRunning: false,
	statistic: {
		sessions: 0,
		work: 0,
		break: 0,
	}
};

export const pomodoroSlice = createSlice({
	name: 'pomodoro',
	initialState,

	reducers: {
		setMode: (state, action: PayloadAction<ModeType>) => {
			state.mode = action.payload;
		},
		setSettingsValues: (state, action: PayloadAction<SettingsType>) => {
			state.settings = action.payload;
		},
		setSettingsStatus: (state, action: PayloadAction<boolean>) => {
			state.settingsStatus = action.payload;
		},
		setRunningStatus: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
	},
});

export const { setMode, setSettingsValues, setSettingsStatus, setRunningStatus, } = pomodoroSlice.actions;

export const selectMode = (state: RootState) => state.pomodoro.mode;
export const selectSettingsStatus = (state: RootState) => state.pomodoro.settingsStatus;
export const selectRunningStatus = (state: RootState) => state.pomodoro.isRunning;

export default pomodoroSlice.reducer;
