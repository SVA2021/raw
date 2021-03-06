import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography/Typography';
import { useAppDispatch } from '../../app/hooks';
import { LocationGeoType } from './weatherTypes';
import { setCity, setListStatus } from './weatherSlice';

const Location = (props: any) => {

	const location: LocationGeoType = props.location;
	const dispatch = useAppDispatch();

	const chooseCity = (location: LocationGeoType) => {
		let city = { name: location.name, lat: location.lat, lon: location.lon, }
		dispatch(setCity(city));
		dispatch(setListStatus(false));
	}

	const setLoc = (e: any) => {
		e.preventDefault();
		if (e.key === 'Enter') chooseCity(location);
	}

	return (
		<div className={s.location} tabIndex={0}
			onClick={() => chooseCity(location)} onKeyPress={(e) => setLoc(e)}>
			<PlainText>
				<Title withOffset={true}>{location.name}</Title>
				{(location.state) && <Title withOffset={true}>{location.state}</Title>}
			</PlainText>
			<PlainText>
				<Title withOffset={true}>lat=</Title>
				<InlineText withOffset={true}>{location.lat.toFixed(2)}</InlineText>
				<Title withOffset={true}>lon=</Title>
				<InlineText withOffset={true}>{location.lon.toFixed(2)}</InlineText>
			</PlainText>
		</div>
	)
}

export default Location;