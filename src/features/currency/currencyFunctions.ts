import { CurrencyType } from "./currencySlice";

// export const convertSymbols = (response: any) => {
// 	let result;
// 	if (response.data.success) result = Object.values(response.data.symbols);
// 	return result;
// }

export const getCodeCurrency = (currencyArray : CurrencyType[]) => {
	let result = [];
	for (const currency of currencyArray) {
		result.push(currency.code);
	}
	return result.join(',');
}