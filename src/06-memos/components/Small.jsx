import React from "react";
// import { memo } from "react";
export const Small = React.memo(({ value = 0 }) => {
  console.log("No");
  return <small>{value}</small>;
});
