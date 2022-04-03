

const LinkToOriginal = (props: any) => {
	const link = props.link;
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			Link to original REST service
		</a>
	)
}

export default LinkToOriginal;