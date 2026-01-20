export const AboutPage = () => {
  return (
    <div className="practice-container">
      <h1>📚 Acerca de useContext</h1>
      <hr />

      <div className="card">
        <div className="card-body">
          <h3>¿Qué es useContext?</h3>
          <p>
            <code>useContext</code> es un Hook de React que permite leer y
            suscribirse a un contexto desde tu componente.
          </p>

          <h3 style={{ marginTop: "2rem" }}>🎯 Ventajas:</h3>
          <ul>
            <li>
              ✅ Evita el "prop drilling" (pasar props por múltiples niveles)
            </li>
            <li>✅ Comparte datos globales entre componentes</li>
            <li>✅ Facilita la gestión de estado compartido</li>
            <li>✅ Mejora la legibilidad del código</li>
          </ul>

          <h3 style={{ marginTop: "2rem" }}>🛠️ Cómo funciona:</h3>
          <ol>
            <li>
              Crear un Context con <code>createContext()</code>
            </li>
            <li>
              Proveer el contexto con <code>&lt;UserProvider&gt;</code>
            </li>
            <li>
              Consumir el contexto con <code>useContext()</code>
            </li>
          </ol>

          <div className="alert alert-info" style={{ marginTop: "2rem" }}>
            <p>
              <strong>💡 Tip:</strong> En esta aplicación, el contexto maneja la
              información del usuario y está disponible en todas las páginas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
