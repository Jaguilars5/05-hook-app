import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHoock = () => {
    const{counter,Aumentar,Decrementar,Reset}=useCounter()
  return (
    <>
    <h1>Counter with Hoock: {counter}</h1>
    <hr />
      <button onClick={()=>Aumentar(3)} className="btn btn-primary" >
        +1
      </button>
      <button onClick={()=>Decrementar(3)} className="btn  btn-primary" >
        -1
      </button>
      <button onClick={Reset}  className="btn  btn-primary" >
        Reset
      </button>
    </>
  )
}
