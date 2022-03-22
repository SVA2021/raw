import { useEffect, useState } from 'react';
import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button';
import { getLocationsListAsync, selectCountry, selectListStatus, setListStatus } from './weatherSlice';
import LocationList from './LocationList';
import ReactCountryFlag from 'react-country-flag';
import { getDateString } from '../../app/commonFunctions';

const WeatherSettings = (props: any) => {

	const dispatch = useAppDispatch();
	const country = useAppSelector(selectCountry);
	const listStatus = useAppSelector(selectListStatus);

	let today = getDateString('-');
	const [activeCity, setActiveCity] = useState('');

	const getLocations = (city: string) => {
		if (city.length === 0) return false;
		dispatch(getLocationsListAsync(activeCity));
		dispatch(setListStatus(true));
	}

	return (
		<div className={s.settings}>
			<header>
				<PlainText>
					<Title>today:</Title>
					<InlineText withOffset={true}>{today}</InlineText>
					<Title>country:</Title>
					<ReactCountryFlag countryCode={country.countryCode} svg />
					<InlineText withOffset={true}>{country.name}</InlineText>
				</PlainText>
			</header>
			<div className={s.searchArea}>
				<input type="text" className={s.textInput} placeholder={' city name'}
					onChange={(e) => setActiveCity(e.target.value)} />
				<Button withOffset={true} onClick={() => getLocations(activeCity)}>
					Show
				</Button>
			</div>
			{listStatus && <LocationList />}
		</div>
	)
}

export default WeatherSettings;