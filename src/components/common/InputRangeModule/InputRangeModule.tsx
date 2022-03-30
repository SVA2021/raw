import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './InputRangeModule.module.scss';
import { InlineText, Strong } from '../Typography';
import { InputRange } from '../Input';

export type InputRangeModulePropsType = {
	className?: string;
	style?: any;
	min?: number;
	max?: number;
	value?: number;
	description?: string;
	onChangeFunction?: any | undefined
};

export const InputRangeModule: FC<InputRangeModulePropsType> = (
	{ className = '', style, min = 0, max = 100, value = 50, description = '%',
		onChangeFunction = (data: number) => console.log(data) }
) => {

	const [newValue, setNewValue] = useState(value);

	useEffect(() => {
		onChangeFunction(newValue)
		// console.log(description +'  old ' + value + '   new ' + newValue);

		// return (() => {
			// console.log(description + ' return input useeffect');
		// })
	}, [newValue])

	return (
		<fieldset className={classNames(className, styles.inputRangeModule)} style={style}>
			<legend>{description} <Strong>{newValue}</Strong></legend>
			<InlineText withOffset={true}>{min}</InlineText>
			<InputRange min={min} max={max} value={newValue} name={description}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewValue(+(e.target.value))} />
			<InlineText withOffset={true}>{max}</InlineText>
		</fieldset>
	)
}