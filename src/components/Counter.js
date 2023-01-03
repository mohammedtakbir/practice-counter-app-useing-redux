import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterReset } from '../redux/Actions/CounterActions';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleIncrement = () => {
        dispatch(counterIncrement())
    }
    const handleDecrement = () => {
        dispatch(counterDecrement())
    }
    const handleReset = () => {
        dispatch(counterReset())
    }

    return (
        <div>
            <h1>Practice counter app using Redux</h1>
            <h3>count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} style={{ marginLeft: '10px', marginRight: '10px' }}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

/* 
* 1. state --> count: 0
* 2. action dispatch --> increment, decrement, reset
* 3. reducer --> increment --> count = count + 1, decrement --> count = count - 1, reset --> count = 0 
* 4. store
* 5. Provide the store in index.js file --> <Provider store={store}><App /></ Provider >
* 6. use store
*/