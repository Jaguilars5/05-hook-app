import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const aumentar = () => {
    setCounter({
      ...state,
      counter1: counter1 + 1,
    });
  };

  const decrementar = () => {
    setCounter({
      ...state,
      counter1: counter1 - 1,
    });
  };

  return (
    <div className="practice-container">
      <h1>Contador con useState</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso básico de <code>useState</code> con objetos
          </li>
          <li>Manejo de estado múltiple en un solo objeto</li>
          <li>Spread operator para mantener propiedades previas</li>
        </ul>
        <p>
          <strong>💡 Observa:</strong> Solo Counter 1 cambia porque usamos el
          spread operator <code>...state</code> para mantener counter2 y
          counter3.
        </p>
      </div>
      <hr />
      <div className="counter-display">Counter 1: {counter1}</div>
      <p>
        <strong>Counter 2:</strong> {counter2}
      </p>
      <p>
        <strong>Counter 3:</strong> {counter3}
      </p>
      <div>
        <button className="btn btn-primary" onClick={aumentar}>
          +1
        </button>
        <button className="btn btn-danger" onClick={decrementar}>
          -1
        </button>
      </div>
    </div>
  );
};
