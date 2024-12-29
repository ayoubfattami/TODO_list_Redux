import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice'

function TodoList() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Supprimer</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList