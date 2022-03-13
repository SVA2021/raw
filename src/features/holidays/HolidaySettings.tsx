import { useEffect, useState } from 'react';
import s from './Holidays.module.scss';

import ReactCountryFlag from "react-country-flag"
import { Highlighted, InlineText, PlainText, Title } from '../../components/common/Typography';
import { Country, getCountryHolydaysAsync, getHolidayNextWeekAsync, HolidayItemType, selectCountriesList, selectCountry, setCountry } from './holidaySlice';
import { getTodayDateString } from '../../app/commonFunctions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button';
import { getCountryByCode } from './holidaysAPI';

// const showCountry = (activeCountry: any) => {
// 	dispatch(getCountryHolydaysAsync(activeCountry));
// }

const HolidaySettings = (props: any) => {

	const dispatch = useAppDispatch();
	const country = useAppSelector(selectCountry);
	const countriesList = useAppSelector(selectCountriesList);
	const today = props.today;

	const showCountry = (countryCode: string) => {
		let country = getCountryByCode(countryCode, countriesList);
		dispatch(setCountry(country));
		dispatch(getCountryHolydaysAsync(country.countryCode));
	}

	const countryName = country.name;
	const countryCode = country.countryCode;

	const [activeCountry, setCountryCode] = useState('');
	// const [activeCountry, setActiveCountry] = useState(country);

	useEffect(() => {
		setCountryCode(countryCode)
	}, [countryCode]);

	// useEffect(() => {
	// 	setActiveCountry(country)
	// }, [country]);


	return (
		<div className={s.settings}>
			<header>
				<PlainText>
					<Title>today:</Title>
					<InlineText withOffset={true}>{today}</InlineText>
					{/* </PlainText>
				<PlainText> */}
					<Title>country:</Title>
					<InlineText withOffset={true}>{countryName}</InlineText>
					<ReactCountryFlag countryCode={countryCode} svg />
				</PlainText>
			</header>

			<div className={s.buttonArea}>

				<label>
					<Title>select country:</Title>
					<select
						value={activeCountry}
						onChange={(e) => setCountryCode(e.target.value)}
					// value={activeCountry}
					// onChange={(e) => setActiveCountry(e.target.value)}
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
					className={s.buttonCountry}
					withOffset={true}
					onClick={() => showCountry(activeCountry)}
				>
					Show
				</Button>
				<Button
					className={s.buttonNextWeek}
					withOffset={true}
					onClick={() => dispatch(getHolidayNextWeekAsync())}
				>
					Show Next Week Holidays
				</Button>
			</div>
		</div>
	)
}

export default HolidaySettings;