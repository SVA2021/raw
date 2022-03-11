import { useEffect, useState } from 'react';
import s from './Holidays.module.scss';

import ReactCountryFlag from "react-country-flag"
import { Highlighted, InlineText, PlainText, Title } from '../../components/common/Typography';
import { getCountryHolydaysAsync, HolidayItemType, selectCountriesList, selectCountry } from './holidaySlice';
import { getTodayDateString } from '../../app/commonFunctions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button';


let response =
{
	"date": "2022-03-15",
	"localName": "Nemzeti ünnep",
	"name": "1848 Revolution Memorial Day",
	"countryCode": "HU",
	"fixed": true,
	"global": false,
	"counties": null,
	"launchYear": 2000,
	"types": [
		"Public"
	]
}

const code = response.countryCode;

const HolidaySettings = (props: any) => {
	
	const dispatch = useAppDispatch();
	const country = useAppSelector(selectCountry);
	const countriesList = useAppSelector(selectCountriesList);

	const countryName = country.name;
	const countryCode = country.countryCode;
	
	const today = getTodayDateString('-');
	const [activeCountry, setCountry] = useState('');

	useEffect(() => {
		setCountry(countryCode)
  },[countryCode]);

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
					<select value={activeCountry} onChange={(e) => setCountry(e.target.value)}>
						{countriesList.map(
							(option: any) => <option
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
					onClick={() => dispatch(getCountryHolydaysAsync(activeCountry))}
				>
					Show
				</Button>
				<Button
					className={s.buttonNextWeek}
					withOffset={true}
					onClick={(e) => console.log(e)}
				>
					Next Week Holidays
				</Button>
			</div>
		</div>
	)
}

export default HolidaySettings;