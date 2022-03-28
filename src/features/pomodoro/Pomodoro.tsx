import { InlineText, PlainText, SectionTitle, Strong, SubTitle, Title } from "../../components/common/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from "../../components/common/Button";
import s from './Pomodoro.module.scss';
import { InputRange } from "../../components/common/Input";
import PomodoroMode from "./PomodoroMode";
import PomodoroClock from "./PomodoroClock";
import PomodoroButtons from "./PomodoroButtons";
import PomodoroStatistic from "./PomodoroStatistic";
import PomodoroSettings from "./PomodoroSettings";

const Pomodoro = () => {
	return (
		<div className="pomodoro">
			<SectionTitle>Pomodoro</SectionTitle>
			<PomodoroMode/>
			<PomodoroClock/>
			<PomodoroButtons/>
			<PomodoroStatistic/>
			<PomodoroSettings/>
			{/* <div className={s.mode}>
				<Button active={true}>work</Button>
				<Button active={true}>short break</Button>
				<Button active={true}>long break</Button>
				<Button active={true}>settings</Button>
			</div> */}
			{/* <div className={s.clock}>
				<InlineText>25</InlineText>
				<InlineText>:</InlineText>
				<InlineText>00</InlineText>
			</div> */}
			{/* <div className={s.buttons}>
				<Button active={true}>reload</Button>
				<Button active={true}>start</Button>
				<Button active={true}>stop</Button>
			</div> */}
			{/* <div className={s.statistic}>
				<PlainText>
					<Title>status:</Title>
					<InlineText withOffset={true}>work</InlineText>
				</PlainText>
				<PlainText>
					<Title>session:</Title>
					<InlineText withOffset={true}>1/4</InlineText>
				</PlainText>
			</div> */}
			{/* <div className={s.settings}>
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
			</div> */}
		</div>
	)
}

export default Pomodoro;