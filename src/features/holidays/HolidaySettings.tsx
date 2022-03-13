import { useEffect, useState } from 'react';
import s from './Holidays.module.scss';
import ReactCountryFlag from "react-country-flag"
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import {
	getCountryHolydaysAsync,
	getHolidayNextWeekAsync,
	selectCountriesList,
	selectCountry,
	selectHolidayListMode,
	setCountry
} from './holidaySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button';
import { getCountryByCode } from './holidaysAPI';

const HolidaySettings = (props: any) => {

	const dispatch = useAppDispatch();
	const country = useAppSelector(selectCountry);
	const listMode = useAppSelector(selectHolidayListMode);
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

	useEffect(() => {
		setCountryCode(countryCode)
	}, [countryCode]);

	const buttonNextWeekStyle = (listMode === 'week') ? 'active' : '';
	const buttonCountryStyle = (listMode === 'country') ? 'active' : '';

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
						className={buttonCountryStyle}
						withOffset={true}
						onClick={() => showCountry(activeCountry)}
					>
						Show
					</Button>
					<select
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
					className={buttonNextWeekStyle}
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