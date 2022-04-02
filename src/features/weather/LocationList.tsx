import s from './Weather.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectLocationsList, setListStatus } from './weatherSlice';
import Loading from '../../components/Loading';
import Location from './Location';

const LocationList = () => {

	const dispatch = useAppDispatch();
	const locationsList = useAppSelector(selectLocationsList);
	const listStatus = locationsList.length;

	const hideModal = () => {
		dispatch(setListStatus(false));
	}

	return (
		<div className={s.modal} onClick={() => hideModal()}>
			{(listStatus === 0)
				? <Loading text={'no data'} />
				: locationsList.map((location) => 
				<Location key={location.lat + location.lon} location={location} />)}
		</div>
	)
}

export default LocationList;