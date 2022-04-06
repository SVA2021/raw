import { ReactComponent as Icon } from '../img/earth_globe.svg';

const LinkToOriginal = (props: any) => {
	const link = props.link;
	const height = props.height;
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon style={{ height: height }} />
		</a>
	)
}

export default LinkToOriginal;