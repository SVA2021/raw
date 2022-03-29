import { InlineText, PlainText, Title } from "../../components/common/Typography";
import { useAppSelector } from '../../app/hooks';
import s from './Pomodoro.module.scss';
import { selectMode, selectStatistic } from "./pomodoroSlice";

const PomodoroStatistic = () => {
	const mode = useAppSelector(selectMode);
	const statistic = useAppSelector(selectStatistic);

	return (
		<div className={s.statistic}>
			<PlainText>
				<Title>status:</Title>
				<InlineText withOffset={true}>{mode}</InlineText>
			</PlainText>
			<PlainText>
				<Title>session:</Title>
				<InlineText withOffset={true}>{statistic.sessions} / 4</InlineText>
			</PlainText>
		</div>
	)
}

export default PomodoroStatistic;