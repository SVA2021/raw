import { SectionTitle } from "../../components/common/Typography";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	getCountryHolydaysAsync,
	getHolidayNextWeekAsync,
	selectCountry,
	selectHolidayList,
	selectHolidayListMode,
	selectHolidayQueryStatus,
} from "./holidaySlice";
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";
import HolidaysList from "./HolidayList";

const Weather = () => {

	const dispatch = useAppDispatch();
	const today = getTodayDateString('-');

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);
	const country = useAppSelector(selectCountry);
	const holidayListMode = useAppSelector(selectHolidayListMode);

	const keyLocal = 'todayHoliday';

	useEffect(() => {
		localStorage.setItem(keyLocal, JSON.stringify(today));

		(holidayListMode === 'week')
			? dispatch(getHolidayNextWeekAsync())
			: dispatch(getCountryHolydaysAsync(country.countryCode));
	}, []);

	return (
		<div className="weather">
			<SectionTitle>Weather</SectionTitle>
			<HolidaySettings today={today} />
			<HolidaysList queryStatus={queryStatus} holidayList={holidayList} />
		</div>
	)
}