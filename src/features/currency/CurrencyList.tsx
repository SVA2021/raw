import { useAppSelector } from '../../app/hooks';
import SliderWrapper from '../../components/hoc/SliderWrapper';
import s from './Currency.module.scss';
import CurrencyItem from "./CurrencyItem";
import { CurrencyType, selectActiveCurrency, selectBase, selectRatesList } from "./currencySlice";

const CurrencyList = (props: any) => {
	const activeCurrencyList = useAppSelector(selectActiveCurrency);

	// const rates = useAppSelector(selectRatesList);
	const base = useAppSelector(selectBase);
	// const activeCurrencyList = props.activeCurrencyList;
	const filteredCurrencyList = activeCurrencyList.filter((currency: CurrencyType) => currency.code.toLowerCase() !== base.toLowerCase());

	return (

		<SliderWrapper
			array={filteredCurrencyList}
			step={200}
			Component={CurrencyItem}
		/>

		// <div className={s.list}>
		// 	{activeCurrencyList.map((currency: CurrencyType) => {
		// 		if (currency.code.toLowerCase() === base.toLowerCase()) return false;
		// 		return (
		// 			<CurrencyItem
		// 				key={String(Math.random()).toLowerCase()}
		// 				base={base}
		// 				code={currency.code}
		// 				description={currency.description}
		// 				rate={rates[currency.code] || 0}
		// 			/>)
		// 	})}
		// </div>
	)
}

export default CurrencyList;