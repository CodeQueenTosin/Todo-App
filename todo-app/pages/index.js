import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import '../styles/styles.css';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const handleCreate = async () => {
    if (newTodo.trim() !== '') {
      try {
        const response = await axios.post('/api/todos', {
          title: newTodo,
        });
        setTodos([...todos, response.data]);
        setNewTodo('');
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    }
  };

  const handleUpdate = async (todo) => {
    try {
      const response = await axios.put('/api/todos', todo);
      const updatedTodo = response.data;
      setTodos(
        todos.map((t) =>
          t.id === updatedTodo.id ? { ...t, ...updatedTodo } : t
        )
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('/api/todos', {
        data: { id },
      });
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <div className="home-container">
        <h1 className="title">TODO App</h1>
        <div className="text-center">
            <h6>Never forget a thing! Log your reminders!</h6>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            placeholder="What's on your mind?"
            className="input"
          />
          <button onClick={handleCreate} className="add-button">
            Add
          </button>
        </div>
        <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
      <div className="footer">
         Made with ❤️ by Codequeentosin
      </div>
    </div>
  );
};

export default Home;
