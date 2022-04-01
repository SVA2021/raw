import classNames from "classnames";
import { useEffect, useState } from "react";
import { normalizeDateString } from "../../app/commonFunctions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { InlineText, } from "../../components/common/Typography";
import s from './Pomodoro.module.scss';
import { chooseColor } from "./pomodoroFunctions";
import { selectMode, selectPause, selectRunningStatus, setRunningStatus } from "./pomodoroSlice";
import { ModeType } from "./pomodoroTypes";

const SECOND = 1000;
const MINUTE = SECOND * 60;

const PomodoroClock = (props: any) => {
	const dispatch = useAppDispatch();
	const mode = useAppSelector(selectMode);
	const pause = useAppSelector(selectPause);
	const isRunning = useAppSelector(selectRunningStatus);

	const time = props.time * SECOND;
	const finishClockStyle = (props.finish) ? s.finish : '';
	const [clockStyle, setClockStyle] = useState('');

	useEffect(() => setClockStyle(chooseColor(mode, isRunning, pause)),
		[mode, isRunning, pause]);

	const timeMin = normalizeDateString(Math.floor(time / MINUTE));
	const timeSec = normalizeDateString((time - (+timeMin * MINUTE)) / SECOND);

	return (
		<div className={classNames(s.clock, s[clockStyle], finishClockStyle)} >
			<InlineText>{timeMin}</InlineText>
			<InlineText>:</InlineText>
			<InlineText>{timeSec}</InlineText>
		</div>
	)
}

export default PomodoroClock;