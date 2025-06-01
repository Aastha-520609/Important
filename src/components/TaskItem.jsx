import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const TaskItem = ({ task }) => {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="task-item-card">
      <h4>{task.title}</h4>
      <p>{task.description || <em>No description</em>}</p>
      <div className="task-item-buttons">
        <button className="btn view-btn" onClick={() => navigate(`/dashboard/tasks/${task.id}`)}>
          View
        </button>
        <button className="btn delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
