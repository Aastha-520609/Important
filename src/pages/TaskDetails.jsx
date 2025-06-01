import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks } = useTasks();
  const task = tasks.find((t) => t.id === parseInt(taskId));

  if (!task) return <p>Task not found.</p>;

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default TaskDetails;