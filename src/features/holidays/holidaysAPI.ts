import axios from "axios";
import { Country } from "./holidaySlice";
export const BASE_URL = 'https://date.nager.at';
const COUNTRIES_LIST_URL = '/api/v3/AvailableCountries';
const NEXT_WEEK_URL = '/api/v3/NextPublicHolidaysWorldwide';
const LIST_OF_HOLIDAYS_URL = '/api/v3/PublicHolidays';

const holidayInstance = axios.create({
	baseURL: BASE_URL,
});

export const holidaysAPI = {
	getCountriesList() {
		return holidayInstance.get(COUNTRIES_LIST_URL)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getHolidaysNextWeek() {
		return holidayInstance.get(NEXT_WEEK_URL)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getCountryHolydays(countryCode = 'RU') {
		let today = new Date();
		let year = today.getFullYear();
		let query = LIST_OF_HOLIDAYS_URL + `/` + year + `/` + countryCode;

		return holidayInstance.get(query)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	}
}

export const getCountryByCode = (code: string, list: Country[]) => {
	let country = { countryCode: code, name: '' }
	list.map((item) => { if (item.countryCode === code) country = item; })
	return country;
}