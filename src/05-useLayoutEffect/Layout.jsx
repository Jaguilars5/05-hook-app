import { useCounter, useFetch} from "../hooks";
import { CharacterCard, Loading } from "../03-examples/Components";

export const Layout = () => {
  const { Aumentar, counter, Decrementar } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  return (
    <>
      <h2>BreakingBad Quotes</h2>
      <hr />
      {isLoading ? <Loading/> : CharacterCard(data)}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => Decrementar(1)}
      >
        Personaje Anterior
      </button>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => Aumentar(1)}
      >
        Siguiente Personaje
      </button>
      <br />
    </>
  );
};


//No funciona