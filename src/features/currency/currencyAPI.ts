import axios from "axios";

const BASE_URL = 'https://api.exchangerate.host/';
const LATEST_DATA = 'latest?';
const SYMBOLS_DATA = 'symbols';

const currencyInstance = axios.create({
	baseURL: BASE_URL,
});

export const currencyAPI = {

	getLatest(base: string = 'rub', symbols: string[] = []) {
		const baseQuery = `base=${base}`;
		const symbolsQuery = (symbols.length === 0) ? `` : `&symbols=${symbols.join(',')}`;
		const accuracy = `&places=2`;
		const query = LATEST_DATA + baseQuery + symbolsQuery + accuracy;
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
