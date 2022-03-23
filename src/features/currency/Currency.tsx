import { SectionTitle } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { currencyAPI } from "./currencyAPI";

const Currency = (props: any) => {

	// const dispatch = useAppDispatch();
	// const queryStatus = useAppSelector(selectWeatherQueryStatus);
	// const weather = useAppSelector(selectWeather);
	// const city = useAppSelector(selectCity);

	useEffect(() => {
		let result = currencyAPI.getLatest();
		console.log(result);
		
	}, []);

	return (
		<div className="currency">
			<SectionTitle>Currency</SectionTitle>
			{/* <WeatherSettings />
			{
				(queryStatus === 'loading' || queryStatus === 'failed')
					? <Loading text={queryStatus} />
					: <WeatherItem weather={weather} />
			} */}
		</div>
	)
}

export default Currency;