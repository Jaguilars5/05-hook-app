import { todoReducer } from "../../src/08-useReducer/components/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];

  test("Debe retornar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe agregar un TODO", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo TODO",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
    expect(newState).toContain(initialState[0]);
  });

  test("Debe eliminar un TODO", () => {
    const action = {
      type: "Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
    expect(newState).not.toContain(initialState[0]);
  });

  test("Debe hacer toggle de un TODO", () => {
    const action = {
      type: "Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });

  test("No debe modificar el estado con una acción desconocida", () => {
    const action = {
      type: "Unknown Action",
      payload: {},
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toBe(initialState);
  });

  test("Debe manejar múltiples TODOs", () => {
    const state = [
      { id: 1, description: "TODO 1", done: false },
      { id: 2, description: "TODO 2", done: false },
      { id: 3, description: "TODO 3", done: true },
    ];

    // Toggle del segundo TODO
    const toggleAction = {
      type: "Toggle Todo",
      payload: 2,
    };

    const newState = todoReducer(state, toggleAction);

    expect(newState[0].done).toBe(false);
    expect(newState[1].done).toBe(true);
    expect(newState[2].done).toBe(true);

    // Eliminar el primer TODO
    const removeAction = {
      type: "Remove Todo",
      payload: 1,
    };

    const newState2 = todoReducer(newState, removeAction);

    expect(newState2.length).toBe(2);
    expect(newState2.find((t) => t.id === 1)).toBeUndefined();
  });
});
