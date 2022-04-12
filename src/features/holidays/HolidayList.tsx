import HolidayItem from "./HolidayItem";
import { selectHolidayList, selectHolidayQueryStatus, } from "./holidaySlice";
import Loading from "../../components/common/Loading/Loading";
import SliderWrapper from "../../components/hoc/SliderWrapper";
import { useAppSelector } from "../../app/hooks";

const HolidaysList = (props: any) => {

	const queryStatus = useAppSelector(selectHolidayQueryStatus);
	const holidayList = useAppSelector(selectHolidayList);

	if (queryStatus === 'loading' || queryStatus === 'failed') {
		return <Loading text={queryStatus} />;
	}

	return (
		<SliderWrapper
			array={holidayList}
			step={220}
			Component={HolidayItem}
		/>
	)
}

export default HolidaysList;