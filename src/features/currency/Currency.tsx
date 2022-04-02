import { SectionTitle } from "../../components/common/Typography/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loading from "../../components/common/Loading/Loading";
import CurrencySettings from "./CurrencySettings";
import { getLatestAsync, selectActiveCurrency, selectBase, selectCurrencyQueryStatus } from "./currencySlice";
import CurrencyList from "./CurrencyList";
import { getCodeCurrency } from "./currencyFunctions";
import { useEffect } from "react";

const Currency = (props: any) => {
	const dispatch = useAppDispatch();

	const queryStatus = useAppSelector(selectCurrencyQueryStatus);
	const activeCurrencyList = useAppSelector(selectActiveCurrency);
	const base = useAppSelector(selectBase);
	const symbols = getCodeCurrency(activeCurrencyList);

	useEffect(() => {
		console.log(base);
		dispatch(getLatestAsync({ base: base, symbols: symbols }))
	}, [activeCurrencyList]);
	return (
		<div className="currency">
			<SectionTitle>Currency</SectionTitle>
			<CurrencySettings />
			{
				(queryStatus === 'loading' || queryStatus === 'failed')
					? <Loading text={queryStatus} />
					: <CurrencyList activeCurrencyList={activeCurrencyList} />
			}
		</div>
	)
}

export default Currency;