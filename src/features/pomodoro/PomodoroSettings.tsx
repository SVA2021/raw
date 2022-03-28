import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";

const PomodoroSettings = () => {
	return (
		<div className={s.settings}>
			<SubTitle>settings</SubTitle>
			<fieldset className={s.settings__item}>
				<legend>work</legend>
				<InlineText withOffset={true}>0</InlineText>
				<InputRange min="0" max="20" value={0} name="work"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => alert(+(e.target.value))} />
				<InlineText withOffset={true}>25</InlineText>
			</fieldset>
			<fieldset className={s.settings__item}>
				<legend>short break</legend>
				<InlineText withOffset={true}>0</InlineText>
				<InputRange min="0" max="20" value={0} name="short break"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => alert(+(e.target.value))} />
				<InlineText withOffset={true}>25</InlineText>
			</fieldset>
			<fieldset className={s.settings__item}>
				<legend>long break</legend>
				<InlineText withOffset={true}>0</InlineText>
				<InputRange min="0" max="20" value={0} name="long break"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => alert(+(e.target.value))} />
				<InlineText withOffset={true}>25</InlineText>
			</fieldset>
			<Button>set timers</Button>
			<Button>reset</Button>
			<button className={s.closeBtn} onClick={() => alert('close')}>X</button>
		</div>
	)
}

export default PomodoroSettings;