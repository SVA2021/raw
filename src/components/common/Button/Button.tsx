import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

type TButtonProps = {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	withOffset?: boolean;
	active?: boolean;
};

const Button: FC<TButtonProps> = ({ className = '', withOffset, active, children, ...props }) => (
	<button
		className={classNames(styles.button, {
			[styles.withOffset]: withOffset,
			[styles.active]: active,
		}, className)}
		{...props}
	>
		{children}
	</button>
);

export default Button;
