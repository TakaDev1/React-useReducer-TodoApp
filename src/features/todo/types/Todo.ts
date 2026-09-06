export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type Todos = Todo[];

export type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: string }
  | { type: "remove"; id: string }
  | { type: "clear" };
