export const todoReducer = (intialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...intialState, action.payload];
    case "Remove Todo":
      return intialState.filter((todo) => todo.id !== action.payload);
    case "Toggle Todo":
      return intialState.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return intialState;
  }
};
