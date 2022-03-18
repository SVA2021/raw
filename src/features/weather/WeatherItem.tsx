import s from './Holidays.module.scss';
import ReactCountryFlag from "react-country-flag"
import { Highlighted, InlineText, PlainText, Title } from '../../components/common/Typography';
import { WeatherType } from './weatherTypes';
import { useEffect, useState } from 'react';
import { getWeatherIconURL } from './weatherFunctions';

const WeatherItem = (props: any) => {

	const weather: WeatherType = props.weather;
	
	const [iconURL, setIcon] = useState('');

	useEffect(() => {
		if (weather.icon) setIcon(getWeatherIconURL(weather.icon))
	}, []);

	return (
		<div className={s.main}>
			{/* <PlainText>
				<Title>date:</Title>
				<InlineText withOffset={true}>{holiday.date}</InlineText>
				{holiday.fixed && <Highlighted className={s.fixedLabel}>fixed</Highlighted>}
			</PlainText>

			<PlainText>
				<Title>country:</Title>
				<InlineText withOffset={true}>{holiday.countryCode}</InlineText>
				<ReactCountryFlag className={s.fixedLabel} countryCode={holiday.countryCode} svg />
			</PlainText>

			<PlainText>
				<Title>local name:</Title>
				<InlineText withOffset={true}>{holiday.localName}</InlineText>
			</PlainText>

			<PlainText>
				<Title>name ENG:</Title>
				<InlineText withOffset={true}>{holiday.name}</InlineText>
			</PlainText>

			{holiday.launchYear &&
				<PlainText>
					<Title>launch Year:</Title>
					<InlineText withOffset={true}>{holiday.launchYear}</InlineText>
				</PlainText>
			} */}
		</div>
	)
}

export default WeatherItem;
