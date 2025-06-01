import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useTasks } from '../context/TaskContext';
import { useEffect } from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { tasks } = useTasks();

  useEffect(() => {
    document.title = `Tasks (${tasks.length})`;
  }, [tasks]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <section className="task-form-section">
        <TaskForm />
      </section>

      <section className="task-list-section">
        <TaskList />
      </section>
    </div>
  );
};

export default Dashboard;
