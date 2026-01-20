import React from "react";

export const Small = React.memo(({ value = 0 }) => {
  console.log("🔄 Small component re-renderizado");
  return <small>{value}</small>;
});
