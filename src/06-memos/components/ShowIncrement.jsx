import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("🔄 ShowIncrement component re-renderizado");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar +5
    </button>
  );
});
