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
import { BASE_URL } from "./holidaysAPI";
import s from './Holidays.module.scss';
import LinkToOriginal from "../../components/LinkToOriginal";

const Holidays = () => {

	const dispatch = useAppDispatch();
	const today = getDateString('-');

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);
	const country = useAppSelector(selectCountry);
	const holidayListMode = useAppSelector(selectHolidayListMode);

	useEffect(() => {
		(holidayListMode === 'week')
			? dispatch(getHolidayNextWeekAsync())
			: dispatch(getCountryHolydaysAsync(country.countryCode));
	}, []);

	return (
		<div className="holidays">
			<header className={s.header}>
				<div className={s.title}>
					<SectionTitle>Holidays</SectionTitle>
					<LinkToOriginal link={BASE_URL} height={'2rem'} />
				</div>
				<HolidaySettings today={today} />
			</header>
			<HolidaysList queryStatus={queryStatus} holidayList={holidayList} />
		</div>
	)
}

export default Holidays;