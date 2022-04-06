import { SectionTitle } from "../../components/common/Typography/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherSettings from "./WeatherSettings";
import {
	getCurrentWeatherAsync,
	selectCity, selectWeather, selectWeatherQueryStatus
} from "./weatherSlice";
import s from './Weather.module.scss';
import WeatherItem from "./WeatherItem";
import Loading from "../../components/common/Loading/Loading";
import { useEffect } from "react";
import LinkToOriginal from "../../components/LinkToOriginal";
import { BASE_URL } from "./weatherAPI";

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
			<header className={s.header}>
				<SectionTitle>Weather</SectionTitle>
				<LinkToOriginal link={BASE_URL} height={'2rem'} />
			</header>
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