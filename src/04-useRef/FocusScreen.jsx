import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="practice-container">
      <h1>useRef - Focus Screen</h1>
      <hr />
      <p>Haz clic en el botón para seleccionar el texto del input:</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button onClick={onClick} className="btn btn-primary mt-2">
        Seleccionar Input
      </button>
    </div>
  );
};
