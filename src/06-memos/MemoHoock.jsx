import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
const Iteracon=(value=100)=>{
  for (let i = 0; i < value; i++) {
    console.log(i);    
  }
  return(`Valor memorizado ${value}`)
}
export const MemoHoock = () => {
  const { Aumentar, counter, Reset } = useCounter(40);
  const [show, setshow] = useState(true)
  const memorizedValue=useMemo(()=>Iteracon(counter),[counter])
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
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
