import { Navigate, Route, Routes } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <BackButton />
      <div style={{ paddingTop: "70px", padding: "2rem" }}>
        <div className="alert alert-info" style={{ marginBottom: "2rem" }}>
          <h2>🌐 useContext - Aplicación con Estado Global</h2>
          <p>
            <strong>📚 Conceptos:</strong>
          </p>
          <ul>
            <li>
              <code>useContext</code> - Hook para consumir contexto
            </li>
            <li>
              <code>UserProvider</code> - Componente que provee el contexto
            </li>
            <li>
              <code>React Router</code> - Navegación entre páginas
            </li>
          </ul>
          <p>
            <strong>💡 Navega:</strong> Usa el menú para explorar las diferentes
            páginas y ver cómo comparten el estado del usuario.
          </p>
        </div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="/usecontext" />} />
        </Routes>
      </div>
    </UserProvider>
  );
};
