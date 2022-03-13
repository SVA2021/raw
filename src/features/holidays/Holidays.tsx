import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCountriesListAsync, getCountryHolydaysAsync, getHolidayNextWeekAsync, selectCountriesList, selectCountry, selectHolidayList, selectHolidayListMode, selectHolidayQueryStatus, setHolidayList } from "./holidaySlice";
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";
import s from './Holidays.module.scss';
import Loading from "../../components/Loading";
import HolidaysList from "./HolidayList";

// function getStorageValue(key:any) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial;
// }

const Holidays = () => {

	const dispatch = useAppDispatch();
	const today = getTodayDateString('-');

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);
	const country = useAppSelector(selectCountry);
	const holidayListMode = useAppSelector(selectHolidayListMode);
	

	// const keyLocal = 'today';
	// const saved = localStorage.getItem(keyLocal) || '{}';

	// console.log(JSON.parse(saved));
	// console.log(today);
	// console.log(JSON.parse(saved) === today);


	useEffect(() => {
		dispatch(getCountriesListAsync());
		(holidayListMode === 'week')
			? dispatch(getHolidayNextWeekAsync())
			: dispatch(getCountryHolydaysAsync(country.countryCode));
		// localStorage.setItem(keyLocal, JSON.stringify(today));
		// setHolidayList(result)
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