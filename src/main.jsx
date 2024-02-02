import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { CallbackHoock } from "./06-memos/CallbackHoock";
// import { MemoHoock } from "./06-memos/MemoHoock";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Memorize } from "./06-memos/Memorize";
import { TodoApp } from "./08-useReducer/TodoApp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHoock/> */}
    {/* <Padre/> */}
    {/* <CallbackHoock/> */}
    <TodoApp />
  </React.StrictMode>
);
