import { ModeType, StatisticType } from "./pomodoroTypes"

export const chooseColor = (mode: ModeType, isRunning: boolean, pause = false) => {
	if (mode === undefined || isRunning === undefined) return 'idle';
	if (pause) return 'pause';
	if (isRunning) return mode;
	return 'idle';
}

export const nextModePomodoro = (mode: ModeType, statistic :StatisticType): ModeType  => {
	let session = statistic.sessions;
	if ( mode !== 'work') return 'work';
	if (session === 4) return 'long';
	return 'short';
}

export const startSession = (mode: ModeType, statistic :StatisticType): ModeType  => {
	let session = statistic.sessions;
	if ( mode !== 'work') return 'work';
	if (session === 4) return 'long';
	return 'short';
}

export const normalizeSession = (session: number): number => {
	if (!session || session === 0) return 0;
	if (session % 4 === 0) return 4;
	return session % 4;
}