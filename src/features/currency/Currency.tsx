import { SectionTitle } from "../../components/common/Typography";
import { useAppSelector } from '../../app/hooks';
import Loading from "../../components/Loading";
import CurrencySettings from "./CurrencySettings";
import { selectCurrencyQueryStatus } from "./currencySlice";
import CurrencyList from "./CurrencyList";

const Currency = (props: any) => {

	const queryStatus = useAppSelector(selectCurrencyQueryStatus);

	return (
		<div className="currency">
			<SectionTitle>Currency</SectionTitle>
			<CurrencySettings />
			{
				(queryStatus === 'loading' || queryStatus === 'failed')
					? <Loading text={queryStatus} />
					: <CurrencyList />
			}
		</div>
	)
}

export default Currency;