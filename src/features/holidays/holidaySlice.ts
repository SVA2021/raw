import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { holidaysAPI } from './holidaysAPI';

export interface Country {
	countryCode: string
	name: string
}

export interface HolidayItemType {
	"date": string
	"localName": string
	"name": string
	"countryCode": string
	"fixed": boolean
	"global": boolean
	"counties": string | null
	"launchYear": string | number
	"types": string[]
}

export interface HolidayState {
	countriesList: Country[],
	holidayList: HolidayItemType[],
	country: Country,
	status: 'idle' | 'loading' | 'failed';
}

const initialState: HolidayState = {
	countriesList: [
		{
			countryCode: 'RU',
			name: 'Russia'
		},
		{
			countryCode: 'RU2',
			name: 'Russia2'
		},
		{
			countryCode: 'RU3',
			name: 'Russia3'
		},
	],
	holidayList: [],
	country: {
		countryCode: 'RU',
		name: 'Russia'
	},
	status: 'idle',
};

export const getCountriesListAsync = createAsyncThunk(
	'holiday/getCountriesList',
	async () => {
		const response = await holidaysAPI.getCountriesList();
		return response;
	}
);

export const getHolidayNextWeekAsync = createAsyncThunk(
	'holiday/getHolidaysNextWeek',
	async () => {
		const response = await holidaysAPI.getHolidaysNextWeek();
		return response;
	}
);

export const getCountryHolydaysAsync = createAsyncThunk(
	'holiday/getCountryHolydays',
	async (countryCode: string) => {
		const response = await holidaysAPI.getCountryHolydays(countryCode);
		console.log(response);
		
		return response;
	}
);

export const holidaySlice = createSlice({
	name: 'holiday',
	initialState,

	reducers: {
		setCountriesList: (state, action: PayloadAction<Country[]>) => {
			state.countriesList = action.payload;
		},
		setHolidayList: (state, action: PayloadAction<HolidayItemType[]>) => {
			state.holidayList = action.payload;
		},
		setCountry: (state, action: PayloadAction<Country>) => {
			state.country = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCountriesListAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCountriesListAsync.fulfilled, (state, action: PayloadAction<Country[]>) => {
				state.status = 'idle';
				state.countriesList = action.payload;
			});
		builder
			.addCase(getHolidayNextWeekAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getHolidayNextWeekAsync.fulfilled, (state, action: PayloadAction<HolidayItemType[]>) => {
				state.status = 'idle';
				state.holidayList = action.payload;
			});
		builder
			.addCase(getCountryHolydaysAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCountryHolydaysAsync.fulfilled, (state, action: PayloadAction<HolidayItemType[]>) => {
				console.log(action.payload);
				state.status = 'idle';
				state.holidayList = action.payload;
				
			});
	},
});

export const { setCountriesList, setHolidayList, setCountry } = holidaySlice.actions;

export const selectCountriesList = (state: RootState) => state.holiday.countriesList;
export const selectHolidayList = (state: RootState) => state.holiday.holidayList;
export const selectCountry = (state: RootState) => state.holiday.country;
export const selectHolidayQueryStatus = (state: RootState) => state.holiday.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
// 	dispatch,
// 	getState
// ) => {
// 	const currentValue = selectCount(getState());
// 	if (currentValue % 2 === 1) {
// 		dispatch(incrementByAmount(amount));
// 	}
// };

export default holidaySlice.reducer;
