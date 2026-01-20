import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./components/Small";
export const Memorize = () => {
  const { Aumentar, counter, Reset } = useCounter(0);
  const [show, setshow] = useState(true);
  return (
    <div className="practice-container">
      <h1>React.memo - Optimización</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>React.memo</code> para prevenir re-renders innecesarios
          </li>
          <li>Optimización de componentes</li>
          <li>Cuándo usar memorización</li>
        </ul>
        <p>
          <strong>🔍 Abre la consola del navegador:</strong> Verás cuándo se
          renderiza el componente Small.
        </p>
        <p>
          <strong>💡 Prueba:</strong> El botón Show/Hide NO debería
          re-renderizar el componente Small gracias a React.memo.
        </p>
      </div>
      <hr />
      <h2 style={{ textAlign: "center" }}>
        Counter: <Small value={counter} />
      </h2>
      <button onClick={() => Aumentar(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => Reset()} className="btn btn-primary">
        Reset
      </button>
      <button className="btn btn-success" onClick={() => setshow(!show)}>
        Show/Hide: {show ? "✅ Visible" : "❌ Oculto"}
      </button>
    </div>
  );
};
