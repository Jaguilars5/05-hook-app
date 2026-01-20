import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useTodo } from "../../src/hooks/useTodo";

describe("Pruebas en useTodo", () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useTodo());
    const {
      todos,
      todosCount,
      pendingTodosCount,
      handleNewTodo,
      handleDeleteTodo,
      handleToggleTodo,
    } = result.current;

    expect(todos).toEqual([]);
    expect(todosCount).toBe(0);
    expect(pendingTodosCount).toBe(0);
    expect(handleNewTodo).toEqual(expect.any(Function));
    expect(handleDeleteTodo).toEqual(expect.any(Function));
    expect(handleToggleTodo).toEqual(expect.any(Function));
  });

  test("Debe agregar un TODO", () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = {
      id: 1,
      description: "Aprender React",
      done: false,
    };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0]).toEqual(newTodo);
    expect(result.current.todosCount).toBe(1);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test("Debe eliminar un TODO", () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = {
      id: 1,
      description: "Aprender React",
      done: false,
    };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    expect(result.current.todos.length).toBe(1);

    act(() => {
      result.current.handleDeleteTodo(1);
    });

    expect(result.current.todos.length).toBe(0);
    expect(result.current.todosCount).toBe(0);
  });

  test("Debe hacer toggle de un TODO", () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = {
      id: 1,
      description: "Aprender React",
      done: false,
    };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    expect(result.current.todos[0].done).toBe(false);
    expect(result.current.pendingTodosCount).toBe(1);

    act(() => {
      result.current.handleToggleTodo(1);
    });

    expect(result.current.todos[0].done).toBe(true);
    expect(result.current.pendingTodosCount).toBe(0);

    act(() => {
      result.current.handleToggleTodo(1);
    });

    expect(result.current.todos[0].done).toBe(false);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test("Debe persistir los TODOs en localStorage", () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = {
      id: 1,
      description: "Aprender Testing",
      done: false,
    };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    expect(storedTodos).toEqual([newTodo]);
  });

  test("Debe cargar TODOs desde localStorage", () => {
    const initialTodos = [
      { id: 1, description: "TODO 1", done: false },
      { id: 2, description: "TODO 2", done: true },
    ];

    localStorage.setItem("todos", JSON.stringify(initialTodos));

    const { result } = renderHook(() => useTodo());

    expect(result.current.todos).toEqual(initialTodos);
    expect(result.current.todosCount).toBe(2);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test("Debe manejar múltiples TODOs correctamente", () => {
    const { result } = renderHook(() => useTodo());
    const todo1 = { id: 1, description: "TODO 1", done: false };
    const todo2 = { id: 2, description: "TODO 2", done: false };
    const todo3 = { id: 3, description: "TODO 3", done: false };

    act(() => {
      result.current.handleNewTodo(todo1);
      result.current.handleNewTodo(todo2);
      result.current.handleNewTodo(todo3);
    });

    expect(result.current.todosCount).toBe(3);
    expect(result.current.pendingTodosCount).toBe(3);

    act(() => {
      result.current.handleToggleTodo(2);
    });

    expect(result.current.pendingTodosCount).toBe(2);

    act(() => {
      result.current.handleDeleteTodo(1);
    });

    expect(result.current.todosCount).toBe(2);
    expect(result.current.todos.find((t) => t.id === 1)).toBeUndefined();
  });
});
