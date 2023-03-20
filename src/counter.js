import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return { count, increase, decrease, setToZero };
};
