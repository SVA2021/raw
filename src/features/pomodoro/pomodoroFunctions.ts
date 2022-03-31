import { useEffect, useState } from "react";
import { ModeType, StatisticType } from "./pomodoroTypes"

const COLOR_PAUSE = 'orange';
const COLOR_WORK = 'blue';
const COLOR_SHORT_BREAK = 'green';
const COLOR_LONG_BREAK = 'lawngreen';

export const chooseColor = (mode: ModeType, isRunning: boolean, pause = false) => {
	let result = 'inherit';
	if (mode === undefined || isRunning === undefined) return result;
	if (isRunning && mode === 'work') result = COLOR_WORK;
	if (isRunning && mode === 'short') result = COLOR_SHORT_BREAK;
	if (isRunning && mode === 'long') result = COLOR_LONG_BREAK;
	if (isRunning && pause) result = COLOR_PAUSE;
	return result;
}

export const nextModePomodoro = (mode: ModeType, statistic :StatisticType): ModeType  => {
	let session = statistic.sessions;
	if ( mode !== 'work') return 'work';
	if (session === 4) return 'long';
	return 'short';
}





// export const useCountdown = (sec: number) => {
// useEffect(() => {
// 	const interval = setInterval((sec: number) => {
// 		if (sec === 0) return false;
// 		sec-- ;
// 	}, 1000)
// 	return () => clearInterval(interval);
// },[sec])
// return sec;
// };


// useEffect(() => {
// 	const interval = setInterval((sec: number) => {
// 		if (sec === 0) return false
// 		setTime(time - 1);
// 	}, 1000)
// 	return () => clearInterval(interval);
// },[time])

// export const showTime = () => {
	
// 	timerID = setInterval(() => {
// 			counterBack = Number(counterBack - 1000);
// 			if (counterBack <= 0) {
// 					setBack('red');
// 					clearInterval(timerID);
// 					startBtn.addEventListener('click', startTime);
// 			}
// 			showTime(counterBack, 'clock');
// 	}, 1000);
// }

// function startTime() {
// 	setBack('blue');

// 	timerID = setInterval(() => {
// 			counterBack = Number(counterBack - 1000);
// 			if (counterBack <= 0) {
// 					setBack('red');
// 					clearInterval(timerID);
// 					startBtn.addEventListener('click', startTime);
// 			}
// 			showTime(counterBack, 'clock');
// 	}, 1000);

// 	startBtn.removeEventListener('click', startTime);
// }
