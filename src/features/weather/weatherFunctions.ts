import { iconIDType, WeatherType } from "./weatherTypes";

export const getWeatherIconURL = (iconID: iconIDType, multi: number = 2) => {
	if (!iconID) return 'none';
	return `http://openweathermap.org/img/wn/${iconID}@${multi}x.png`
}

export const convertWeatherData = (response: any) => {
	let result: WeatherType = { description: 'no data', time: 0 };
	if (response?.cod === 200) {
		result.name = response.name
		result.time = response.dt * 1000
		result.description = response.weather[0].description
		result.icon = response.weather[0].icon
		result.temp = response.main.temp
		result.feels_like = response.main.feels_like
		result.temp_min = response.main.temp_min
		result.temp_max = response.main.temp_max
		result.pressure = response.main.pressure
		result.humidity = response.main.humidity
		result.visibility = response.visibility
		result.windSpeed = response.wind.speed
		result.windDeg = response.wind.deg
	}
	return result;
}