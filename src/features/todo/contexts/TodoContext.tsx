import React, { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { Action, State } from "../types/Todo";
import { todoReducer } from "../reducers/todoReducer";

interface TodoContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  }

  return context;
};

export default TodoContext;
