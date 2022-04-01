import { SubTitle, } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import {
	DEFAULT_TIMERS, selectSettings, setSettingsStatus, setSettingsValues
} from "./pomodoroSlice";
import { useState } from "react";
import { InputRangeModule } from "../../components/common/InputRangeModule/InputRangeModule";

const PomodoroSettings = (props: any) => {
	const dispatch = useAppDispatch();
	const timers = useAppSelector(selectSettings);

	const workLimit = { min: 1, max: 30 };
	const [workTimer, setWorkTimer] = useState(timers.work);

	const shortBreakLimit = { min: 1, max: 10 };
	const [shortBreakTimer, setShortBreakTimer] = useState(timers.short);

	const longBreakLimit = { min: 1, max: 30 };
	const [longBreakTimer, setLongBreakTimer] = useState(timers.long);

	const setTimers = () => {
		dispatch(setSettingsValues(
			{
				work: workTimer,
				short: shortBreakTimer,
				long: longBreakTimer
			}
		));
		dispatch(setSettingsStatus(false));
	}

	const setDefaultTimers = () => {
		dispatch(setSettingsValues(DEFAULT_TIMERS));
		dispatch(setSettingsStatus(false));
	}

	const closeSettings = () => {
		dispatch(setSettingsStatus(false));
	}

	return (
		<div className={s.settings}>
			<SubTitle>settings</SubTitle>
			<InputRangeModule
				className={s.settings__item}
				description={'work'}
				value={workTimer} min={workLimit.min} max={workLimit.max}
				onChangeFunction={(val: number) => setWorkTimer(val)}
			/>
			<InputRangeModule
				className={s.settings__item}
				description={'short'}
				value={shortBreakTimer} min={shortBreakLimit.min} max={shortBreakLimit.max}
				onChangeFunction={(val: number) => setShortBreakTimer(val)}
			/>
			<InputRangeModule
				className={s.settings__item}
				description={'long'}
				value={longBreakTimer} min={longBreakLimit.min} max={longBreakLimit.max}
				onChangeFunction={(val: number) => setLongBreakTimer(val)}
			/>
			<Button onClick={() => setTimers()}>set timers</Button>
			<Button onClick={() => setDefaultTimers()}>reset</Button>
			<button className={s.closeBtn} onClick={() => closeSettings()}>X</button>
		</div>
	)
}

export default PomodoroSettings;