import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByFive,
  decrementByFive,
  multiplyBy2,
  divideBy2,
} from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allowsus to select a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(decrementByFive());
        }}
      >
        -5
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(divideBy2());
        }}
      >
        /2
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(incrementByFive());
        }}
      >
        +5
      </button>

      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(multiplyBy2());
        }}
      >
        x2
      </button>

      <br />

      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(reset());
        }}
      >
        zero
      </button>
    </div>
  );
};

export default Counter;
