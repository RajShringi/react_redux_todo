import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleIsDone } from "../store/actions";
function TodoList() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(toggleIsDone(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <ul className="my-4">
        {todos.map(({ todo, id, isDone }) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center text-lg border-b border-t py-2"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={isDone ? true : false}
                  onChange={() => handleChange(id)}
                  className="w-6 h-6 text-green-400 bg-gray-100 rounded-full border-gray-300 focus:ring-green-300 focus:ring-2 shadow-inner"
                />
                <p>{todo}</p>
              </div>
              <button onClick={() => handleDelete(id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default TodoList;
