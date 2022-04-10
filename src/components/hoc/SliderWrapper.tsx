import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { setArray } from '../../app/commonFunctions';
import Button from '../common/Button/Button';
import s from './SliderWrapper.module.scss';

const array = setArray(5, []);

const ListItem = (props: any) => {
	let data = props.data;
	return (
		<div className={s.external}>
			{data}
		</div>
	)
}

const SliderWrapper = () => {

	const step = 216;
	const ref: React.RefObject<any> = useRef(null);
	const ref0: React.RefObject<any> = useRef(null);
	const ref9: React.RefObject<any> = useRef(null);
	
	const [pos, setPos] = useState(0);
	const [minWrap, setMinWrap] = useState(0);
	const [maxWrap, setMaxWrap] = useState(0);
	const [min0, setMin0] = useState(0);
	const [max9, setMax9] = useState(0);

	useEffect(() => {
		// console.log(ref.current.getBoundingClientRect());
		setMinWrap(ref.current.getBoundingClientRect().left);
		setMaxWrap(ref.current.getBoundingClientRect().right);
		// console.log(minWrap, maxWrap);
}, [ref.current]);

	useEffect(() => {
		// console.log(ref0.current.getBoundingClientRect());
		setMin0(ref0.current.getBoundingClientRect().left);
		// console.log(min0);
	}, [ref0.current]);

	useEffect(() => {
		// console.log(ref9.current.getBoundingClientRect());
		setMax9(ref9.current.getBoundingClientRect().right);
		// console.log(max9);
	}, [ref9.current]);

	const setRef = (ind: number, array: any[]) => {
		if (ind === 0) return ref0;
		if (ind === array.length - 1) return ref9;
		return undefined;
	}

	const setPrev = () => {
		console.log(min0, minWrap, step);
		if (min0 - step < minWrap) return false;
		setPos(pos - step);
	}

	const setNext = () => {
		console.log(max9, maxWrap, step);
		if (max9 + step > maxWrap) return false;
		setPos(pos + step);
	}

	return (
		<div className={s.wrapper}>
			<Button className={classNames(s.btn, s.prev)} onClick={() => setPrev()}>{'<'}</Button>
			<div className={s.item} ref={ref}>
				{array.map((item, index) =>
					<div
						ref={setRef(index, array)}
						className={s.list__item}
						style={{ left: pos + 'px', flexBasis: step + 'px' }}
						key={String(Math.random()).toLowerCase()}
					>
						<ListItem data={item} />
					</div>
				)}
			</div>
			<Button className={classNames(s.btn, s.next)} onClick={() => setNext()}>{'>'}</Button>
		</div>
	);
}

export default SliderWrapper;