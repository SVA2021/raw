import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import {
	selectMode, selectRunningStatus, setFinish, setMode, setSettingsStatus
} from "./pomodoroSlice";
import { ModeType } from "./pomodoroTypes";

const PomodoroMode = (props: any) => {

	const dispatch = useAppDispatch();
	const mode = useAppSelector(selectMode);
	const isRunning = useAppSelector(selectRunningStatus);

	const changeMode = (mode: ModeType) => {
		if (isRunning) return false;
		dispatch(setMode(mode));
		dispatch(setFinish(false));
	}

	return (
		<div className={s.mode}>
			<Button onClick={() => changeMode('work')} active={mode === 'work'}>work</Button>
			<Button onClick={() => changeMode('short')} active={mode === 'short'}>short break</Button>
			<Button onClick={() => changeMode('long')} active={mode === 'long'}>long break</Button>
			<Button onClick={() => dispatch(setSettingsStatus(true))} >settings</Button>
		</div>
	)
}

export default PomodoroMode;