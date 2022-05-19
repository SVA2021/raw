import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SectionTitle, } from "../../components/common/Typography/Typography";
import PomodoroMode from "./PomodoroMode";
import PomodoroClock from "./PomodoroClock";
import PomodoroButtons from "./PomodoroButtons";
import PomodoroStatistic from "./PomodoroStatistic";
import PomodoroSettings from "./PomodoroSettings";
import {
	selectFinish, selectMode, selectPause,
	selectRunningStatus, selectSettings, selectSettingsStatus,
	selectStatistic, setFinish, setMode,
	setRunningStatus, setStatistic
} from "./pomodoroSlice";
import { nextModePomodoro } from "./pomodoroFunctions";

const Pomodoro = () => {

	const dispatch = useAppDispatch();
	const mode = useAppSelector(selectMode);
	const pause = useAppSelector(selectPause);
	const finish = useAppSelector(selectFinish);
	const timers = useAppSelector(selectSettings);
	const statistic = useAppSelector(selectStatistic);
	const isRunning = useAppSelector(selectRunningStatus);
	const isSettings = useAppSelector(selectSettingsStatus);

	const initialTime = 60 * timers[mode];
	const [time, setTime] = useState(initialTime);

	useEffect(() => setTime(initialTime), [initialTime]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isRunning || pause) return false;
			setTime(time - 1);
		}, 1000);
		if (time === 0) {
			clearInterval(interval);
			dispatch(setFinish(true));
			dispatch(setRunningStatus(false));
			if (finish) {
				(mode === 'work')
					? dispatch(setStatistic({ work: initialTime, break: 0, sessions: 0 }))
					: dispatch(setStatistic({ work: 0, break: initialTime, sessions: 0 }));
				dispatch(setMode(nextModePomodoro(mode, statistic)));
			}
		}
		return () => clearInterval(interval);
	}, [time, isRunning, pause])

	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<div className="pomodoro__inner">
			<PomodoroMode />
			<PomodoroClock time={time} />
			<PomodoroButtons setTime={(sec: number) => setTime(sec)} />
			<PomodoroStatistic />
			{isSettings && <PomodoroSettings />}
			</div>
		</div>
	)
}

export default Pomodoro;