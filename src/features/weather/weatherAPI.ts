import axios from "axios";
import { CityGeoType } from "./weatherTypes";

export const BASE_URL = 'https://api.openweathermap.org';
const CURRENT_WEATHER = '/data/2.5/weather';
const GEO_CITY = '/geo/1.0/direct?q=';
const API_KEY_OPEN_WEATHER = '&appid=a7eb9522e11fdcf356f7ca73fdf3a8a2';

const weatherInstance = axios.create({
	baseURL: BASE_URL,
});

export const weatherAPI = {

	getCurrentWeather(geo: CityGeoType) {
		let query = CURRENT_WEATHER + `?lat=${geo.lat}&lon=${geo.lon}` + API_KEY_OPEN_WEATHER + `&units=metric`;
		return weatherInstance.post(query)
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
		const query = GEO_CITY + `${city},${countryCode}&limit=${limit}` + API_KEY_OPEN_WEATHER;
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
