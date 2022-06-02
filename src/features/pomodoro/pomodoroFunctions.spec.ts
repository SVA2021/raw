import { chooseColor, nextModePomodoro, startSession, normalizeSession } from "./pomodoroFunctions";

describe('chooseColor function', () => {
	// it('undefined cases', () => {
	// 	expect(chooseColor(undefined, true)).toBe('idle');
	// 	expect(chooseColor('long', undefined)).toBe('idle');
	// 	expect(chooseColor(undefined, undefined, true)).toBe('idle');
	// });
	it('check isRunning true cases', () => {
		expect(chooseColor('work', true)).toBe('work');
		expect(chooseColor('long', true)).toBe('long');
		expect(chooseColor('short', true)).toBe('short');
		expect(chooseColor('short', true, true)).toBe('pause');
	});
	it('check isRunning false cases', () => {
		expect(chooseColor('work', false)).toBe('idle');
		expect(chooseColor('long', false)).toBe('idle');
		expect(chooseColor('short', false)).toBe('idle');
		expect(chooseColor('short', false, true)).toBe('pause');
	});
});

describe('nextModePomodoro function', () => {
	it('check session = 4', () => {
		expect(nextModePomodoro('work', { sessions: 4, work: 1, break: 1 })).toBe('long');
	})
	it('check session != 4', () => {
		expect(nextModePomodoro('work', { sessions: 3, work: 1, break: 1 })).toBe('short');
	})
	it('check session != work', () => {
		expect(nextModePomodoro('long', { sessions: 3, work: 1, break: 1 })).toBe('work');
		expect(nextModePomodoro('long', { sessions: 4, work: 1, break: 1 })).toBe('work');
		expect(nextModePomodoro('short', { sessions: 3, work: 1, break: 1 })).toBe('work');
		expect(nextModePomodoro('short', { sessions: 4, work: 1, break: 1 })).toBe('work');
	})
});


describe('startSession function', () => {
	it('check session = 4', () => {
		expect(startSession('work', { sessions: 4, work: 1, break: 1 })).toBe('long');
	})
	it('check session != 4', () => {
		expect(startSession('work', { sessions: 3, work: 1, break: 1 })).toBe('short');
	})
	it('check session != work', () => {
		expect(startSession('long', { sessions: 3, work: 1, break: 1 })).toBe('work');
		expect(startSession('long', { sessions: 4, work: 1, break: 1 })).toBe('work');
		expect(startSession('short', { sessions: 3, work: 1, break: 1 })).toBe('work');
		expect(startSession('short', { sessions: 4, work: 1, break: 1 })).toBe('work');
	})
});

describe('normalizeSession function', () => {
	it('0 case', () => {
		expect(normalizeSession(0)).toBe(0);
	});
	it('multiple to 4 cases', () => {
		expect(normalizeSession(4)).toBe(4);
		expect(normalizeSession(-4)).toBe(4);
		expect(normalizeSession(8)).toBe(4);
		expect(normalizeSession(400)).toBe(4);
	});
	it('NO multiple to 4 cases', () => {
		expect(normalizeSession(1)).toBe(1);
		expect(normalizeSession(2)).toBe(2);
		expect(normalizeSession(3)).toBe(3);
		expect(normalizeSession(5)).toBe(1);
	});
});