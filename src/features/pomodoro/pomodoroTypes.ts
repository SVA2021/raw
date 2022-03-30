export type ModeType = 'work' | 'long' | 'short' | 'pause';

export interface SettingsType {
	work: number,
	short: number,
	long: number,
}

export interface StatisticType {
	sessions: number,
	work: number,
	break: number,
}