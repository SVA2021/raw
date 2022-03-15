import { SectionTitle } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";
import { weatherAPI } from "./weatherAPI";

const Weather = () => {

	const getData = async  () => {
		const response = await weatherAPI.getWeather();
		console.log(response);
		
		return response;
	}
	// const dispatch = useAppDispatch();
	// const today = getTodayDateString('-');

	// const queryStatus = useAppSelector(selectHolidayQueryStatus);
	// const holidayList = useAppSelector(selectHolidayList);
	// const country = useAppSelector(selectCountry);
	// const holidayListMode = useAppSelector(selectHolidayListMode);

	// const keyLocal = 'todayHoliday';

	useEffect(() => {
		// localStorage.setItem(keyLocal, JSON.stringify(today));
		let result = getData();
		console.log(result);
		
		// (holidayListMode === 'week')
		// 	? dispatch(getHolidayNextWeekAsync())
		// 	: dispatch(getCountryHolydaysAsync(country.countryCode));
	}, []);

	return (
		<div className="weather">
			<SectionTitle>Weather</SectionTitle>
			{/* <HolidaySettings today={today} /> */}
			{/* <HolidaysList queryStatus={queryStatus} holidayList={holidayList} /> */}
		</div>
	)
}

export default Weather;
