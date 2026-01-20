import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, Aumentar, Decrementar, Reset } = useCounter();

  return (
    <div className="practice-container">
      <h1>Contador con Custom Hook</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>Creación de Custom Hooks reutilizables</li>
          <li>
            Hook <code>useCounter</code> con múltiples funciones
          </li>
          <li>Encapsulación de lógica de negocio</li>
        </ul>
        <p>
          <strong>💡 Ventaja:</strong> Puedes usar <code>useCounter</code> en
          cualquier componente sin reescribir la lógica.
        </p>
      </div>
      <hr />
      <div className="counter-display">{counter}</div>
      <div>
        <button onClick={() => Aumentar(3)} className="btn btn-primary">
          +3
        </button>
        <button onClick={() => Decrementar(3)} className="btn btn-danger">
          -3
        </button>
        <button onClick={Reset} className="btn btn-success">
          Reset
        </button>
      </div>
    </div>
  );
};
