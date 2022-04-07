import { SectionTitle } from "../../components/common/Typography/Typography";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loading from "../../components/common/Loading/Loading";
import CurrencySettings from "./CurrencySettings";
import { getLatestAsync, selectActiveCurrency, selectBase, selectCurrencyQueryStatus } from "./currencySlice";
import CurrencyList from "./CurrencyList";
import { getCodeCurrency } from "./currencyFunctions";
import s from './Currency.module.scss';
import { useEffect } from "react";
import { BASE_URL } from "./currencyAPI";
import LinkToOriginal from "../../components/LinkToOriginal";

const Currency = (props: any) => {
	const dispatch = useAppDispatch();

	const queryStatus = useAppSelector(selectCurrencyQueryStatus);
	const activeCurrencyList = useAppSelector(selectActiveCurrency);
	const base = useAppSelector(selectBase);
	const symbols = getCodeCurrency(activeCurrencyList);

	useEffect(() => {
		dispatch(getLatestAsync({ base: base, symbols: symbols }))
	}, [activeCurrencyList]);

	return (
		<div className="currency">
			<header className={s.header}>
				<div className={s.title}>
					<SectionTitle>Currency</SectionTitle>
					<LinkToOriginal link={BASE_URL} height={'2rem'} />
				</div>
				<CurrencySettings />
			</header>
			{
				(queryStatus === 'loading' || queryStatus === 'failed')
					? <Loading text={queryStatus} />
					: <CurrencyList activeCurrencyList={activeCurrencyList} />
			}
		</div>
	)
}

export default Currency;