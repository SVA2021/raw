import { ReactComponent as Icon } from '../img/earth_globe.svg';

const LinkToOriginal = (props: any) => {
	const link = props.link;
	const height = props.height;

	const linkStyle: React.CSSProperties = {
		position: 'relative', 
		padding: '4px',
		borderRadius: '8px'
	}
	
	const srOnly: React.CSSProperties = {
		height: '0px',
		width: '0px',
		opacity: '0',
		display: 'block',
		position: "absolute",
		left: '10000px'
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			style={linkStyle}
		>
			<Icon style={{ height: height }} />
			<span style={srOnly}>link to original service provider</span>
		</a>
	)
}

export default LinkToOriginal;