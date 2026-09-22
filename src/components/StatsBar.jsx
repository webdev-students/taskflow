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
    <div>
      <div>
        <p>Total</p>
        <p>{total}</p>
      </div>
      <div>
        <p>Completed</p>
        <p>{completed}</p>
      </div>
      <div>
        <p>Active</p>
        <p>{active}</p>
      </div>
      <div>
        <p>Overdue</p>
        <p>{overdue}</p>
      </div>
    </div>
  );
}

export default StatsBar;
