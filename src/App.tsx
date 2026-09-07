import "./App.css";
import TodoInput from "./features/todo/components/TodoInput";
import TodoList from "./features/todo/components/TodoList";
import { TodoProvider } from "./features/todo/contexts/TodoContext";

function App() {
  return (
    <>
      <h1>React-useReducer-TodoApp</h1>
      <TodoProvider>
        <div>
          <TodoList />
          <TodoInput />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
