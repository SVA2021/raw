export interface CountryType {
	countryCode: string
	name: string
}

export interface CityGeoType {
	name: string
	lat: number | string
	lon: number | string
}

export interface LocationGeoType {
	name: string
	lat: number | string
	lon: number | string
	country: string
	state?: string
	local_names?: any
}

export type iconIDType = '01d' | '02d' | '03d' | '04d' | '09d' | '10d' | '11d' | '13d' | '50d' |
	'01n' | '02n' | '03n' | '04n' | '09n' | '10n' | '11n' | '13n' | '50n';

export interface WeatherType {
	time: number
	description: string
	name?: string
	icon?: iconIDType
	temp?: number
	feels_like?: number
	temp_min?: number
	temp_max?: number
	pressure?: number
	humidity?: number
	visibility?: number
	windSpeed?: number
	windDeg?: number
}

export interface WeatherStateType {
	city: CityGeoType,
	locationsList: LocationGeoType[],
	weather: WeatherType,
	country: CountryType,
	status: 'idle' | 'loading' | 'failed',
}
