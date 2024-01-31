import { useCallback, useState } from "react";
import { ShowIncrement } from "./components/ShowIncrement";

export const CallbackHoock = () => {
  const [counter, setcounter] = useState(5);
  const incrementFather = useCallback((value) => {
    setcounter((c)=>c+value);
  }, []);

  return (
    <>
      <h1>useCallback Hoock: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
