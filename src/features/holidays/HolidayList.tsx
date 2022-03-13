import HolidayItem from "./HolidayItem";
import { HolidayItemType, } from "./holidaySlice";
import Loading from "../../components/Loading";
import s from './Holidays.module.scss';

const HolidaysList = (props: any) => {

	const holidayList = props.holidayList;
	const queryStatus = props.queryStatus;

	if (queryStatus === 'loading' || queryStatus === 'fail') {
		return <Loading text={queryStatus} />;
	}

	return (
		<div className={s.holidayListWrapper}>
			{holidayList.map((holiday: HolidayItemType) =>
				<HolidayItem key={String(holiday)} holiday={holiday} />)}
		</div>
	)
}

export default HolidaysList;