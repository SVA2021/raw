import { useEffect, useState } from "react";
import { normalizeDateString } from "../../app/commonFunctions";
// import { useAppSelector } from "../../app/hooks";
import { InlineText, } from "../../components/common/Typography";
import s from './Pomodoro.module.scss';
import { chooseColor } from "./pomodoroFunctions";
// import { selectSettings } from "./pomodoroSlice";

const SECOND = 1000;
const MINUTE = SECOND * 60;

const PomodoroClock = (props: any) => {
	// const timers = useAppSelector(selectSettings);
	const time = props.time;
	const mode = props.mode;
	const isRunning = props.isRunning;
	// const workTime = props.timers.work * MINUTE;
	// const workTime = timers.work * MINUTE;
	// const longBreakTime = props.long * MINUTE;
	// const shortBreakTime = props.short * MINUTE;

	const [clockColor, setClockColor] = useState('');
	useEffect(() => setClockColor(chooseColor(mode, isRunning)), [mode, isRunning]);

	// const [time, setTime] = useState(0);
	const timeMin = Math.floor(time / MINUTE);
	const timeSec = normalizeDateString((time - (timeMin * MINUTE)) / SECOND);

	// useEffect(() => setTime(longBreakTime),[longBreakTime]);
	// useEffect(() => setTime(workTime),[workTime]);

	return (
		<div className={s.clock} style={{ backgroundColor: clockColor }}>
			<InlineText>{timeMin}</InlineText>
			<InlineText>:</InlineText>
			<InlineText>{timeSec}</InlineText>
		</div>
	)
}

export default PomodoroClock;