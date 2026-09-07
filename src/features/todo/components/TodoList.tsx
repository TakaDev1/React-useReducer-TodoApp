import React from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useTodo();

  return (
    <div>
      {state.length > 0 ? (
        <div>
          {state.map((todo) => (
            <li key={todo.id}>
              <span onClick={() => dispatch({ type: "toggle", id: todo.id })}>{todo.text}</span>
              <button onClick={() => dispatch({ type: "remove", id: todo.id })}>削除</button>
            </li>
          ))}
          <div>
            <button onClick={() => dispatch({ type: "clear" })}>全削除</button>
          </div>
        </div>
      ) : (
        <p>タスクが空です</p>
      )}
    </div>
  );
};

export default TodoList;
