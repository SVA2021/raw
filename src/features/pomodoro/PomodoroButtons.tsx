import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { nextModePomodoro } from './pomodoroFunctions';
import {
	selectMode, selectPause, selectRunningStatus,
	selectSettings, selectStatistic, setFinish,
	setMode, setPause, setRunningStatus, setStatistic
} from "./pomodoroSlice";

const PomodoroButtons = ({ setTime = (d: number) => console.log(d), ...props }) => {
	const dispatch = useAppDispatch();
	const mode = useAppSelector(selectMode);
	const pause = useAppSelector(selectPause);
	const isRunning = useAppSelector(selectRunningStatus);
	const timers = useAppSelector(selectSettings);
	const statistic = useAppSelector(selectStatistic);

	const pauseClock = () => {
		dispatch(setPause(!pause));
	}

	const startClock = () => {
		dispatch(setFinish(false));
		dispatch(setRunningStatus(true));
		if (mode === 'work') dispatch(setStatistic({ work: 0, break: 0, sessions: 1 }));
	}

	const reloadClock = () => {
		setTime(timers[mode]);
	}

	const skipClock = () => {
		setTime(0);
		dispatch(setMode(nextModePomodoro(mode, statistic)));
	}

	return (
		<div className={s.buttons}>
			{
				isRunning ?
					<>
						<Button onClick={() => reloadClock()}>reload</Button>
						<Button onClick={() => pauseClock()} active={pause} >pause</Button>
						<Button onClick={() => skipClock()}>skip</Button>
					</>
					: <Button onClick={() => startClock()}>start {mode}</Button>
			}
		</div>
	)
}

export default PomodoroButtons;