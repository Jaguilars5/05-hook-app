import { useState } from "react";

export const useCounter = (initialvalue = 10) => {
  const [counter, setcounter] = useState(initialvalue);
  const Aumentar = (value=1) => {
    setcounter(counter + value);
  };
  const Decrementar = (value=1) => {
    if (counter === 0) return;
    setcounter(counter - value);
  };
  const Reset = () => {
    setcounter(initialvalue);
  };
  return {
    counter,
    Aumentar,
    Decrementar,
    Reset,
  };
};
