import s from './Holidays.module.scss';
import ReactCountryFlag from "react-country-flag"
import { Highlighted, InlineText, PlainText, Title } from '../../components/common/Typography';
import { HolidayItemType } from './holidaySlice';

type HolidayType = {
	holiday: HolidayItemType
}

const HolidayItem = (props: HolidayType) => {
	const holiday = props.holiday;
	return (
		<div className={s.main}>
			<PlainText>
				<Title>date:</Title>
				<InlineText withOffset={true}>{holiday.date}</InlineText>
				{holiday.fixed && <Highlighted className={s.fixedLabel}>fixed</Highlighted>}
			</PlainText>

			<PlainText>
				<Title>country:</Title>
				<InlineText withOffset={true}>{holiday.countryCode}</InlineText>
				<ReactCountryFlag className={s.fixedLabel} countryCode={holiday.countryCode} svg />
			</PlainText>

			<PlainText>
				<Title>local name:</Title>
				<InlineText withOffset={true}>{holiday.localName}</InlineText>
			</PlainText>

			<PlainText>
				<Title>name ENG:</Title>
				<InlineText withOffset={true}>{holiday.name}</InlineText>
			</PlainText>

			{holiday.launchYear &&
				<PlainText>
					<Title>launch Year:</Title>
					<InlineText withOffset={true}>{holiday.launchYear}</InlineText>
				</PlainText>
			}
		</div>
	)
}

export default HolidayItem;