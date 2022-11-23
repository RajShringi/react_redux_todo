import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getTime(),
        todo,
        isDone: false,
      })
    );
    setTodo("");
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-4 text-gray-700">
        <div className="text-center">
          <h1 className="text-5xl">📒 TODOS 📒</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block w-full p-2 my-4 border border-gray-300 rounded-xl shadow-inner"
              placeholder="Enter Todo"
              value={todo}
              name="todo"
              onChange={(e) => handleChange(e)}
            />
          </form>
        </div>
        <TodoList />
      </div>
    </>
  );
}
export default App;
