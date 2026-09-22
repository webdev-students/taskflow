import useTaskStore from '../store/useTaskStore';

function isOverdue(task) {
  if (!task.dueDate || task.completed) return false;
  return new Date(task.dueDate) < new Date();
}

function StatsBar() {
  const tasks = useTaskStore((state) => state.tasks);
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const overdue = tasks.filter(isOverdue).length;
  return (
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-medium text-gray-500">Total</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{total}</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-medium text-emerald-600">Completed</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{completed}</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-medium text-indigo-600">Active</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{active}</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-medium text-red-600">Overdue</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{overdue}</p>
      </div>
    </div>
  );
}

export default StatsBar;
