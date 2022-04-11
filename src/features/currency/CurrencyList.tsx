import { useAppSelector } from '../../app/hooks';
import SliderWrapper from '../../components/hoc/SliderWrapper';
import CurrencyItem from "./CurrencyItem";
import { CurrencyType, selectActiveCurrency, selectBase, } from "./currencySlice";

const CurrencyList = (props: any) => {

	const base = useAppSelector(selectBase);
	const activeCurrencyList = useAppSelector(selectActiveCurrency);

	const filteredCurrencyList = activeCurrencyList.filter(
		(currency: CurrencyType) => currency.code.toLowerCase() !== base.toLowerCase()
	);

	return (
		<SliderWrapper
			array={filteredCurrencyList}
			step={200}
			Component={CurrencyItem}
		/>
	)
}

export default CurrencyList;