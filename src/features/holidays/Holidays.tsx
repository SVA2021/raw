import { SectionTitle } from "../../components/common/Typography";
import HolidayItem from "./HolidayItem";

const Holidays = () => {
	return (
		<div className="holidays">
			<SectionTitle>Holidays</SectionTitle>
			
			<HolidayItem />
			<HolidayItem />
			<HolidayItem />
			<HolidayItem />
		</div>
	)
}

export default Holidays;