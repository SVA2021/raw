import { SectionTitle } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherSettings from "./WeatherSettings";
import {
	getCurrentWeatherAsync,
	selectCity, selectWeather, selectWeatherQueryStatus
} from "./weatherSlice";
import WeatherItem from "./WeatherItem";
import Loading from "../../components/Loading";
import { useEffect } from "react";

const Weather = (props: any) => {

	const dispatch = useAppDispatch();
	const queryStatus = useAppSelector(selectWeatherQueryStatus);
	const weather = useAppSelector(selectWeather);
	const city = useAppSelector(selectCity);

	useEffect(() => {
		dispatch(getCurrentWeatherAsync(city));
	}, [city, dispatch]);

	return (
		<div className="weather">
			<SectionTitle>Weather</SectionTitle>
			<WeatherSettings />
			{
				(queryStatus === 'loading' || queryStatus === 'failed')
					? <Loading text={queryStatus} />
					: <WeatherItem weather={weather} />
			}
		</div>
	)
}

export default Weather;