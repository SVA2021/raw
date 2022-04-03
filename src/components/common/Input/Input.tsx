import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

type TInputNumProps = {
	className?: string;
	withOffset?: boolean;
	min?: number;
	max?: number;
	value?: number;
	name?: string;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

type TInputTextProps = {
	className?: string;
	withOffset?: boolean;
	value?: string;
	name?: string;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const InputRange: FC<TInputNumProps> = ({ className = '', withOffset, ...props }) => {
	return (
		<input type="range" className={classNames(styles.slider, {
			[styles.withOffset]: withOffset,
		}, className)} {...props} />
	)
};

export const InputNumber: FC<TInputNumProps> = ({ className = '', withOffset, ...props }) => {
	return (
		<input type="number" className={classNames(styles.number, {
			[styles.withOffset]: withOffset,
		}, className)} {...props} />
	)
};

export const InputText: FC<TInputTextProps> = ({ className = '', withOffset, ...props }) => {
	return (
		<input type="text" className={classNames(styles.text, {
			[styles.withOffset]: withOffset,
		}, className)} {...props} />
	)
};