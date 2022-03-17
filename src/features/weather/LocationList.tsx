import s from './Weather.module.scss';
import { useAppSelector } from '../../app/hooks';
import { selectLocationsList } from './weatherSlice';
import Loading from '../../components/Loading';
import Location from './Location';

const LocationList = () => {

	const locationsList = useAppSelector(selectLocationsList);

	if (locationsList.length === 0) return <Loading text={'waiting...'} />

	return (
		<div className={s.modal}>
			{locationsList.map((location) => <Location location={location} />)}
		</div>
	)
}

export default LocationList;