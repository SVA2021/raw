import { useEffect, useState } from 'react';
import { holidaysAPI } from './holidaysAPI';
import s from './HolidayItem.module.scss';
import { getHolidayNextWeekAsync } from './holidaySlice';
import { useAppDispatch } from '../../app/hooks';

let quote = {
	"q": "Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on.",
	"a": "Criss Jami",
	"c": "136",
	"h": "<blockquote>&ldquo;Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
};

let response = [
	{
			"date": "2022-03-11",
			"localName": "Moshoeshoe Day",
			"name": "Moshoeshoe Day",
			"countryCode": "LS",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-11",
			"localName": "Lietuvos nepriklausomybės atkūrimo diena",
			"name": "Day of Restoration of Independence of Lithuania",
			"countryCode": "LT",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-12",
			"localName": "Renovation Day",
			"name": "Renovation Day",
			"countryCode": "GA",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-13",
			"localName": "Anniversario dell'Elezione del Santo Padre",
			"name": "Anniversary of the election of Pope Francis",
			"countryCode": "VA",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Dita e Verës",
			"name": "Summer Day",
			"countryCode": "AL",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Dia de la Constitució",
			"name": "Constitution Day",
			"countryCode": "AD",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Mare de Déu de Meritxell",
			"name": "National Holiday",
			"countryCode": "AD",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Canberra Day",
			"name": "Canberra Day",
			"countryCode": "AU",
			"fixed": false,
			"global": false,
			"counties": [
					"AUS-ACT"
			],
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "March Public Holiday",
			"name": "March Public Holiday",
			"countryCode": "AU",
			"fixed": false,
			"global": false,
			"counties": [
					"AUS-SA"
			],
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Eight Hours Day",
			"name": "Eight Hours Day",
			"countryCode": "AU",
			"fixed": false,
			"global": false,
			"counties": [
					"AUS-TAS"
			],
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Labour Day",
			"name": "Labour Day",
			"countryCode": "AU",
			"fixed": false,
			"global": false,
			"counties": [
					"AUS-VIC"
			],
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Commonwealth Day",
			"name": "Commonwealth Day",
			"countryCode": "GI",
			"fixed": false,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-14",
			"localName": "Taranaki Anniversary Day",
			"name": "Taranaki Anniversary Day",
			"countryCode": "NZ",
			"fixed": false,
			"global": false,
			"counties": [
					"NZ-TKI"
			],
			"launchYear": null,
			"types": [
					"Public"
			]
	},
	{
			"date": "2022-03-15",
			"localName": "Nemzeti ünnep",
			"name": "1848 Revolution Memorial Day",
			"countryCode": "HU",
			"fixed": true,
			"global": true,
			"counties": null,
			"launchYear": null,
			"types": [
					"Public"
			]
	}
]

const getData =  () => {
	let result =  getHolidayNextWeekAsync();
	console.log(result);
}

const HolidayItem = () => {
	const dispatch = useAppDispatch();
let result;
	// let result = holidaysAPI.getHolidaysNextWeek();
	useEffect(() => {
		result = dispatch(getHolidayNextWeekAsync());
		console.log(result);
	}, [result])

	return (
		<div className={s.main}>
			QuoteItem
			<p>{quote.q}</p>
			<p>{quote.a}</p>
			{quote.h}
		</div>
	)
}

export default HolidayItem;