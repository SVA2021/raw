import { SectionTitle, } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PomodoroMode from "./PomodoroMode";
import PomodoroClock from "./PomodoroClock";
import PomodoroButtons from "./PomodoroButtons";
import PomodoroStatistic from "./PomodoroStatistic";
import PomodoroSettings from "./PomodoroSettings";
import { selectSettingsStatus } from "./pomodoroSlice";

const Pomodoro = () => {

	const isSettings = useAppSelector(selectSettingsStatus);

	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<PomodoroMode />
			<PomodoroClock />
			<PomodoroButtons />
			<PomodoroStatistic />
			{isSettings && <PomodoroSettings />}
		</div>
	)
}

export default Pomodoro;