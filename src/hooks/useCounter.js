import { useState } from 'react';

export const useCounter = () => {
    const [counter, setCounter] = useState(0);
  
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter -1);
    const reset = () => setCounter(0);
  
    return {
      counter,
      increase,
      decrease,
      reset
    }
}