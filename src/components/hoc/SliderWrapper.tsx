import { FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Button from '../common/Button/Button';
import s from './SliderWrapper.module.scss';

interface TSliderWrapper {
	array: any[],
	step: number,
	Component: any
}

const SliderWrapper: FC<TSliderWrapper> = ({ array, step, Component, ...props }) => {
	
	const ref: React.RefObject<any> = useRef(null);
	const firstElemRef: React.RefObject<any> = useRef(null);
	const lastElemRef: React.RefObject<any> = useRef(null);
	
	const [pos, setPos] = useState(0);
	const [leftLimit, setLeftLimit] = useState(0);
	const [rightLimit, setRightLimit] = useState(0);
	const [firstElemPos, setFirstElemPos] = useState(0);
	const [lastElemPos, setLastElemPos] = useState(0);

	useEffect(() => {
		const coord = ref.current.getBoundingClientRect();
		setLeftLimit(coord.left);
		setRightLimit(coord.right);
	}, [ref.current?.offsetWidth]);

	useEffect(() => {
		if (firstElemRef.current) {
			setFirstElemPos(firstElemRef.current.getBoundingClientRect().x);
		}
	}, [firstElemRef.current?.offsetLeft]);

	useEffect(() => {
		if (lastElemRef.current) {
			setLastElemPos(lastElemRef.current.getBoundingClientRect().x);
		}
	}, [lastElemRef.current?.offsetLeft]);

	const setRef = (ind: number, array: any[]) => {
		if (ind === 0) return firstElemRef;
		if (ind === array.length - 1) return lastElemRef;
		return undefined;
	}

	const setPrev = () => {
		if (lastElemPos + step <= rightLimit) return false;
		setPos(pos - step);
	}

	const setNext = () => {
		if (firstElemPos >= leftLimit) return false;
		setPos(pos + step);
	}

	return (
		<div className={s.wrapper} ref={ref}>
			{(array.length > 1) &&
				<>
					<Button
						active={lastElemPos + step <= rightLimit}
						className={classNames(s.btn, s.btn__prev)}
						onClick={() => setPrev()}
					>
						{'<'}
					</Button>
					<Button
						active={firstElemPos >= leftLimit}
						className={classNames(s.btn, s.btn__next)}
						onClick={() => setNext()}
					>
						{'>'}
					</Button>
				</>
			}
			<div className={s.list} >
				{array.map((item, index) =>
					<div
						ref={setRef(index, array)}
						className={s.list__item}
						style={{ left: pos + 'px', flexBasis: step + 'px' }}
						key={String(Math.random()).toLowerCase()}
					>
						<Component {...item} />
					</div>
				)}
			</div>
		</div>
	);
}

export default SliderWrapper;