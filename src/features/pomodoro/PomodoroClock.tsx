import classNames from "classnames";
import { useEffect, useState } from "react";
import { normalizeDateString } from "../../app/commonFunctions";
import {  useAppSelector } from "../../app/hooks";
import { InlineText, } from "../../components/common/Typography/Typography";
import s from './Pomodoro.module.scss';
import { chooseColor } from "./pomodoroFunctions";
import { 
	selectFinish, selectMode, selectPause, selectRunningStatus 
} from "./pomodoroSlice";

const PomodoroClock = (props: any) => {
	const mode = useAppSelector(selectMode);
	const pause = useAppSelector(selectPause);
	const finish = useAppSelector(selectFinish);
	const isRunning = useAppSelector(selectRunningStatus);

	const time = props.time;
	const finishClockStyle = (finish) ? s.finish : '';
	const [clockStyle, setClockStyle] = useState('');

	useEffect(() => setClockStyle(chooseColor(mode, isRunning, pause)),
		[mode, isRunning, pause]);

	const timeMin = normalizeDateString(Math.floor(time / 60));
	const timeSec = normalizeDateString(time % 60);

	return (
		<div className={classNames(s.clock, s[clockStyle], finishClockStyle)} >
			<InlineText className={s.digit}>{timeMin}</InlineText>
			<InlineText className={s.digit} withOffset={true}>:</InlineText>
			<InlineText className={s.digit}>{timeSec}</InlineText>
		</div>
	)
}

export default PomodoroClock;