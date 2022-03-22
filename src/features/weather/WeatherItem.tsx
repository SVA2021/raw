import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { WeatherType } from './weatherTypes';
import { useEffect, useState } from 'react';
import { getWeatherIconURL, setColor } from './weatherFunctions';
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
			<div className={s.icon} style={{ backgroundImage: `url(${iconURL})` }}></div>
			<PlainText className={s.description}>
			{/* <Title>{weather.description}</Title> */}
				{weather.description}
				{/* <InlineText withOffset={true}>{weather.description}</InlineText> */}
			</PlainText>
			<PlainText>
				<Title>temperature:</Title>
				<InlineText style={setColor(weather.temp)} withOffset={true}>{weather.temp}&#176;C</InlineText>
				<Title>feels like:</Title>
				<InlineText style={setColor(weather.feels_like)} withOffset={true}>{weather.feels_like}&#176;C</InlineText>
				<Title>min:</Title>
				<InlineText style={setColor(weather.temp_min)} withOffset={true}>{weather.temp_min}&#176;C</InlineText>
				<Title>max:</Title>
				<InlineText style={setColor(weather.temp_max)} withOffset={true}>{weather.temp_max}&#176;C</InlineText>
			</PlainText>
			<PlainText>
				<Title>pressure:</Title>
				<InlineText withOffset={true}>{weather.pressure}hPa</InlineText>
				<Title>humidity:</Title>
				<InlineText withOffset={true}>{weather.humidity}%</InlineText>
				<Title>visibility:</Title>
				<InlineText withOffset={true}>{weather.visibility}meter</InlineText>
			</PlainText>
			<PlainText>
				<Title>wind:</Title>
				<InlineText withOffset={true}>{weather.windSpeed}meter/sec</InlineText>
				<InlineText className={s.wind} style={{ transform: `rotate(${weather.windDeg}deg)` }}>
					&#8593;
				</InlineText>
			</PlainText>
		</div>
	)
}

export default WeatherItem;
