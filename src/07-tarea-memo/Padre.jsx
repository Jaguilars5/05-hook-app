import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num) => {
    setValor((c) => c + num);
  }, []);

  return (
    <div className="practice-container">
      <h1>Tarea: Optimización Padre-Hijo</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>useCallback</code> para memorizar funciones
          </li>
          <li>
            Combinación de <code>React.memo</code> y <code>useCallback</code>
          </li>
          <li>Optimización de componentes hijos</li>
        </ul>
        <p>
          <strong>🔍 Abre la consola:</strong> Verás que solo se renderiza el
          hijo que presionas, no todos.
        </p>
        <p>
          <strong>💡 Sin useCallback:</strong> Todos los hijos se renderizarían
          en cada click.
        </p>
      </div>
      <div className="counter-display">Total: {valor}</div>
      <hr />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>
    </div>
  );
};
