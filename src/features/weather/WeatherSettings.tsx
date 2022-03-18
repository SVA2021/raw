import { useEffect, useState } from 'react';
import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button';
import { getLocationsListAsync, selectCity, selectCountry, selectLocationsList } from './weatherSlice';
import { weatherAPI } from './weatherAPI';
import LocationList from './LocationList';
import ReactCountryFlag from 'react-country-flag';

const WeatherSettings = (props: any) => {

	const dispatch = useAppDispatch();
	// const city = useAppSelector(selectCity);
	const country = useAppSelector(selectCountry);
	const today = props.today;

	const keyLocal = 'todayWeather';
	const savedKey = localStorage.getItem(keyLocal) || '{}';
	const hasLocalCopy = JSON.parse(savedKey) === today;

	const countryName = country.name;
	const countryCode = country.countryCode;

	const [activeCity, setActiveCity] = useState('');

	const getLocations = (city: string) => {
		dispatch(getLocationsListAsync(activeCity));
	}

	// useEffect(() => {
	// 	// setCountryCode(countryCode);
	// 	console.log(locationsList);

	// }, [locationsList]);

	return (
		<div className={s.settings}>
			<header>
				<PlainText>
					<Title>today:</Title>
					<InlineText withOffset={true}>{today}</InlineText>
					<Title>country:</Title>
					<ReactCountryFlag countryCode={countryCode} svg />
					<InlineText withOffset={true}>{countryName}</InlineText>
				</PlainText>
			</header>
			<div className={s.searchArea}>
				<input type="text" className={s.textInput} placeholder={' city name'}
					onChange={(e) => setActiveCity(e.target.value)} />
				<Button withOffset={true} onClick={() => getLocations(activeCity)}>
					Show
				</Button>
			</div>
			<LocationList />
		</div>
	)
}

export default WeatherSettings;