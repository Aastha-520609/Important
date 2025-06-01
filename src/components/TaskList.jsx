import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import '../styles/dashboard.css';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      <h3>Tasks ({tasks.length})</h3>
      {tasks.length === 0 && <p>No tasks available</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
