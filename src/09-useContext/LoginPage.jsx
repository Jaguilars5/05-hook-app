import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 123,
      name: "Jefferson Aguilar",
      email: "jaguilars5@unemi.edu.ec",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="practice-container">
      <h1>🔐 Login Page</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Modificar el estado global con <code>setUser</code>
          </li>
          <li>Los cambios se reflejan en toda la aplicación</li>
          <li>Simulación de login/logout</li>
        </ul>
        <p>
          <strong>💡 Prueba:</strong> Inicia sesión y ve a Home para ver los
          datos del usuario.
        </p>
      </div>
      <hr />

      {user ? (
        <div className="card">
          <div className="card-body">
            <h3>✅ Sesión Activa</h3>
            <p>
              <strong>Usuario:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button onClick={handleLogout} className="btn btn-danger">
              🚪 Cerrar Sesión
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h3>🔓 No hay sesión activa</h3>
            <p>Haz clic en el botón para simular un inicio de sesión:</p>
            <button onClick={handleLogin} className="btn btn-primary">
              🔑 Iniciar Sesión
            </button>
          </div>
        </div>
      )}

      <div className="card" style={{ marginTop: "2rem" }}>
        <div className="card-body">
          <h4>Estado actual del contexto:</h4>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(user, null, 3)}
          </pre>
        </div>
      </div>
    </div>
  );
};
