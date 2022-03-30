import { ModeType } from "./pomodoroTypes"

const COLOR_PAUSE = 'orange';
const COLOR_WORK = 'blue';
const COLOR_SHORT_BREAK = 'green';
const COLOR_LONG_BREAK = 'lawngreen';

export const chooseColor = (mode: ModeType, isRunning: boolean) => {
	let result = 'inherit';
	if (mode === undefined || isRunning === undefined) return result;
	if (!isRunning && mode === 'pause') result = COLOR_PAUSE;
	if (isRunning && mode === 'work') result = COLOR_WORK;
	if (isRunning && mode === 'short') result = COLOR_SHORT_BREAK;
	if (isRunning && mode === 'long') result = COLOR_LONG_BREAK;
	return result;
}

export const showTime = () => {
	
}

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
