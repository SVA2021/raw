import axios from "axios";
import { QueryCurrencyType } from "./currencySlice";

export const BASE_URL = 'https://api.exchangerate.host/';
const LATEST_DATA = 'latest?';
const SYMBOLS_DATA = 'symbols';

const currencyInstance = axios.create({
	baseURL: BASE_URL,
});

export const currencyAPI = {

	getLatest(request: QueryCurrencyType) {
		const baseQuery = `base=${request.base}`;
		const symbolsQuery = (request.symbols.length === 0) ? `` : `&symbols=` + request.symbols;
		const query = LATEST_DATA + baseQuery + symbolsQuery;
		return currencyInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},
	getSymbols() {
		const query = SYMBOLS_DATA;
		return currencyInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

}
