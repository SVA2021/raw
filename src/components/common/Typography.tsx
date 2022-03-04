import { FC } from 'react';
import s from './Typography.module.scss';

export const HeroTitle: FC<any> = ({ children }) => (
    <h1 className={s.heroTitle}>
        {children}
    </h1>
);

export const SectionTitle: FC<any> = ({ children }) => (
    <h3 className={s.sectionTitle}>
        {children}
    </h3>
);

export const SubTitle: FC<any> = ({ children }) => (
    <h4 className={s.subTitle}>
        {children}
    </h4>
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

export const Highlighted: FC<any> = ({ children }) => (
    <p className={s.highlighted}>
        {children}
    </p>
);


export const IconLabel: FC<any> = ({ children }) => (
    <p className={s.icon_label}>
        {children}
    </p>
);