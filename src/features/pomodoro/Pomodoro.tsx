import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SectionTitle, } from "../../components/common/Typography";
import PomodoroMode from "./PomodoroMode";
import PomodoroClock from "./PomodoroClock";
import PomodoroButtons from "./PomodoroButtons";
import PomodoroStatistic from "./PomodoroStatistic";
import PomodoroSettings from "./PomodoroSettings";
import { selectMode, selectPause, selectRunningStatus, selectSettings, selectSettingsStatus, setRunningStatus } from "./pomodoroSlice";

const Pomodoro = () => {

	const dispatch = useAppDispatch();

	const mode = useAppSelector(selectMode);
	const timers = useAppSelector(selectSettings);
	const isRunning = useAppSelector(selectRunningStatus);
	const isSettings = useAppSelector(selectSettingsStatus);
	const pause = useAppSelector(selectPause);

	const initialTime = timers[mode];
	const [time, setTime] = useState(initialTime); // time in second

	useEffect(() => setTime(initialTime), [initialTime]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isRunning || pause) return false;
			setTime(time - 1);
		}, 1000);
		if (time === 0) {
			clearInterval(interval);
			dispatch(setRunningStatus(false));
		}
		return () => clearInterval(interval);
	}, [time, isRunning, pause])

	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<PomodoroMode />
			<PomodoroClock mode={mode} isRunning={isRunning} time={time} />
			<PomodoroButtons mode={mode} isRunning={isRunning} setTime={(sec: number) => setTime(sec)} />
			<PomodoroStatistic />
			{isSettings && <PomodoroSettings timers={timers} />}
		</div>
	)
}

export default Pomodoro;