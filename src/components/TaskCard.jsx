import { Link } from 'react-router-dom';
import useTaskStore from '../store/useTaskStore';

function TaskCard({ task }) {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div className="text-black">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <Link to={`/tasks/${task.id}`}>
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
        </span>
      </Link>
      <span>[{task.priority}]</span>
      {task.dueDate && <span> Due: {task.dueDate} </span>}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
