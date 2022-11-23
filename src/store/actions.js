export function addTodo(todo) {
  return {
    type: "add_todo",
    payload: todo,
  };
}

export function deleteTodo(id) {
  return {
    type: "delete_todo",
    payload: id,
  };
}

export function toggleIsDone(id) {
  return {
    type: "toggle_isDone",
    payload: id,
  };
}
