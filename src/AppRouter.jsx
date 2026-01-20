import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { PracticeLayout } from "./components/PracticeLayout";

// 01-useState
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

// 02-useEffect
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";

// 03-examples
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

// 04-useRef
import { FocusScreen } from "./04-useRef/FocusScreen";

// 05-useLayoutEffect
import { Layout } from "./05-useLayoutEffect/Layout";

// 06-memos
import { CallbackHook } from "./06-memos/CallbackHook";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";

// 07-tarea-memo
import { Padre } from "./07-tarea-memo/Padre";

// 08-useReducer
import { TodoApp } from "./08-useReducer/TodoApp";

// 09-useContext
import { MainApp } from "./09-useContext/MainApp";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* useState Routes */}
      <Route
        path="/usestate"
        element={
          <PracticeLayout title="useState - Contador">
            <CounterApp />
          </PracticeLayout>
        }
      />
      <Route
        path="/usestate-custom"
        element={
          <PracticeLayout title="useState - Custom Hook">
            <CounterWithCustomHook />
          </PracticeLayout>
        }
      />

      {/* useEffect Routes */}
      <Route
        path="/useeffect"
        element={
          <PracticeLayout title="useEffect - Formulario">
            <SimpleForm />
          </PracticeLayout>
        }
      />
      <Route
        path="/useeffect-custom"
        element={
          <PracticeLayout title="useEffect - Custom Hook">
            <FormWithCustomHook />
          </PracticeLayout>
        }
      />

      {/* Examples Routes */}
      <Route
        path="/examples"
        element={
          <PracticeLayout title="Múltiples Custom Hooks - Rick & Morty">
            <MultipleCustomHooks />
          </PracticeLayout>
        }
      />

      {/* useRef Routes */}
      <Route
        path="/useref"
        element={
          <PracticeLayout title="useRef - Focus Screen">
            <FocusScreen />
          </PracticeLayout>
        }
      />

      {/* useLayoutEffect Routes */}
      <Route
        path="/uselayouteffect"
        element={
          <PracticeLayout title="useLayoutEffect - Layout">
            <Layout />
          </PracticeLayout>
        }
      />

      {/* Memos Routes */}
      <Route
        path="/memos"
        element={
          <PracticeLayout title="React.memo - Memorize">
            <Memorize />
          </PracticeLayout>
        }
      />
      <Route
        path="/memos-usememo"
        element={
          <PracticeLayout title="useMemo - Optimización">
            <MemoHook />
          </PracticeLayout>
        }
      />
      <Route
        path="/memos-callback"
        element={
          <PracticeLayout title="useCallback - Funciones">
            <CallbackHook />
          </PracticeLayout>
        }
      />

      {/* Tarea Memo Routes */}
      <Route
        path="/tarea-memo"
        element={
          <PracticeLayout title="Tarea: Optimización">
            <Padre />
          </PracticeLayout>
        }
      />

      {/* useReducer Routes */}
      <Route
        path="/usereducer"
        element={
          <PracticeLayout title="useReducer - TODO App">
            <TodoApp />
          </PracticeLayout>
        }
      />

      {/* useContext Routes */}
      <Route path="/usecontext/*" element={<MainApp />} />

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
