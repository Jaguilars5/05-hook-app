import { useState } from "react";

export const useCounter = (initialvalue = 10) => {
  const [counter, setcounter] = useState(initialvalue);
  const Aumentar = (value=0) => {
    setcounter(counter + value);
  };
  const Decrementar = (value=0) => {
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
