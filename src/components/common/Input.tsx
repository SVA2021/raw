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
