import { weatherAPI } from './weatherAPI';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
	CityGeoType, CountryType, LocationGeoType, WeatherStateType, WeatherType
} from './weatherTypes';
import { convertWeatherData } from './weatherFunctions';

const initialState: WeatherStateType = {
	weather: { description: 'no data', time: 0 },
	city: {
		name: 'Moscow',
		lat: 55.7522,
		lon: 37.6156,
	},
	locationsList: [],
	listStatus: false,
	country: {
		countryCode: 'RU',
		name: 'Russia'
	},
	status: 'idle',
};

export const getLocationsListAsync = createAsyncThunk(
	'weather/getLocationsList',
	async (city: string) => {
		const response = await weatherAPI.getCityGeo(city);
		return response.data;
	}
);

export const getCurrentWeatherAsync = createAsyncThunk(
	'weather/getCurrentWeather',
	async (geo: CityGeoType) => {
		const response = await weatherAPI.getCurrentWeather(geo);
		let result: WeatherType = { description: 'no data', time: 0 };
		if (response.status === 200) result = convertWeatherData(response.data);
		return result;
	}
);

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,

	reducers: {
		setCity: (state, action: PayloadAction<CityGeoType>) => {
			state.city = action.payload;
		},
		setCountry: (state, action: PayloadAction<CountryType>) => {
			state.country = action.payload;
		},
		setListStatus: (state, action: PayloadAction<boolean>) => {
			state.listStatus = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLocationsListAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getLocationsListAsync.fulfilled, (state, action: PayloadAction<LocationGeoType[]>) => {
				state.status = 'idle';
				state.locationsList = action.payload;
			});
		builder
			.addCase(getCurrentWeatherAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCurrentWeatherAsync.fulfilled, (state, action: PayloadAction<WeatherType>) => {
				state.status = 'idle';
				state.weather = action.payload;
			});
	},
});

export const { setCity, setCountry, setListStatus } = weatherSlice.actions;

export const selectCity = (state: RootState) => state.weather.city;
export const selectLocationsList = (state: RootState) => state.weather.locationsList;
export const selectCountry = (state: RootState) => state.weather.country;
export const selectWeatherQueryStatus = (state: RootState) => state.weather.status;
export const selectWeather = (state: RootState) => state.weather.weather;
export const selectListStatus = (state: RootState) => state.weather.listStatus;

export default weatherSlice.reducer;