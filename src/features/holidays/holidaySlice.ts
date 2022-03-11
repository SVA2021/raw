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

type HolidayListType = 'week' | 'country';

export interface HolidayState {
	countriesList: Country[],
	holidayList: HolidayItemType[],
	listMode: HolidayListType,
	country: Country,
	status: 'idle' | 'loading' | 'failed';
}


const initialState: HolidayState = {
	countriesList: [
		{
			countryCode: 'RU',
			name: 'Russia'
		},
	],
	holidayList: [],
	listMode: 'week',
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
		setHolidayListType: (state, action: PayloadAction<HolidayListType>) => {
			state.listMode = action.payload;
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

export default holidaySlice.reducer;
