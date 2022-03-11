import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";
import HolidaySettings from "./HolidaySettings";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getHolidayNextWeekAsync, selectHolidayList, setHolidayList } from "./holidaySlice";
import { useEffect } from "react";

const Holidays = () => {

	const dispatch = useAppDispatch();
	
	const holidayList = useAppSelector(selectHolidayList);

	
	useEffect(() => {
		dispatch(getHolidayNextWeekAsync())
		// setHolidayList(result)
  },[]);

	return (
		<div className="holidays">
			<SectionTitle>Holidays</SectionTitle>
			<HolidaySettings />
			{holidayList.map((holiday) => <HolidayItem holiday={holiday} />)}
		</div>
	)
}

export default Holidays;