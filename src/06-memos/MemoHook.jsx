import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const Iteracion = (value = 100) => {
  console.log(`🔄 Ejecutando cálculo pesado... iteraciones: ${value}`);
  for (let i = 0; i < value; i++) {
    // Simulación de cálculo pesado
  }
  return `Valor memorizado: ${value}`;
};

export const MemoHook = () => {
  const { Aumentar, counter, Reset } = useCounter(40);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => Iteracion(counter), [counter]);

  return (
    <div className="practice-container">
      <h1>useMemo - Optimización de Cálculos</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>useMemo</code> para memorizar valores calculados
          </li>
          <li>Evitar cálculos costosos innecesarios</li>
          <li>Optimización de performance</li>
        </ul>
        <p>
          <strong>🔍 Abre la consola:</strong> Verás que el cálculo solo se
          ejecuta cuando cambia el counter.
        </p>
        <p>
          <strong>💡 Prueba:</strong> El botón Show/Hide NO ejecuta el cálculo
          pesado gracias a useMemo.
        </p>
      </div>
      <hr />
      <div className="counter-display">{counter}</div>
      <div className="card">
        <div className="card-body">
          <h4>{memorizedValue}</h4>
        </div>
      </div>
      <button onClick={() => Aumentar(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => Reset()} className="btn btn-success">
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide: {show ? "✅" : "❌"}
      </button>
    </div>
  );
};
