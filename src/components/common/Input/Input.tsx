import styles from './Input.module.scss';

export const InputRange = (props: any) => {
	return (
		<input type="range" className={styles.slider} {...props} />
	)
};

export const InputNumber = (props: any) => {
	return (
		<input type="number" className={styles.number} {...props} />
	)
};

export const InputText = (props: any) => {
	return (
		<input type="text" className={styles.text} {...props} />
	)
};


export const Select = (props: any) => {
	return (
		<label>
			{props.label}
			<select value={props.value} onChange={props.handleChange}>
				{props.optionList.map(
					(option: any) => <option value={option.value}>{option.text}</option>
				)
				}
			</select>
		</label>
	)
}