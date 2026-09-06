import { v4 as uuidv4 } from "uuid";
import type { Action, State } from "../types/Todo";

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [...state, { id: uuidv4(), text: action.text, completed: false }];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
};
