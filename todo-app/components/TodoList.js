import TodoItem from './TodoItem'

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className="space-y-30">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TodoList