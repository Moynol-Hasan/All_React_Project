import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={Increase} disabled={count == 5 ? true : false}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={Decrease}
            disabled={count == -5 ? true : false}>
            -
          </button>
          <button className="btn card__btn" onClick={Reset} disabled={count == 0 ? true : false}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
