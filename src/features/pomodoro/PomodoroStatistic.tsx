import { Highlighted,  PlainText, Title } from "../../components/common/Typography/Typography";
import { useAppSelector } from '../../app/hooks';
import s from './Pomodoro.module.scss';
import { selectMode, selectStatistic } from "./pomodoroSlice";
import { nextModePomodoro, normalizeSession } from "./pomodoroFunctions";
import { convertMinuteToHHMM } from "../../app/commonFunctions";

const PomodoroStatistic = () => {
	const mode = useAppSelector(selectMode);
	const statistic = useAppSelector(selectStatistic);
	const nextMode = nextModePomodoro(mode, statistic);
	const session = normalizeSession(statistic.sessions);
	const workStat = convertMinuteToHHMM(statistic.work);
	const relaxStat = convertMinuteToHHMM(statistic.break);
	return (
		<>
			<div className={s.statistic}>
				<PlainText>
					<Title>status:</Title>
					<Highlighted withOffset={true}>{mode}</Highlighted>
				</PlainText>
				<PlainText>
					<Title>next:</Title>
					<Highlighted withOffset={true}>{nextMode}</Highlighted>
				</PlainText>
				<PlainText>
					<Title>session:</Title>
					<Highlighted withOffset={true}>{session} / 4</Highlighted>
				</PlainText>
			</div>
			<div className={s.statistic}>
				<PlainText>
					<Title>total work time:</Title>
					<Highlighted withOffset={true}>{workStat}</Highlighted>
				</PlainText>
				<PlainText>
					<Title>total relax time:</Title>
					<Highlighted withOffset={true}>{relaxStat}</Highlighted>
				</PlainText>
			</div>
		</>
	)
}

export default PomodoroStatistic;