import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("✅ Componente Message montado");

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("🧹 Componente Message desmontado - Cleanup ejecutado");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="alert alert-success" style={{ marginTop: "1rem" }}>
      <h3>¡Usuario válido! 🎉</h3>
      <p>
        <strong>🖱️ Mueve el mouse:</strong>
      </p>
      <div className="card">
        <div className="card-body">
          <p>
            <strong>Coordenadas X:</strong> {coords.x}px
          </p>
          <p>
            <strong>Coordenadas Y:</strong> {coords.y}px
          </p>
        </div>
      </div>
      <p className="mt-2">
        <em>💡 Abre la consola para ver el ciclo de vida del componente</em>
      </p>
    </div>
  );
};
