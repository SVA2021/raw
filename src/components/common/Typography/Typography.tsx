import classNames from 'classnames';
import { FC } from 'react';
import s from './Typography.module.scss';

type TTypographyProps = {
	className?: string;
	withOffset?: boolean;
	style?: any;
};

export const HeroTitle: FC<any> = ({ children }) => (
	<h1 className={s.heroTitle}>
		{children}
	</h1>
);

export const SectionTitle: FC<any> = ({ children }) => (
	<h2 className={s.sectionTitle}>
		{children}
	</h2>
);

export const SubTitleUpper: FC<any> = ({ children }) => (
	<h4 className={s.subTitleUpper}>
		{children}
	</h4>
);

export const SubTitleUpperDark: FC<any> = ({ children }) => (
	<h4 className={s.subTitleUpper__dark}>
		{children}
	</h4>
);

export const Strong: FC<any> = ({ children }) => (
	<strong className={s.strong}>
		{children}
	</strong>
);

export const Highlighted: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
	<span
		className={classNames(className, s.highlighted, {
			[s.withOffset]: withOffset,
		})}
		style={style}
	>
		{children}
	</span>
);

export const IconLabel: FC<any> = ({ children }) => (
	<p className={s.icon_label}>
		{children}
	</p>
);


export const PlainText: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
	<p
		className={classNames(className, s.plainText, {
			[s.withOffset]: withOffset,
		})}
		style={style}
	>
		{children}
	</p>
);


export const Title: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
	<span
		className={classNames(className, s.title, {
			[s.withOffset]: withOffset,
		})}
		style={style}
	>
		{children}
	</span>
);

export const InlineText: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
	<span
		className={classNames(className, s.inlineText, {
			[s.withOffset]: withOffset,
		})}
		style={style}
	>
		{children}
	</span>
);

export const SubTitle: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
	<h4
		className={classNames(className, s.subTitle, {
			[s.withOffset]: withOffset,
		})}
		style={style}
	>
		{children}
	</h4>
);