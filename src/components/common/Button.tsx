import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

type TButtonProps = {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	withOffset?: boolean;
};

const Button: FC<TButtonProps> = ({ className = '', withOffset, children, ...props }) => (
	<button
		className={classNames(className, styles.button, {
			[styles.withOffset]: withOffset,
		})}
		{...props}
	>
		{children}
	</button>
);

export default Button;
