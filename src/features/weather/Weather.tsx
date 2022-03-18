import { SectionTitle } from "../../components/common/Typography";
import { useAppSelector } from '../../app/hooks';
import WeatherSettings from "./WeatherSettings";
import { selectWeather, selectWeatherQueryStatus } from "./weatherSlice";
import WeatherItem from "./WeatherItem";
import Loading from "../../components/Loading";

const Weather = (props: any) => {

	const queryStatus = useAppSelector(selectWeatherQueryStatus);
	const weather = useAppSelector(selectWeather);

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