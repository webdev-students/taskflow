import { useNavigate, useParams } from 'react-router-dom';
import useTaskStore from '../store/useTaskStore';
import { useState } from 'react';

function TaskDetail() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const tasks = useTaskStore((state) => state.tasks);
  const editTask = useTaskStore((state) => state.editTask);
  const task = tasks.find((t) => String(t.id) === taskId);
  const [title, setTitle] = useState(task?.title || '');

  if (!task) return <p>Page not found.</p>;

  function handleSave() {
    editTask(task.id, { title });
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate || 'No Due Date'}</p>
      <p>Description: {task.description || 'None'}</p>
    </div>
  );
}

export default TaskDetail;
