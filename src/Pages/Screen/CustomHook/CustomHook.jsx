import React, { useState } from "react";

const useCounter = (num) => {
  const [counter, setcounter] = useState(num);

  const add = () => {
    setcounter(counter + 1);
  };

  const sub = () => {
    setcounter(counter - 1);
  };
  const res = () => {
    setcounter(0);
  };
  const addDice = (a, b) => {
    const dice = Math.ceil(Math.random() * b) * a;
    setcounter(counter + dice);
  };
  return [counter, add, sub, res, addDice];
};

const CustomHook = () => {
  const [count, suma, resta, reinicio, dado] = useCounter(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dado(1, 6)}>+ 1d6 </button>
    </div>
  );
};

export default CustomHook;
