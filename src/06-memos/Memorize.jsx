import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./components/Small";
export const Memorize = () => {
  const { Aumentar, counter, Reset } = useCounter(0);
  const [show, setshow] = useState(true)
  return (
    <>
      <h1>
        Counter: <Small value={counter}/>
      </h1>
      <hr />
      <button onClick={() => Aumentar(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => Reset()} className="btn btn-primary">
        Reset
      </button>
      <button className="btn btn-outline-primary" onClick={()=>setshow(!show)}>Show/Hide{JSON.stringify(show)}</button>
    </>
  );
};
