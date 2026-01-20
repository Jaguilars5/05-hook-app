import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import "./index.css";
import "./practices.css";

// Mensaje de bienvenida en consola
console.log(
  "%c🎣 React Hooks - Prácticas",
  "color: #667eea; font-size: 24px; font-weight: bold;",
);
console.log(
  "%c📚 Curso de Fernando Herrera - DevTalles",
  "color: #764ba2; font-size: 14px;",
);
console.log(
  "%c💡 Mantén la consola abierta para ver los mensajes educativos de cada práctica",
  "color: #4caf50; font-size: 12px;",
);
console.log("-----------------------------------");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
);
