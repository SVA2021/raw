import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { WeatherType } from './weatherTypes';
import { useEffect, useState } from 'react';
import { getWeatherIconURL } from './weatherFunctions';
import Loading from '../../components/Loading';
import { getDateString } from '../../app/commonFunctions';

const WeatherItem = (props: any) => {
	const weather: WeatherType = props.weather;
	const [iconURL, setIcon] = useState('');
	const icon = weather.icon;

	const date = getDateString('-', weather.time);

	useEffect(() => {
		if (icon) setIcon(getWeatherIconURL(icon))
	}, [icon]);

	if (weather.description === 'no data') return <Loading text={weather.description} />

	return (
		<div className={s.main}>
			<PlainText>
				<Title>date:</Title>
				<InlineText withOffset={true}>{date}</InlineText>
				<Title>city:</Title>
				<InlineText withOffset={true}>{weather.name}</InlineText>
			</PlainText>
			<PlainText>
				<InlineText withOffset={true}>{weather.description}</InlineText>
			</PlainText>
			<div style={{ backgroundImage: `url(${iconURL})` }}></div>
			<PlainText>
				<Title>temperature:</Title>
				<InlineText withOffset={true}>{weather.temp}&#176;C</InlineText>
				<Title>feels like:</Title>
				<InlineText withOffset={true}>{weather.feels_like}&#176;C</InlineText>
				<Title>min:</Title>
				<InlineText withOffset={true}>{weather.temp_min}&#176;C</InlineText>
				<Title>max:</Title>
				<InlineText withOffset={true}>{weather.temp_max}&#176;C</InlineText>
			</PlainText>
			<PlainText>
				<Title>pressure:</Title>
				<InlineText withOffset={true}>{weather.pressure}hPa</InlineText>
				<Title>humidity:</Title>
				<InlineText withOffset={true}>{weather.humidity}%</InlineText>
				<Title>visibility:</Title>
				<InlineText withOffset={true}>{weather.visibility}meter</InlineText>
				<Title>wind:</Title>
				<InlineText withOffset={true}>{weather.windSpeed}meter/sec</InlineText>
				<InlineText style={{ transform: `rotate(${weather.windDeg}deg)` }}>
					&#8593;
				</InlineText>
			</PlainText>
		</div>
	)
}

export default WeatherItem;
