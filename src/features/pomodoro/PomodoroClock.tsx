import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";

const PomodoroClock = () => {
	return (
		<div className={s.clock}>
			<InlineText>25</InlineText>
			<InlineText>:</InlineText>
			<InlineText>00</InlineText>
		</div>
	)
}

export default PomodoroClock;