import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { currencyAPI } from './currencyAPI';

const initialState: CurrencyStateType = {
	base: 'rub',
	ratesList: {},
	exchangeList: ['eur', 'usd', 'cny'],
	status: 'idle',
};

export interface CurrencyStateType {
	base: string
	exchangeList: string[]
	ratesList: any
	status: 'idle' | 'loading' | 'failed'
}

export const getLatestAsync = createAsyncThunk(
	'currency/getLatest',
	async (base: string, exchangeList: any) => {
		const response = await currencyAPI.getLatest(base, exchangeList);
		return response.data;
	}
);

export const getCurrencyListAsync = createAsyncThunk(
	'currency/getCurrencyList',
	async () => {
		const response = await currencyAPI.getSymbols();
		return response.data;
	}
);

export const currencySlice = createSlice({
	name: 'currency',
	initialState,

	reducers: {
		setBaseCurrency: (state, action: PayloadAction<string>) => {
			state.base = action.payload;
		},
		setExchangeList: (state, action: PayloadAction<string[]>) => {
			state.exchangeList = action.payload;
		},
		setRatesList: (state, action: PayloadAction<any>) => {
			state.ratesList = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLatestAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getLatestAsync.fulfilled, (state, action: PayloadAction<any>) => {
				state.status = 'idle';
				state.ratesList = action.payload;
			});
		builder
			.addCase(getCurrencyListAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCurrencyListAsync.fulfilled, (state, action: PayloadAction<string[]>) => {
				state.status = 'idle';
				state.exchangeList = action.payload;
			});
	},
});

export const { setBaseCurrency, setExchangeList, setRatesList } = currencySlice.actions;

export const selectBase = (state: RootState) => state.currency.base;
export const selectexchangeList = (state: RootState) => state.currency.exchangeList;
export const selectRatesList = (state: RootState) => state.currency.ratesList;
export const selectWeatherQueryStatus = (state: RootState) => state.currency.status;

export default currencySlice.reducer;