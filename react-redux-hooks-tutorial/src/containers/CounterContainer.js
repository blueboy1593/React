import React from 'react';
import { useSelector, useActions } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../modules/Counter';


const CounterContainer = () => {
    const counter = useSelector(state => state.counter, []);
    // 이거는 또다른 방법!!
    // const { onIncrease, onDecrease } = useActions({
    //     onIncrease: increment,
    //     onDecrease: decrement
    // });
    const [onIncrease, onDecrease] = useActions([increment, decrement]);
    
    return <Counter></Counter>;
}

export default CounterContainer;