import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../app/store';
import { ModeType, SettingsType, StatisticType } from './pomodoroTypes';
import React, { FC } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DEFAULT_STATS, DEFAULT_TIMERS, PomodoroState } from './pomodoroSlice';
import pomodoroReducer,
{
	setMode, setSettingsValues, setSettingsStatus, setRunningStatus, setPause, setStatistic, setFinish,
} from "./pomodoroSlice";

describe('counter reducer', () => {

	const initialState: PomodoroState = {
		mode: 'work',
		settings: DEFAULT_TIMERS,
		settingsStatus: false,
		isRunning: false,
		pause: false,
		finish: false,
		statistic: DEFAULT_STATS,
	};

	it('should handle initial state', () => {
		expect(pomodoroReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});

	it('should handle setMode work', () => {
		const actual = pomodoroReducer(initialState, setMode('work'));
		expect(actual.mode).toEqual('work');
	});

	it('should handle setMode long', () => {
		const actual = pomodoroReducer(initialState, setMode('long'));
		expect(actual.mode).toEqual('long');
	});

	it('should handle setMode short', () => {
		const actual = pomodoroReducer(initialState, setMode('short'));
		expect(actual.mode).toEqual('short');
	});

	it('should handle setSettingsValues', () => {
		const actual = pomodoroReducer(initialState, setSettingsValues({ work: 10, short: 11, long: 12 }));
		expect(actual.settings).toEqual({ work: 10, short: 11, long: 12 });
	});

	it('should handle setRunningStatus true', () => {
		const actual = pomodoroReducer(initialState, setRunningStatus(true));
		expect(actual.isRunning).toEqual(true);
	});

	it('should handle setRunningStatus false', () => {
		const actual = pomodoroReducer(initialState, setRunningStatus(false));
		expect(actual.isRunning).toEqual(false);
	});

	it('should handle setPause true', () => {
		const actual = pomodoroReducer(initialState, setPause(true));
		expect(actual.pause).toEqual(true);
	});

	it('should handle setPause false', () => {
		const actual = pomodoroReducer(initialState, setPause(false));
		expect(actual.pause).toEqual(false);
	});

	it('should handle setFinish true', () => {
		const actual = pomodoroReducer(initialState, setFinish(true));
		expect(actual.finish).toEqual(true);
	});

	it('should handle setFinish false', () => {
		const actual = pomodoroReducer(initialState, setFinish(false));
		expect(actual.finish).toEqual(false);
	});


	it('should handle setStatistic', () => {
		const actual = pomodoroReducer(initialState, setStatistic({ sessions: 10, work: 15, break: 20 }));
		expect(actual.statistic).toEqual({ sessions: 10, work: 15, break: 20 });
	});
});
