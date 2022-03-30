import { SectionTitle, } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PomodoroMode from "./PomodoroMode";
import PomodoroClock from "./PomodoroClock";
import PomodoroButtons from "./PomodoroButtons";
import PomodoroStatistic from "./PomodoroStatistic";
import PomodoroSettings from "./PomodoroSettings";
import { selectMode, selectRunningStatus, selectSettings, selectSettingsStatus } from "./pomodoroSlice";
import { useEffect } from "react";

const Pomodoro = () => {

	const timers = useAppSelector(selectSettings);
	const mode = useAppSelector(selectMode);
	const isRunning = useAppSelector(selectRunningStatus);
	const isSettings = useAppSelector(selectSettingsStatus);

	useEffect(() => console.log(timers),[timers])

	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<PomodoroMode mode={mode} />
			<PomodoroClock mode={mode} isRunning={isRunning} time={timers} />
			<PomodoroButtons />
			<PomodoroStatistic />
			{isSettings && <PomodoroSettings timers={timers} />}
		</div>
	)
}

export default Pomodoro;