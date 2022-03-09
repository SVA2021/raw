import axios from "axios";
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://date.nager.at';
const COUNTRIES_LIST_URL = '/api/v3/AvailableCountries';
const NEXT_WEEK_URL = '/api/v3/NextPublicHolidaysWorldwide';
const LIST_OF_HOLIDAYS_URL = '/api/v3/PublicHolidays';

const holidayInstance = axios.create({
	// baseURL: PROXY_URL + BASE_URL,
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
		holidayInstance.get(NEXT_WEEK_URL)
			.then(response => {
				console.log(response.data);
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
