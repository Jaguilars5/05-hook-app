// import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
export const FromWhitCustomHoock = () => {
  const { fromState, onInputChange,username, email, password,onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });
  // const { username, email, password } = fromState;

  return (
    <>
      <h1>Simple form con custom hoock</h1>
      <hr />
      <input
        type="text"
        className="from-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="from-control mt-2"
        placeholder="user@unemi.edu.ec"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="passaword"
        className="from-control mt-2"
        placeholder="Contrasena"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onReset} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
