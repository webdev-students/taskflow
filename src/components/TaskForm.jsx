import { useState } from 'react';
import useTaskStore from '../store/useTaskStore';

function TaskForm() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    addTask({ title, description, category, priority, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
    setError('');
  }

  const inputClass =
    'rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500';
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className={inputClass}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className={inputClass}
        />
        <div className="flex flex-wrap gap-3">
          <select
            className={inputClass}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
          </select>
          <select
            className={inputClass}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
          <input
            className={inputClass}
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="self-start rounded-md bg-indigo-600 px-4 py-2 text-sm
        font-medium text-white hover:bg-indigo-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
