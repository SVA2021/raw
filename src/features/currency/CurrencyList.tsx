import { useAppSelector } from '../../app/hooks';
import s from './Currency.module.scss';
import CurrencyItem from "./CurrencyItem";
import { CurrencyType, selectBase, selectRatesList } from "./currencySlice";

const CurrencyList = (props: any) => {

	const rates = useAppSelector(selectRatesList);
	const base = useAppSelector(selectBase);
	const activeCurrencyList = props.activeCurrencyList;

	return (
		<div className={s.currencyList}>
			{activeCurrencyList.map((currency: CurrencyType) => {
				if (currency.code.toLowerCase() === base.toLowerCase()) return false;
				return (
					<CurrencyItem
						key={base + currency.code + currency.description + Math.random}
						base={base}
						code={currency.code}
						description={currency.description}
						rate={rates[currency.code] || 0}
					/>)
			})}
		</div>
	)
}

export default CurrencyList;