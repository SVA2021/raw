import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { selectMode, selectPause, selectRunningStatus, setMode, setPause, setRunningStatus } from "./pomodoroSlice";
import { ModeType } from './pomodoroTypes';

const PomodoroButtons = ({ setTime = (d: number) => console.log(d), ...props }) => {
	const dispatch = useAppDispatch();
	const mode = useAppSelector(selectMode);
	const pause = useAppSelector(selectPause);
	const isRunning = useAppSelector(selectRunningStatus);
	// const mode = props.mode;
	// const isRunning = props.isRunning;

	const pauseClock = () => {
		dispatch(setPause(!pause));
	}

	const startClock = () => {
		dispatch(setRunningStatus(true));
	}

	const reloadClock = () => {
		dispatch(setRunningStatus(false));
	}

	const skipClock = () => {
		setTime(0);
		dispatch(setRunningStatus(false));
	}
	console.log('pomodoro buttons');

	return (
		<div className={s.buttons}>
			{isRunning && 
			<>
			<Button active={pause} onClick={() => pauseClock()}>pause</Button>
			<Button onClick={() => reloadClock()}>reload</Button>
			<Button onClick={() => skipClock()}>skip</Button>
			</>}
			<Button active={isRunning && !pause} onClick={() => startClock()}>start</Button>
		</div>
	)
}

export default PomodoroButtons;