import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCountryHolydaysAsync, getHolidayNextWeekAsync, HolidayItemType, selectCountry, selectHolidayList, selectHolidayListMode, selectHolidayQueryStatus, setHolidayList } from "./holidaySlice";
import { useEffect } from "react";
import { getTodayDateString } from "../../app/commonFunctions";
import s from './Holidays.module.scss';
import Loading from "../../components/Loading";

const HolidaysList = (props: any) => {

	const holidayList = props.holidayList;
	//  useAppSelector(selectHolidayList);
	let queryStatus = props.queryStatus;
	// useAppSelector(selectHolidayQueryStatus);

	// const dispatch = useAppDispatch();
	// const country = useAppSelector(selectCountry);
	// const holidayListMode = useAppSelector(selectHolidayListMode);
	// const today = getTodayDateString('-');

	// useEffect(() => {
	// 	(holidayListMode === 'week')
	// 		? dispatch(getHolidayNextWeekAsync())
	// 		: dispatch(getCountryHolydaysAsync(country.countryCode));
	// }, []);
	// queryStatus = 'loading';

	if (queryStatus === 'loading') return <Loading />;

	return (
		// <div className="holidays">
		<div className={s.holidayListWrapper}>
			{holidayList.map((holiday: HolidayItemType) =>
				<HolidayItem key={String(holiday)} holiday={holiday} />)}
		</div>
		// 	}
		// </div>
	)
}

export default HolidaysList;