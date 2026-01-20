import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log(`🔄 Hijo ${numero} re-renderizado`);

  return (
    <button
      className="btn btn-primary"
      onClick={() => incrementar(numero)}
      style={{ minWidth: "80px", fontSize: "1.2rem" }}
    >
      + {numero}
    </button>
  );
});
