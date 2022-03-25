import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { currencyAPI } from './currencyAPI';

const initialState: CurrencyStateType = {
	base: 'RUB',
	allCurrency: [
		{
			"description": "Chinese Yuan",
			"code": "CNY"
		},
		{
			"description": "Euro",
			"code": "EUR"
		},
		{
			"description": "Russian Ruble",
			"code": "RUB"
		},
		{
			"description": "United States Dollar",
			"code": "USD"
		},
	],
	activeCurrency: [
		{
			"description": "Chinese Yuan",
			"code": "CNY"
		},
		{
			"description": "Euro",
			"code": "EUR"
		},
		{
			"description": "Russian Ruble",
			"code": "RUB"
		},
		{
			"description": "United States Dollar",
			"code": "USD"
		},
	],
	rates: {},
	status: 'idle',
};

export type CurrencyType = {
	description: string
	code: string
}

export type QueryCurrencyType = {
	base: string
	symbols: string
}

export interface CurrencyStateType {
	base: string
	allCurrency: CurrencyType[]
	activeCurrency: CurrencyType[]
	rates: any
	status: 'idle' | 'loading' | 'failed'
}

export const getLatestAsync = createAsyncThunk(
	'currency/getLatest',
	async (query: QueryCurrencyType) => {
		const response = await currencyAPI.getLatest(query);
		return response.data;
	}
);

export const getCurrencyListAsync = createAsyncThunk(
	'currency/getCurrencyList',
	async () => {
		const response = await currencyAPI.getSymbols();
		let result: CurrencyType[] = [];
		if (response.data.success) result = Object.values(response.data.symbols);
		return result;
	}
);

export const currencySlice = createSlice({
	name: 'currency',
	initialState,

	reducers: {
		setBaseCurrency: (state, action: PayloadAction<string>) => {
			state.base = action.payload;
		},
		setAllCurrency: (state, action: PayloadAction<CurrencyType[]>) => {
			state.allCurrency = action.payload;
		},
		setActiveCurrency: (state, action: PayloadAction<CurrencyType[]>) => {
			state.activeCurrency = action.payload;
		},
		addActiveCurrency: (state, action: PayloadAction<CurrencyType>) => {
			state.activeCurrency.push(action.payload);
		},
		delActiveCurrency: (state, action: PayloadAction<CurrencyType>) => {
			state.activeCurrency.filter((item) => (item.code !== action.payload.code));
		},
		setRatesList: (state, action: PayloadAction<any>) => {
			state.rates = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLatestAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getLatestAsync.fulfilled, (state, action: PayloadAction<any>) => {
				state.status = 'idle';
				state.rates = action.payload.rates;
			});
		builder
			.addCase(getCurrencyListAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getCurrencyListAsync.fulfilled, (state, action: PayloadAction<CurrencyType[]>) => {
				state.status = 'idle';
				state.allCurrency = action.payload;
			});
	},
});

export const {
	setBaseCurrency, setAllCurrency, setActiveCurrency,
	setRatesList, addActiveCurrency, delActiveCurrency,
} = currencySlice.actions;

export const selectBase = (state: RootState) => state.currency.base;
export const selectRatesList = (state: RootState) => state.currency.rates;
export const selectAllCurrency = (state: RootState) => state.currency.allCurrency;
export const selectActiveCurrency = (state: RootState) => state.currency.activeCurrency;
export const selectCurrencyQueryStatus = (state: RootState) => state.currency.status;

export default currencySlice.reducer;