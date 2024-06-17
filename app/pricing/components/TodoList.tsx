'use client'
import { useTodoStore } from "../store/todo";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div className="App">
      <ul>
        {Object.values(todos).map((todo) => (
          <li key={todo.id}>
            <input
              checked={todo.done}
              type="checkbox"
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.done ? <s>{todo.title}</s> : todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;