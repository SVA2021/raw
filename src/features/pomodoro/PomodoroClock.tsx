import { useEffect, useState } from "react";
import { normalizeDateString } from "../../app/commonFunctions";
import { InlineText, } from "../../components/common/Typography";
import s from './Pomodoro.module.scss';
import { chooseColor } from "./pomodoroFunctions";

const SECOND = 1000;
const MINUTE = SECOND * 60;

const PomodoroClock = (props: any) => {

	const time = props.time * MINUTE;
	const mode = props.mode;
	const isRunning = props.isRunning;

	const [clockColor, setClockColor] = useState('');
	useEffect(() => setClockColor(chooseColor(mode, isRunning)), [mode, isRunning]);

	const timeMin = Math.floor(time / MINUTE);
	const timeSec = normalizeDateString((time - (timeMin * MINUTE)) / SECOND);

	return (
		<div className={s.clock} style={{ backgroundColor: clockColor }}>
			<InlineText>{timeMin}</InlineText>
			<InlineText>:</InlineText>
			<InlineText>{timeSec}</InlineText>
		</div>
	)
}

export default PomodoroClock;