import { createStore } from "redux";

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_todo":
      return [...state, action.payload];
    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle_isDone":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
