import s from './Weather.module.scss';
import { useAppSelector } from '../../app/hooks';
import { selectLocationsList } from './weatherSlice';
import Loading from '../../components/Loading';
import Location from './Location';
import { useEffect } from 'react';

const LocationList = () => {

	const locationsList = useAppSelector(selectLocationsList);
	// let listStatus = locationsList.length;
	
	// useEffect(() => {
	// }, [listStatus]);
	
	// if (listStatus === 0) return <Loading text={'waiting...'} />
	return (
		<div className={s.modal}>
			{locationsList.map((location) => <Location location={location} />)}
		</div>
	)
}

export default LocationList;