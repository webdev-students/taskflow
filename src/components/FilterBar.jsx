import useTaskStore from '../store/useTaskStore';

function FilterBar() {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);
  const categoryFilter = useTaskStore((state) => state.categoryFilter);
  const setCategoryFilter = useTaskStore((state) => state.setCategoryFilter);
  const priorityFilter = useTaskStore((state) => state.priorityFilter);
  const setPriorityFilter = useTaskStore((state) => state.setPriorityFilter);
  const searchTerm = useTaskStore((state) => state.searchTerm);
  const setSearchTerm = useTaskStore((state) => state.setSearchTerm);

  return (
    <div>
      {['all', 'active', 'completed'].map((f) => (
        <button key={f} onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="all">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Urgent</option>
      </select>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
      />
    </div>
  );
}

export default FilterBar;
