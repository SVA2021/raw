import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import holidayReducer from '../features/holidays/holidaySlice';
import weatherReducer from '../features/weather/weatherSlice';
import currencyReducer from '../features/currency/currencySlice';
import pomodoroReducer from '../features/pomodoro/pomodoroSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		holiday: holidayReducer,
		weather: weatherReducer,
		currency: currencyReducer,
		pomodoro: pomodoroReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
