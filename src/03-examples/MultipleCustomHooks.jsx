import { useCounter, useFetch } from "../hooks";
import { CharacterCard, Loading } from "./Components";

export const MultipleCustomHooks = () => {
  const { Aumentar, counter, Decrementar } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  );

  return (
    <div className="practice-container">
      <h1>Rick & Morty - API</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>Integración con APIs externas</li>
          <li>
            Custom hooks: <code>useFetch</code> y <code>useCounter</code>
          </li>
          <li>Manejo de estados de carga y datos</li>
          <li>Composición de múltiples hooks</li>
        </ul>
        <p>
          <strong>💡 Navega:</strong> Usa los botones para ver diferentes
          personajes de Rick & Morty.
        </p>
      </div>
      <h3>Personaje #{counter}</h3>
      <hr />

      {isLoading ? <Loading /> : <CharacterCard character={data} />}

      <div className="nav-buttons">
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
