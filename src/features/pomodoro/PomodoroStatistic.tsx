import { InlineText, PlainText, Title } from "../../components/common/Typography";
import { useAppSelector } from '../../app/hooks';
import s from './Pomodoro.module.scss';
import { selectMode, selectStatistic } from "./pomodoroSlice";
import { nextModePomodoro } from "./pomodoroFunctions";

const PomodoroStatistic = () => {
	const mode = useAppSelector(selectMode);
	const statistic = useAppSelector(selectStatistic);
	const nextMode = nextModePomodoro(mode, statistic);

	return (
		<div className={s.statistic}>
			<PlainText>
				<Title>status:</Title>
				<InlineText withOffset={true}>{mode}</InlineText>
			</PlainText>
			<PlainText>
				<Title>next:</Title>
				<InlineText withOffset={true}>{nextMode}</InlineText>
			</PlainText>
			<PlainText>
				<Title>session:</Title>
				<InlineText withOffset={true}>{statistic.sessions} / 4</InlineText>
			</PlainText>
		</div>
	)
}

export default PomodoroStatistic;