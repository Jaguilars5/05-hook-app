import { useState } from "react";

export const useForm = (initialFrom = {}) => {
  const [fromState, setfromState] = useState(initialFrom);
  const onReset = () => {
    setfromState(initialFrom);
  };
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setfromState({
      ...fromState,
      [name]: value,
    });
  };
  return {
    ...fromState,
    fromState,
    onInputChange,
    onReset,
  };
};
