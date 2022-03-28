import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";

const PomodoroMode = () => {
	return (
		<div className={s.mode}>
			<Button active={true}>work</Button>
			<Button active={true}>short break</Button>
			<Button active={true}>long break</Button>
			<Button active={true}>settings</Button>
		</div>
	)
}

export default PomodoroMode;