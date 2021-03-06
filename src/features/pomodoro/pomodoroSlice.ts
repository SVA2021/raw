import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ModeType, SettingsType, StatisticType } from './pomodoroTypes';

export const DEFAULT_TIMERS: SettingsType = { work: 25, short: 5, long: 15 };
export const DEFAULT_STATS = { sessions: 0, work: 0, break: 0 };

export interface PomodoroState {
	mode: ModeType
	settings: SettingsType
	settingsStatus: boolean
	isRunning: boolean
	pause: boolean
	finish: boolean
	statistic: StatisticType
}

const initialState: PomodoroState = {
	mode: 'work',
	settings: DEFAULT_TIMERS,
	settingsStatus: false,
	isRunning: false,
	pause: false,
	finish: false,
	statistic: DEFAULT_STATS,
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
		setPause: (state, action: PayloadAction<boolean>) => {
			state.pause = action.payload;
		},
		setFinish: (state, action: PayloadAction<boolean>) => {
			state.finish = action.payload;
		},
		setStatistic: (state, action: PayloadAction<StatisticType>) => {
			state.statistic.work += action.payload.work;
			state.statistic.break += action.payload.break;
			state.statistic.sessions += action.payload.sessions;
		},
	},
});

export const {
	setMode, setSettingsValues, setSettingsStatus, setRunningStatus, setPause, setStatistic, setFinish,
} = pomodoroSlice.actions;

export const selectMode = (state: RootState) => state.pomodoro.mode;
export const selectSettings = (state: RootState) => state.pomodoro.settings;
export const selectSettingsStatus = (state: RootState) => state.pomodoro.settingsStatus;
export const selectRunningStatus = (state: RootState) => state.pomodoro.isRunning;
export const selectPause = (state: RootState) => state.pomodoro.pause;
export const selectFinish = (state: RootState) => state.pomodoro.finish;
export const selectStatistic = (state: RootState) => state.pomodoro.statistic;

export default pomodoroSlice.reducer;
