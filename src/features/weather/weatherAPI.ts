import axios from "axios";
import { API_KEY_WEATHER } from "../../private/weatherVariables";
import { CityGeoType } from "./weatherTypes";

const BASE_URL = 'http://api.openweathermap.org';
const CURRENT_WEATHER = '/data/2.5/weather';
const GEO_CITY = '/geo/1.0/direct?q=';

const weatherInstance = axios.create({
	baseURL: BASE_URL,
});

export const weatherAPI = {

	getCurrentWeather(geo: CityGeoType) {
		let query = CURRENT_WEATHER + `?lat=${geo.lat}&lon=${geo.lon}` + API_KEY_WEATHER + `&units=metric`;
		return weatherInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	// search on different countries will be added later 
	getCityGeo(city = 'Moscow', countryCode = 'ru', limit = 5) {
		const query = GEO_CITY + `${city},${countryCode}&limit=${limit}` + API_KEY_WEATHER;
		return weatherInstance.get(query)
			.then(response => {
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	}
}
