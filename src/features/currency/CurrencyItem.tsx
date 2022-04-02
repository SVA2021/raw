import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState } from "react";
import s from './Currency.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import { delActiveCurrency, selectAllCurrency } from "./currencySlice";
import { InputNumber } from '../../components/common/Input/Input';

const CurrencyItem = (props: any) => {
	const dispatch = useAppDispatch();
	const allCurrencyList = useAppSelector(selectAllCurrency);

	const base = props.base;
	const code = props.code;
	const rate = props.rate;
	const description = props.description;

	const [original, setOriginal] = useState(1);
	const [second, setSecond] = useState(rate);

	const changeOriginal = (value: number) => {
		setOriginal(value);
		setSecond(value * rate);
	}

	const changeSecond = (value: number) => {
		setSecond(value);
		setOriginal(value / rate);
	}

	const delCurrency = () => {
		let request = allCurrencyList.find(item => item.code === code);
		if (request === undefined) return false;
		dispatch(delActiveCurrency(request));
	}

	return (
		<div className={s.item}>
			<Title withOffset={true}>{code}</Title>
			<InlineText withOffset={true}>{`{` + description + '}'}</InlineText>
			<PlainText>
				<InlineText withOffset={true}>1</InlineText>
				<Title>{base}</Title>
				<InlineText withOffset={true}>= {rate.toFixed(2)}</InlineText>
				<Title>{code}</Title>
			</PlainText>
			<PlainText>
				<InlineText withOffset={true}>1</InlineText>
				<Title>{code}</Title>
				<InlineText withOffset={true}>= {(1 / rate).toFixed(2)}</InlineText>
				<Title>{base}</Title>
			</PlainText>
			<PlainText>
				<Title>convert</Title>
			</PlainText>
			<div className={s.convert}>
				<InputNumber className={s.inputNumber} min={0}
					value={original} onChange={(e) => changeOriginal(+e.target.value)} />
				<InlineText withOffset={true}>&#8644;</InlineText>
				<InputNumber className={s.inputNumber} min={0}
					value={second} onChange={(e) => changeSecond(+e.target.value)} />
			</div>
			<button className={s.closeBtn} onClick={() => delCurrency()}>X</button>
		</div>
	)
}

export default CurrencyItem;