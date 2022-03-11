import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getHolidayNextWeekAsync, selectHolidayList, setHolidayList } from "./holidaySlice";
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";

// function getStorageValue(key:any) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial;
// }

const Holidays = () => {

	const dispatch = useAppDispatch();
	const holidayList = useAppSelector(selectHolidayList);
	const keyLocal = 'today';
	const today = getTodayDateString('-');
	const saved = localStorage.getItem(keyLocal) || '{}';

	console.log(JSON.parse(saved));
	console.log(today);
	console.log(JSON.parse(saved) === today);


	useEffect(() => {
		// dispatch(getHolidayNextWeekAsync());
		localStorage.setItem(keyLocal, JSON.stringify(today));
		// setHolidayList(result)
	}, []);

	return (
		<div className="holidays">
			<SectionTitle>Holidays</SectionTitle>
			<HolidaySettings />
			{holidayList.map((holiday) => <HolidayItem key={String(holiday)} holiday={holiday} />)}
		</div>
	)
}

export default Holidays;