import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState } from "react";
import s from './Currency.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import { delActiveCurrency, selectAllCurrency, selectBase, } from "./currencySlice";
import { InputNumber } from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

const CurrencyItem = (props: any) => {

	const dispatch = useAppDispatch();
	const base = useAppSelector(selectBase);
	const allCurrencyList = useAppSelector(selectAllCurrency);

	const code = props.code;
	const rate = props.rate;
	const description = props.description;

	const [original, setOriginal] = useState(1);
	const [second, setSecond] = useState(rate);
	const [visible, setVisible] = useState(false);

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
			<PlainText className={s.description}>
				{description}
			</PlainText>
			<PlainText>
				<InlineText withOffset={true}>1</InlineText>
				<Title>{base}</Title>
				<InlineText withOffset={true}>= {rate?.toFixed(2)}</InlineText>
				<Title>{code}</Title>
			</PlainText>
			<PlainText>
				<InlineText withOffset={true}>1</InlineText>
				<Title>{code}</Title>
				<InlineText withOffset={true}>= {(1 / rate).toFixed(2)}</InlineText>
				<Title>{base}</Title>
			</PlainText>
			<div className={s.convert}>
				<Button className={s.bordered} active={visible} onClick={() => setVisible(!visible)}>
					{(visible) ? 'close converter' : 'open converter'}
				</Button>
				{visible &&
					<>
						<div>
							<InputNumber className={s.inputNumber} min={0}
								value={original} onChange={(e) => changeOriginal(+e.target.value)} />
							<Title>{base}</Title>
						</div>
						<InlineText withOffset={true}>&#8644;</InlineText>
						<div>
							<InputNumber className={s.inputNumber} min={0}
								value={second} onChange={(e) => changeSecond(+e.target.value)} />
							<Title>{code}</Title>
						</div>
					</>
				}
			</div>
			<Button className={s.closeBtn} onClick={() => delCurrency()}>&times;</Button>
		</div>
	)
}

export default CurrencyItem;