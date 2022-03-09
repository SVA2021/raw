import { useEffect, useState } from 'react';
import { holidaysAPI } from './holidaysAPI';
import s from './HolidayItem.module.scss';

let quote = {
	"q": "Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on.",
	"a": "Criss Jami",
	"c": "136",
	"h": "<blockquote>&ldquo;Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
};

const HolidayItem = () => {

	let result = holidaysAPI.getHolidaysNextWeek();
	useEffect(() => {
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