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




const city = {
	"name": "Samara",
	"lat": 53.198627,
	"lon": 50.113987,
	// "country": "RU",
	// "state": "Samara Oblast"
}

let cityList = [
	{
		"name": "Samara",
		"local_names": {
			"fi": "Samara",
			"et": "Samara",
			"da": "Samara",
			"en": "Samara",
			"hu": "Szamara",
			"ar": "سمارا",
			"eu": "Samara",
			"ko": "사마라",
			"cv": "Самар",
			"lt": "Samara",
			"ba": "Һамар",
			"es": "Samara",
			"sl": "Samara",
			"feature_name": "Samara",
			"zh": "薩馬拉",
			"it": "Samara",
			"be": "Самара",
			"bg": "Самара",
			"ascii": "Samara",
			"ja": "サマーラ",
			"pl": "Samara",
			"kn": "ಸಮಾರ",
			"hr": "Samara",
			"uk": "Самара",
			"de": "Samara",
			"hy": "Սամարա",
			"ku": "Samara",
			"fr": "Samara",
			"ru": "Самара",
			"ro": "Samara",
			"sk": "Samara",
			"tt": "Самара",
			"ka": "სამარა",
			"ca": "Samara",
			"cs": "Samara",
			"oc": "Samara",
			"hi": "समारा",
			"mn": "Самар",
			"pt": "Samara"
		},
		"lat": 53.198627,
		"lon": 50.113987,
		"country": "RU",
		"state": "Samara Oblast"
	},
	{
		"name": "Samara",
		"local_names": {
			"en": "Samara",
			"ru": "Самара"
		},
		"lat": 53.850513,
		"lon": 102.010262,
		"country": "RU",
		"state": "Irkutsk Oblast"
	},
	{
		"name": "Samara",
		"local_names": {
			"ru": "Самара",
			"en": "Samara"
		},
		"lat": 54.014721,
		"lon": 38.833611,
		"country": "RU",
		"state": "Ryazan Oblast"
	}
]

let weatherResponse = {
	"coord": {
		"lon": 50.114,
		"lat": 53.1986
	},
	"weather": [
		{
			"id": 600,
			"main": "Snow",
			"description": "light snow",
			"icon": "13n"
		}
	],
	"base": "stations",
	"main": {
		"temp": -6.93,
		"feels_like": -13.93,
		"temp_min": -6.93,
		"temp_max": -6.7,
		"pressure": 1031,
		"humidity": 93,
		"sea_level": 1031,
		"grnd_level": 1021
	},
	"visibility": 233,
	"wind": {
		"speed": 6.37,
		"deg": 76,
		"gust": 12.76
	},
	"snow": {
		"1h": 0.19
	},
	"clouds": {
		"all": 100
	},
	"dt": 1647446133,
	"sys": {
		"type": 2,
		"id": 49376,
		"country": "RU",
		"sunrise": 1647399149,
		"sunset": 1647441849
	},
	"timezone": 14400,
	"id": 499099,
	"name": "Samara",
	"cod": 200
}

