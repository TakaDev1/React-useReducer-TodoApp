import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoInput = () => {
  const { dispatch } = useTodo();
  const [text, setText] = useState<string>("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({
      type: "add",
      text: text.trim(),
    });

    setText("");
  };
  return (
    <div className="w-1/3 flex justify-around mx-auto mt-10">
      <input type="text" value={text} onChange={handleText} className="border rounded text-white" />
      <button
        onClick={handleAdd}
        className="w-20 bg-gray-500 rounded-full hover:opacity-70 text-white cursor-pointer"
      >
        追加
      </button>
    </div>
  );
};

export default TodoInput;
