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

  const selectClass =
    'rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500';

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {['all', 'active', 'completed'].map((f) => (
        <div className="flex gap-1 rounded-md bg-gray-100 p-1">
          <button
            className={`rounded px-3 py-1 text-sm font-medium capitalize ${
              filter === f
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-900'
            }`}
            key={f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        </div>
      ))}
      <select
        className={selectClass}
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>
      <select
        className={selectClass}
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
        className="ml-auto rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
    </div>
  );
}

export default FilterBar;
