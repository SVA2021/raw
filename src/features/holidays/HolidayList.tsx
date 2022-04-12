import HolidayItem from "./HolidayItem";
import { 
	getCountryHolydaysAsync,
	getHolidayNextWeekAsync,
	selectCountry,
	selectHolidayList,
	selectHolidayListMode,
	selectHolidayQueryStatus,
} from "./holidaySlice";
import Loading from "../../components/common/Loading/Loading";
// import s from './Holidays.module.scss';
import SliderWrapper from "../../components/hoc/SliderWrapper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { useEffect } from "react";

const HolidaysList = (props: any) => {
	// const dispatch = useAppDispatch();

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);

	// const country = useAppSelector(selectCountry);
	// const holidayListMode = useAppSelector(selectHolidayListMode);
	// const holidayList = props.holidayList;
	// const queryStatus = props.queryStatus;

	// useEffect(() => {
	// 	(holidayListMode === 'week')
	// 		? dispatch(getHolidayNextWeekAsync())
	// 		: dispatch(getCountryHolydaysAsync(country.countryCode));
	// }, [holidayListMode]);

	if (queryStatus === 'loading' || queryStatus === 'failed') {
		return <Loading text={queryStatus} />;
	}
	// const baseArray = [{d: 0},{d: 0},{d: 0},{d: 0},{d: 0},];
// debugger
	return (
		// <div className={s.holidayListWrapper}>
		// <div className={s.list}>
		// 	{holidayList.map((holiday: HolidayItemType) =>
		// 		<HolidayItem key={String(Math.random()).toLowerCase()} holiday={holiday} />)}
		// </div>
		// </div>

		
		<SliderWrapper
			array={holidayList}
			step={220}
			Component={HolidayItem}
		/>
	)
}

export default HolidaysList;