import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="practice-container">
      <h1>Formulario con Custom Hook</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Creación y uso de Custom Hooks (<code>useForm</code>)
          </li>
          <li>Reutilización de lógica entre componentes</li>
          <li>Manejo de formularios de manera eficiente</li>
        </ul>
        <p>
          <strong>💡 Ventaja:</strong> El custom hook <code>useForm</code>{" "}
          maneja toda la lógica del formulario, haciéndolo reutilizable.
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onReset} className="btn btn-primary mt-2">
        Borrar
      </button>
    </div>
  );
};
