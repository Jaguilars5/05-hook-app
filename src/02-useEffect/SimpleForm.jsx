import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Jefferson",
    email: "jaguilars5@unemi.edu.ec",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="practice-container">
      <h1>Formulario Simple</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Manejo de estado con <code>useState</code>
          </li>
          <li>Formularios controlados en React</li>
          <li>Renderizado condicional</li>
        </ul>
        <p>
          <strong>💡 Prueba esto:</strong> Escribe "Christina" en el campo de
          username para ver un componente condicional.
        </p>
      </div>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@unemi.edu.ec"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Christina" && <Message />}
    </div>
  );
};
