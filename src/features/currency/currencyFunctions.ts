import { CurrencyType } from "./currencySlice";

export const getCodeCurrency = (currencyArray: CurrencyType[]) => {
	let result = [];
	for (const currency of currencyArray) {
		result.push(currency.code);
	}
	return result.join(',');
}