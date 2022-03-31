import { useEffect, useState } from "react";
import { normalizeDateString } from "../../app/commonFunctions";
import { useAppSelector } from "../../app/hooks";
import { InlineText, } from "../../components/common/Typography";
import s from './Pomodoro.module.scss';
import { chooseColor } from "./pomodoroFunctions";
import { selectMode, selectPause } from "./pomodoroSlice";
import { ModeType } from "./pomodoroTypes";

const SECOND = 1000;
const MINUTE = SECOND * 60;

const PomodoroClock = (props: any) => {
	
	const pause = useAppSelector(selectPause);

	const isRunning = props.isRunning;
	const mode = props.mode;
	const time = props.time * SECOND;

	const [clockColor, setClockColor] = useState('');
	useEffect(() => setClockColor(chooseColor(mode, isRunning, pause)),
		[mode, isRunning, pause]);

	const timeMin = normalizeDateString(Math.floor(time / MINUTE));
	const timeSec = normalizeDateString((time - (+timeMin * MINUTE)) / SECOND);

	return (
		<div className={s.clock} style={{ backgroundColor: clockColor }}>
			<InlineText>{timeMin}</InlineText>
			<InlineText>:</InlineText>
			<InlineText>{timeSec}</InlineText>
		</div>
	)
}

export default PomodoroClock;