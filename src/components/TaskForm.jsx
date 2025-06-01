import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import '../styles/dashboard.css';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h3>Add Task</h3>
      <input
        className="task-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        className="task-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit" className="btn add-task-btn">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
