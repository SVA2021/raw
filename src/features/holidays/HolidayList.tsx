import HolidayItem from "./HolidayItem";
import { HolidayItemType, } from "./holidaySlice";
import Loading from "../../components/common/Loading/Loading";
import s from './Holidays.module.scss';

const HolidaysList = (props: any) => {

	const holidayList = props.holidayList;
	const queryStatus = props.queryStatus;

	if (queryStatus === 'loading' || queryStatus === 'failed') {
		return <Loading text={queryStatus} />;
	}

	return (
		// <div className={s.holidayListWrapper}>
		<div className={s.list}>
			{holidayList.map((holiday: HolidayItemType) =>
				<HolidayItem key={String(Math.random()).toLowerCase()} holiday={holiday} />)}
		</div>
		// </div>
	)
}

export default HolidaysList;