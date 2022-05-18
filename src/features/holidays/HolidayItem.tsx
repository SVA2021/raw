import { Highlighted, InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import s from './Holidays.module.scss';
import ReactCountryFlag from "react-country-flag"

const HolidayItem = (props: any) => {

	let altText = `flag ${props.countryCode}`;
	
	return (
		<div className={s.item}>
			<PlainText>
				<Title>date:</Title>
				<InlineText withOffset={true}>{props.date}</InlineText>
				{props.fixed && <Highlighted className={s.label}>fixed</Highlighted>}
			</PlainText>
			<PlainText>
				<Title>country:</Title>
				<InlineText withOffset={true}>{props.countryCode}</InlineText>
				<ReactCountryFlag className={s.fixedLabel} countryCode={props.countryCode} alt={altText} svg />
			</PlainText>
			<PlainText>
				<Title>local name:</Title>
				<InlineText className={s.description}>{props.localName}</InlineText>
			</PlainText>
			<PlainText>
				<Title>name ENG:</Title>
				<InlineText className={s.description}>{props.name}</InlineText>
			</PlainText>
			{props.launchYear &&
				<PlainText>
					<Title>launch Year:</Title>
					<InlineText withOffset={true}>{props.launchYear}</InlineText>
				</PlainText>
			}
		</div>
	)
}

export default HolidayItem;