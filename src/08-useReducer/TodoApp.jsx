import { TodoList, TodoAdd } from "./components";
import { useTodo } from "../hooks";

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
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes:{pendingTodosCount} </small>
      </h1>
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
    </>
  );
};
