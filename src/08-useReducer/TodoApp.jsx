import { useTodo } from "../hooks";
import { TodoAdd, TodoList } from "./components";

export const TodoApp = () => {
  const {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
    todos,
    todosCount,
  } = useTodo();
  return (
    <div className="practice-container">
      <h1>TODO App - useReducer</h1>
      <div className="alert alert-info">
        <p>
          <strong>📚 ¿Qué aprenderás aquí?</strong>
        </p>
        <ul>
          <li>
            Uso de <code>useReducer</code> para estado complejo
          </li>
          <li>Implementación de CRUD (Create, Read, Update, Delete)</li>
          <li>
            Persistencia en <code>localStorage</code>
          </li>
          <li>
            Custom hook <code>useTodo</code>
          </li>
        </ul>
        <p>
          <strong>💡 Funcionalidades:</strong> Agregar, completar y eliminar
          tareas. Todo se guarda automáticamente.
        </p>
      </div>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h3>
          Total: {todosCount} |{" "}
          <span style={{ color: "#667eea" }}>
            Pendientes: {pendingTodosCount}
          </span>
        </h3>
      </div>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>

      <div className="col-5">
        <h4>Agregar Todo</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </div>
  );
};
