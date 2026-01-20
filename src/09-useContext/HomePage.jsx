import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="practice-container">
      <h1>🏠 Página Principal</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>useContext</code> para acceder a datos globales
          </li>
          <li>Compartir estado entre componentes sin prop drilling</li>
          <li>Context API de React</li>
        </ul>
        <p>
          <strong>💡 Observa:</strong> El usuario se muestra automáticamente
          desde el contexto global.
        </p>
      </div>
      <hr />

      {user ? (
        <div className="card">
          <div className="card-body">
            <h3>👋 Bienvenido, {user.name}!</h3>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <div style={{ marginTop: "1rem" }}>
              <h4>Datos completos del usuario:</h4>
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
      ) : (
        <div className="alert alert-warning">
          <p>
            ⚠️ No hay usuario en sesión. Ve a <strong>Login</strong> para
            iniciar sesión.
          </p>
        </div>
      )}
    </div>
  );
};
