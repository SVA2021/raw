import { SectionTitle } from "../../components/common/Typography/Typography";
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
import { getDateString } from "../../app/commonFunctions";
import HolidaysList from "./HolidayList";

const Holidays = () => {

	const dispatch = useAppDispatch();
	const today = getDateString('-');

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);
	const country = useAppSelector(selectCountry);
	const holidayListMode = useAppSelector(selectHolidayListMode);

	// const keyLocal = 'todayHoliday';

	useEffect(() => {
		// localStorage.setItem(keyLocal, JSON.stringify(today));

		(holidayListMode === 'week')
			? dispatch(getHolidayNextWeekAsync())
			: dispatch(getCountryHolydaysAsync(country.countryCode));
	}, []);

	return (
		<div className="holidays">
			<SectionTitle>Holidays</SectionTitle>
			<HolidaySettings today={today} />
			<HolidaysList queryStatus={queryStatus} holidayList={holidayList} />
		</div>
	)
}

export default Holidays;