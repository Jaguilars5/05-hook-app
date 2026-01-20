import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/components/todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) || [];
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };
  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    // console.log({id});
    dispatchTodo({
      type: "Toggle Todo",
      payload: id,
    });
  };
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
    todos,
    todosCount,
  };
};
