import { SectionTitle } from "../../components/common/Typography/Typography";
import { useAppSelector } from '../../app/hooks';
import Loading from "../../components/common/Loading/Loading";
import CurrencySettings from "./CurrencySettings";
import { selectCurrencyQueryStatus } from "./currencySlice";
import CurrencyList from "./CurrencyList";
import s from './Currency.module.scss';
import { BASE_URL } from "./currencyAPI";
import LinkToOriginal from "../../components/LinkToOriginal";

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