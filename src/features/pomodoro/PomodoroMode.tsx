import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { selectMode, setMode, setSettingsStatus } from "./pomodoroSlice";
import { ModeType } from "./pomodoroTypes";

const PomodoroMode = (props:any) => {

	const mode = props.mode;
	// const mode = useAppSelector(selectMode);
	const dispatch = useAppDispatch();

	const changeMode = (mode: ModeType) => {
		dispatch(setMode(mode));
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