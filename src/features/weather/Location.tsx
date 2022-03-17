import s from './Weather.module.scss';
import { InlineText, PlainText, Title } from '../../components/common/Typography';
import { useAppDispatch } from '../../app/hooks';
import { LocationGeoType } from './weatherTypes';
import { setCity } from './weatherSlice';

const Location = (props: any) => {
	const location: LocationGeoType = props.location;
	const dispatch = useAppDispatch();

	const chooseCity = (location: LocationGeoType) => {
		let city = { name: location.name, lat: location.lat, lon: location.lon }
		dispatch(setCity(city));
	}

	return (
		<div className={s.location} onClick={() => chooseCity(location)}>
			<PlainText>
				<Title>{location.name}</Title>
				{(location.state) && <Title>{location.state}</Title>}
				{(location.local_names.ru) && <Title>{location.local_names.ru}</Title>}
				<Title>lat=</Title>
				<InlineText withOffset={true}>{location.lat}</InlineText>
				<Title>lon=</Title>
				<InlineText withOffset={true}>{location.lon}</InlineText>
			</PlainText>
		</div>
	)
}

export default Location;
