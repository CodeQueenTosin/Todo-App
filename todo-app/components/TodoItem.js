import { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = async () => {
    await onUpdate({ id: todo.id, title, completed: todo.completed });
    setEditing(false);
  };

  const handleDelete = async () => {
    await onDelete(todo.id);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          className="mr-4 rounded"
          onChange={() =>
            onUpdate({ id: todo.id, title: todo.title, completed: !todo.completed })
          }
        />
        {editing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
            className="flex-1 p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="ml-10"> 
        {editing ? (
          <button onClick={handleUpdate} className="btn-save">
            Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="btn-edit">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="btn-delete ml-10">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
