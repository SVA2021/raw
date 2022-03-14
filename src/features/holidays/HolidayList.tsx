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
			<div className={s.holidayList}>
				{holidayList.map((holiday: HolidayItemType) =>
					<HolidayItem
						key={holiday.countryCode + String(Math.random())}
						holiday={holiday}
					/>)}
			</div>
		</div>
	)
}

export default HolidaysList;