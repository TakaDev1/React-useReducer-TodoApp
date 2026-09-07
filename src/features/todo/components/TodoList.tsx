import React from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useTodo();

  return (
    <div>
      {state.length > 0 ? (
        <div>
          {state.map((todo) => (
            <li
              key={todo.id}
              className="text-white mx-auto w-1/3 flex justify-around py-3 rounded bg-gray-500 font-bold my-5"
            >
              <span
                onClick={() => dispatch({ type: "toggle", id: todo.id })}
                className={`${todo.completed ? "block line-through cursor-pointer hover:opacity-80" : ""}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: "remove", id: todo.id })}
                className="w-20 bg-yellow-800 text rounded-full cursor-pointer hover:opacity-70"
              >
                削除
              </button>
            </li>
          ))}
          <div>
            <button
              onClick={() => dispatch({ type: "clear" })}
              className="mt-10 w-20 py-2 bg-red-700 rounded-full text-white font-bold cursor-pointer hover:opacity-70"
            >
              全削除
            </button>
          </div>
        </div>
      ) : (
        <p className="text-white">タスクが空です</p>
      )}
    </div>
  );
};

export default TodoList;
