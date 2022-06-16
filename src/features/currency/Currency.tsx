import { useAppSelector } from '../../app/hooks';
import Loading from "../../components/common/Loading/Loading";
import { SectionTitle } from "../../components/common/Typography/Typography";
import LinkToOriginal from "../../components/LinkToOriginal";
import s from './Currency.module.scss';
import CurrencyList from "./CurrencyList";
import CurrencySettings from "./CurrencySettings";
import { selectCurrencyQueryStatus } from "./currencySlice";

const BASE_URL = 'https://exchangerate.host/';

const Currency = (props: any) => {

	const queryStatus = useAppSelector(selectCurrencyQueryStatus);

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
					: <CurrencyList />
			}
		</div>
	)
}

export default Currency;