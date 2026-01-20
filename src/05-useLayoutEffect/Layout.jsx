import { useLayoutEffect, useRef, useState } from "react";
import { CharacterCard, Loading } from "../03-examples/Components";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { Aumentar, counter, Decrementar } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  );

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (pRef.current) {
      const { width, height } = pRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
      console.log(
        `📐 useLayoutEffect ejecutado - Tamaño: ${width}px x ${height}px`,
      );
    }
  }, [data]);

  return (
    <div className="practice-container">
      <h1>useLayoutEffect - Mediciones del DOM</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            <code>useLayoutEffect</code> vs <code>useEffect</code>
          </li>
          <li>Mediciones del DOM antes de pintar en pantalla</li>
          <li>Prevención de parpadeos visuales</li>
        </ul>
        <p>
          <strong>💡 Diferencia:</strong> useLayoutEffect se ejecuta
          sincrónicamente después de las mutaciones del DOM, pero antes de que
          el navegador pinte.
        </p>
        <p>
          <strong>🔍 Abre la consola:</strong> Verás las mediciones en tiempo
          real cada vez que cambie el personaje.
        </p>
      </div>
      <hr />

      <div className="card" style={{ marginBottom: "1rem" }}>
        <div className="card-body">
          <h4>📏 Mediciones del Contenedor:</h4>
          <p>
            <strong>Ancho:</strong> {Math.round(boxSize.width)}px
          </p>
          <p>
            <strong>Alto:</strong> {Math.round(boxSize.height)}px
          </p>
        </div>
      </div>

      <div ref={pRef}>
        {isLoading ? <Loading /> : <CharacterCard character={data} />}
      </div>

      <div className="nav-buttons" style={{ marginTop: "2rem" }}>
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => Decrementar(1)}
        >
          ← Anterior
        </button>
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => Aumentar(1)}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};
