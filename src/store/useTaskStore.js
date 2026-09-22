import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    // eslint-disable-next-line
    (set, get) => ({
      tasks: [],
      filter: 'all',
      categoryFilter: 'all',
      priorityFilter: 'all',
      searchTerm: '',
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              title: task.title,
              description: task.description || '',
              category: task.category || 'Personal',
              priority: task.priority || 'Medium',
              dueDate: task.dueDate || '',
              completed: false,
            },
          ],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t,
          ),
        })),

      editTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, ...updates } : t,
          ),
        })),
      setFilter: (filter) => set({ filter }),
      setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
      setPriorityFilter: (priorityFilter) => set({ priorityFilter }),
      setSearchTerm: (searchTerm) => set({ searchTerm }),

      getFilteredTasks: () => {
        const { tasks, filter, categoryFilter, priorityFilter, searchTerm } =
          get();
        return tasks
          .filter(
            (t) =>
              filter === 'all' ||
              (filter === 'active' ? !t.completed : t.completed),
          )
          .filter(
            (t) => categoryFilter === 'all' || t.category === categoryFilter,
          )
          .filter(
            (t) => priorityFilter === 'all' || t.priority === priorityFilter,
          )
          .filter((t) =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
      },

      seedTasks: (tasks) => set({ tasks }),
    }),
    { name: 'taskflow-tasks' },
  ),
);

export default useTaskStore;
