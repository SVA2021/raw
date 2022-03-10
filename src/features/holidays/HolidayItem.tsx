import { useEffect, useState } from 'react';
import s from './Holidays.module.scss';

import ReactCountryFlag from "react-country-flag"


let response =
{
	"date": "2022-03-15",
	"localName": "Nemzeti ünnep",
	"name": "1848 Revolution Memorial Day",
	"countryCode": "HU",
	"fixed": true,
	"global": false,
	"counties": null,
	"launchYear": null,
	"types": [
		"Public"
	]
}

let code = response.countryCode;

const HolidayItem = () => {

	return (
		<div className={s.main}>
			<span>date: {response.date}</span>

			<ReactCountryFlag countryCode={code} svg />

			<span>countryCode: {response.countryCode}</span>
			<span>localName: {response.localName}</span>
			<span>name: {response.name}</span>
			{response.launchYear && <span>launchYear: {response.launchYear}</span>}
			<label htmlFor="fixed">date fixed?</label>
			<input type="checkbox" name="fixed" checked={response.fixed} />
			<label htmlFor="global">date fixed?</label>
			<input type="checkbox" name="global" checked={response.global} />
		</div>
	)
}

export default HolidayItem;