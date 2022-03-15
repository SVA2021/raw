import axios from "axios";
// import { Country } from "./holidaySlice";
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=';
const COUNTRIES_LIST_URL = '/api/v3/AvailableCountries';
const NEXT_WEEK_URL = '/api/v3/NextPublicHolidaysWorldwide';
const LIST_OF_HOLIDAYS_URL = '/api/v3/PublicHolidays';
const API_KEY_WEATHER = 'a7eb9522e11fdcf356f7ca73fdf3a8a2';

const weatherInstance = axios.create({
	// baseURL: PROXY_URL + BASE_URL,
	baseURL: BASE_URL + API_KEY_WEATHER,
});

export const weatherAPI = {
	getWeather() {
		return weatherInstance.get('')
			.then(response => {
				console.log(response);
				
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},
	getCountriesList() {
		return weatherInstance.get(COUNTRIES_LIST_URL)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getHolidaysNextWeek() {
		return weatherInstance.get(NEXT_WEEK_URL)
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

		return weatherInstance.get(query)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	}
}

// export const getCountryByCode = (code: string, list: Country[]) => {
// 	let country = { countryCode: code, name: '' }
// 	list.map((item) => { if (item.countryCode === code) country = item; })
// 	return country;
// }