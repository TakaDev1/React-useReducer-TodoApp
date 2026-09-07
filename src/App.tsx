import "./App.css";
import TodoInput from "./features/todo/components/TodoInput";
import TodoList from "./features/todo/components/TodoList";
import { TodoProvider } from "./features/todo/contexts/TodoContext";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <h1>React-useReducer-TodoApp</h1>
        <TodoProvider>
          <div>
            <TodoList />
            <TodoInput />
          </div>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
