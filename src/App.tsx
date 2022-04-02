import React from 'react';
import './styles/global.scss';
import Logo from './components/Logo';
import Weather from './features/weather/Weather';
import Pomodoro from './features/pomodoro/Pomodoro';
import Holidays from './features/holidays/Holidays';
import Currency from './features/currency/Currency';

const App = () => {
	return (
		<div className='container'>
			<Logo />
			<Weather />
			<Pomodoro />
			<Holidays />
			<Currency />
		</div>
	);
}

export default App;