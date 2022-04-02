import s from './Loading.module.scss';

const Loading = (props: any) => {
	const text = props.text;
	return (
		<div className={s.main}>
			{text}
		</div>
	)
}

export default Loading;