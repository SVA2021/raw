import { SectionTitle } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';


const Pomodoro = () => {
	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<div>Clock mode</div>
			<div>Clock</div>
			<div>Buttons</div>
			<div>Statistic</div>
			<div>Settings hidden</div>
		</div>
	)
}

export default Pomodoro;