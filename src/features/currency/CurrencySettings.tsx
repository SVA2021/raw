import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState } from "react";
import s from './Currency.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { getDateString } from "../../app/commonFunctions";
import {
	addActiveCurrency,
	CurrencyType,
	getLatestAsync,
	selectActiveCurrency,
	selectAllCurrency,
	selectBase,
	setBaseCurrency
} from "./currencySlice";
import Button from "../../components/common/Button";
import { getCodeCurrency } from "./currencyFunctions";

const CurrencySettings = (props: any) => {

	const dispatch = useAppDispatch();
	const currency = useAppSelector(selectBase).toUpperCase();
	const allCurrencyList = useAppSelector(selectAllCurrency);
	const activeCurrencyList = useAppSelector(selectActiveCurrency);

	const symbols = getCodeCurrency(activeCurrencyList);
	const today = getDateString('-');
	const [activeCurrency, setActiveCurrencyLocal] = useState(activeCurrencyList[0].code);
	const [additionCurrency, setAdditionCurrencyLocal] = useState(activeCurrencyList[0].code);

	const setCurrency = () => {
		dispatch(setBaseCurrency(activeCurrency));
		dispatch(getLatestAsync({ base: activeCurrency, symbols: symbols }));
	}

	const addCurrency = () => {
		let request = allCurrencyList.find(item => item.code === additionCurrency);
		if (request === undefined) return false;
		dispatch(addActiveCurrency(request));
	}

	return (
		<div className={s.settings}>
			<header>
				<PlainText>
					<Title>today:</Title>
					<InlineText withOffset={true}>{today}</InlineText>
					<Title>currency:</Title>
					<InlineText withOffset={true}>{currency}</InlineText>
				</PlainText>
			</header>
			<div>
				<Title>base currency:</Title>
				<div>
					<select className={s.selection} onChange={(e) => setActiveCurrencyLocal(e.target.value)} >
						{allCurrencyList.map((currencyItem: CurrencyType) =>
							<option key={currencyItem.description + currencyItem.code} value={currencyItem.code}>
								{currencyItem.code}
							</option>
						)}
					</select>
					<Button active={true} withOffset={true} onClick={() => setCurrency()}>Show</Button>
				</div>
			</div>
			<div>
				<Title>second currency:</Title>
				<div>
					<select className={s.selection} onChange={(e) => setAdditionCurrencyLocal(e.target.value)} >
						{allCurrencyList.map((currencyItem: CurrencyType) =>
							<option key={currencyItem.description + currencyItem.code} value={currencyItem.code}>
								{currencyItem.code + ' ' + currencyItem.description}
							</option>
						)}
					</select>
					<Button active={true} withOffset={true} onClick={() => addCurrency()}>Add</Button>
				</div>
			</div>
		</div>
	)
}

export default CurrencySettings;