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
	setCountriesList,
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

	// const keyLocal = 'todayHoliday';
	// const saved = localStorage.getItem(keyLocal) || '{}';
	// const hasLocalCopy = JSON.parse(saved) === today;

	useEffect(() => {
		// let key = 'countriesList';
		// if (hasLocalCopy) {
		// 	const saved = localStorage.getItem(key) || '{}';
		// 	const countriesList = JSON.parse(saved);
		// 	dispatch(setCountriesList(countriesList));
		// } else {
			dispatch(getCountriesListAsync());
		// }
		// if (countriesList.length > 1) {
		// 	localStorage.setItem(key, JSON.stringify(countriesList));
		// }
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
					<Title>country:</Title>
					<InlineText withOffset={true}>{countryName}</InlineText>
					<ReactCountryFlag countryCode={countryCode} svg />
				</PlainText>
			</header>
			<div className={s.buttonArea}>
				<label>
					<Title>select country:</Title>
					<Button
						active={listMode === 'country'}
						withOffset={true}
						onClick={() => showCountry(activeCountry)}
					>
						Show
					</Button>
					<select className={s.selection}
						value={activeCountry}
						onChange={(e) => setCountryCode(e.target.value)}
					>
						{countriesList.map((option: any) =>
							<option
								key={option.countryCode.toLowerCase()}
								value={option.countryCode}
							>
								{option.name}
							</option>
						)
						}
					</select>
				</label>
				<Button
					active={listMode === 'week'}
					withOffset={true}
					onClick={() => showNextWeek()}
				>
					Show Next Week Holidays
				</Button>
			</div>
		</div>
	)
}

export default HolidaySettings;