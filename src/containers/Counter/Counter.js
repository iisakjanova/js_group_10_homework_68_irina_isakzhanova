import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {add, decrease, fetchCounter, increase, saveCounter, subtract} from "../../store/actions";
import './Counter.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    useEffect(() =>{
        dispatch(fetchCounter());
    }, [dispatch]);

    const handleIncrease = () => {
        dispatch(increase());
        dispatch(saveCounter());
    };

    const handleDecrease = () => {
        dispatch(decrease());
        dispatch(saveCounter());
    };

    const handleAdd = () => {
        dispatch(add(5));
        dispatch(saveCounter());
    };

    const handleSubtract = () => {
        dispatch(subtract(5));
        dispatch(saveCounter());
    };

    return (
        <div className="Counter">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleAdd}>Increase by 5</button>
            <button onClick={handleSubtract}>Decrease by 5</button>
        </div>
    );
};

export default Counter;