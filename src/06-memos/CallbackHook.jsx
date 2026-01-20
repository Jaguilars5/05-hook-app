import { useCallback, useState } from "react";
import { ShowIncrement } from "./components/ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(5);
  const incrementFather = useCallback((value) => {
    setcounter((c) => c + value);
  }, []);

  return (
    <div className="practice-container">
      <h1>useCallback - Memorización de Funciones</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>useCallback</code> para memorizar funciones
          </li>
          <li>Prevenir recreación de funciones en cada render</li>
          <li>Optimizar componentes hijos con React.memo</li>
        </ul>
        <p>
          <strong>🔍 Abre la consola:</strong> Verás cuándo se renderiza el
          componente hijo.
        </p>
        <p>
          <strong>💡 Ventaja:</strong> Sin useCallback, la función se recrearía
          en cada render, causando re-renders innecesarios del hijo.
        </p>
      </div>
      <div className="counter-display">{counter}</div>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </div>
  );
};
