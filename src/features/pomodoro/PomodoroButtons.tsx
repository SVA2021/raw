import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";

const PomodoroButtons = () => {
	return (
		<div className={s.buttons}>
			<Button active={true}>reload</Button>
			<Button active={true}>start</Button>
			<Button active={true}>stop</Button>
		</div>
	)
}

export default PomodoroButtons;