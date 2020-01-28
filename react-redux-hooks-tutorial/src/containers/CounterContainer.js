import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../modules/counter';


const CounterContainer = () => {
    const counter = useSelector(state => state.counter, []);
    // 이거는 또다른 방법!!
    // const { onIncrease, onDecrease } = useDispatch({
    //     onIncrease: increment,
    //     onDecrease: decrement
    // });
    const [onIncrease, onDecrease] = useDispatch([increment, decrement], []);

    return <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>;
}

export default CounterContainer;