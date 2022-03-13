import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCountryHolydaysAsync, getHolidayNextWeekAsync, selectCountry, selectHolidayList, selectHolidayListMode, selectHolidayQueryStatus, setHolidayList } from "./holidaySlice";
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";
import s from './Holidays.module.scss';
import Loading from "../../components/Loading";

// function getStorageValue(key:any) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial;
// }

const Holidays = () => {

	const dispatch = useAppDispatch();
	let queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);
	const country = useAppSelector(selectCountry);
	const holidayListMode = useAppSelector(selectHolidayListMode);
	const today = getTodayDateString('-');
	// const keyLocal = 'today';
	// const saved = localStorage.getItem(keyLocal) || '{}';

	// console.log(JSON.parse(saved));
	// console.log(today);
	// console.log(JSON.parse(saved) === today);


	useEffect(() => {
		(holidayListMode === 'week') 
		? dispatch(getHolidayNextWeekAsync()) 
		: dispatch(getCountryHolydaysAsync(country.countryCode));
		// localStorage.setItem(keyLocal, JSON.stringify(today));
		// setHolidayList(result)
	}, []);
	queryStatus = 'loading';
	// if (queryStatus === 'loading') return <Loading/>; 

	return (
		<div className="holidays">
			{(queryStatus === 'loading') ?  <Loading/> : 
			<>
			<SectionTitle>Holidays</SectionTitle>
			<HolidaySettings today={today}/>
			<div className={s.holidayListWrapper}>
				{holidayList.map((holiday) => <HolidayItem key={String(holiday)} holiday={holiday} />)}
			</div>
			</>
			}
		</div>
	)
}

export default Holidays;