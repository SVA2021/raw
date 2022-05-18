import { useEffect, useState } from 'react';
import s from './Holidays.module.scss';
import ReactCountryFlag from "react-country-flag"
import { InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import {
	getCountriesListAsync,
	getCountryHolydaysAsync,
	getHolidayNextWeekAsync,
	selectCountriesList,
	selectCountry,
	selectHolidayListMode,
	setCountry,
	setHolidayListMode
} from './holidaySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button/Button';
import { getCountryByCode } from './holidaysAPI';

const HolidaySettings = (props: any) => {

	const dispatch = useAppDispatch();
	const country = useAppSelector(selectCountry);
	const listMode = useAppSelector(selectHolidayListMode);
	const countriesList = useAppSelector(selectCountriesList);
	const today = props.today;

	useEffect(() => {
		dispatch(getCountriesListAsync());
	}, []);

	const showCountry = (countryCode: string) => {
		let country = getCountryByCode(countryCode, countriesList);
		dispatch(setHolidayListMode('country'));
		dispatch(setCountry(country));
		dispatch(getCountryHolydaysAsync(country.countryCode));
	}

	const showNextWeek = () => {
		dispatch(setHolidayListMode('week'));
		dispatch(getHolidayNextWeekAsync());
	}

	const countryName = country.name;
	const countryCode = country.countryCode;

	const [activeCountry, setCountryCode] = useState('');

	useEffect(() => {
		setCountryCode(countryCode);
	}, [countryCode]);

	return (
		<div className={s.settings}>
			<header>
				<PlainText>
					<Title>today:</Title>
					<InlineText withOffset={true}>{today}</InlineText>
				</PlainText>
				<PlainText>
					<Title>country:</Title>
					<InlineText withOffset={true}>{countryName}</InlineText>
					<ReactCountryFlag countryCode={countryCode}  alt={`flag ${countryCode}`} svg />
				</PlainText>
			</header>
			<div className={s.select__wrapper}>
				<label>
					<Title>select country:</Title>
					<select className={s.select}
						value={activeCountry}
						onChange={(e) => setCountryCode(e.target.value)}
					>
						{countriesList.map((option: any) =>
							<option key={String(Math.random()).toLowerCase()} value={option.countryCode}>
								{option.name}
							</option>
						)}
					</select>
				</label>
			</div>
			<div className={s.buttonArea}>
				<Button active={listMode === 'country'} onClick={() => showCountry(activeCountry)} >
					country
				</Button>
				<Button active={listMode === 'week'} onClick={() => showNextWeek()} >
					Next Week
				</Button>
			</div>
		</div>
	)
}

export default HolidaySettings;