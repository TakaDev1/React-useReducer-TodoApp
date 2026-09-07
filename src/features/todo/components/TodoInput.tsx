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
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
};

export default TodoInput;
