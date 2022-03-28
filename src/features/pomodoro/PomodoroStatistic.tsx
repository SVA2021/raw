import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";

const PomodoroStatistic = () => {
	return (
		<div className={s.statistic}>
			<PlainText>
				<Title>status:</Title>
				<InlineText withOffset={true}>work</InlineText>
			</PlainText>
			<PlainText>
				<Title>session:</Title>
				<InlineText withOffset={true}>1/4</InlineText>
			</PlainText>
		</div>
	)
}

export default PomodoroStatistic;