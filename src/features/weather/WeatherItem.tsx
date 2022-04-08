import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import { WeatherType } from './weatherTypes';
import { useEffect, useState } from 'react';
import { getWeatherIconURL, setColor } from './weatherFunctions';
import Loading from '../../components/common/Loading/Loading';
import { getDateString } from '../../app/commonFunctions';
import classNames from 'classnames';

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
				<Title withOffset={true}>date:</Title>
				{date}
			</PlainText>
			<PlainText>
				<Title withOffset={true}>city:</Title>
				{weather.name}
			</PlainText>
			<div className={s.description}>
				<div className={s.icon} style={{ backgroundImage: `url(${iconURL})` }}></div>
				<PlainText >
					<InlineText className={classNames(s.temperature, s[setColor(weather.temp)])} >
						{weather.temp?.toFixed(1)}&#176;C
					</InlineText>
					<InlineText className={s.parameter}>{weather.description}</InlineText>
				</PlainText>
			</div>
			<PlainText withOffset={true}>
				<Title>feels like:</Title>
				<InlineText className={s[setColor(weather.feels_like)]} withOffset={true}>
					{weather.feels_like?.toFixed(1)}&#176;C
				</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>min:</Title>
				<InlineText className={s[setColor(weather.temp_min)]} withOffset={true}>
					{weather.temp_min?.toFixed(1)}&#176;C
				</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>max:</Title>
				<InlineText className={s[setColor(weather.temp_max)]} withOffset={true}>
					{weather.temp_max?.toFixed(1)}&#176;C
				</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>wind:</Title>
				<InlineText withOffset={true}>{weather.windSpeed?.toFixed(1)}m/s</InlineText>
				<InlineText className={s.wind} style={{ transform: `rotate(${weather.windDeg}deg)` }}>
					&#8593;
				</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>humidity:</Title>
				<InlineText withOffset={true}>{weather.humidity}%</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>pressure:</Title>
				<InlineText withOffset={true}>{weather.pressure}hPa</InlineText>
			</PlainText>
			<PlainText withOffset={true}>
				<Title>visibility:</Title>
				<InlineText withOffset={true}>{weather.visibility}m</InlineText>
			</PlainText>
		</div>
	)
}

export default WeatherItem;
