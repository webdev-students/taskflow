import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import useAuthStore from '../store/useAuthStore';
import useTaskStore from '../store/useTaskStore';
import { fetchInitialTasks, saveTaskToApi } from '../api/tasks';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import FilterBar from '../components/FilterBar';
import StatsBar from '../components/StatsBar';

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  const tasks = useTaskStore((state) => state.tasks);
  // eslint-disable-next-line no-unused-vars
  const filter = useTaskStore((state) => state.filter);
  // eslint-disable-next-line no-unused-vars
  const categoryFilter = useTaskStore((state) => state.categoryFilter);
  // eslint-disable-next-line no-unused-vars
  const priorityFilter = useTaskStore((state) => state.priorityFilter);
  // eslint-disable-next-line no-unused-vars
  const searchTerm = useTaskStore((state) => state.searchTerm);
  const seedTasks = useTaskStore((state) => state.seedTasks);
  const addTask = useTaskStore((state) => state.addTask);
  const getFilteredTasks = useTaskStore((state) => state.getFilteredTasks);
  const filteredTasks = getFilteredTasks();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['initial-tasks'],
    queryFn: fetchInitialTasks,
    enabled: tasks.length === 0,
  });

  useEffect(() => {
    if (data && tasks.length === 0) {
      seedTasks(data);
    }
  }, [data, tasks.length, seedTasks]);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: saveTaskToApi,
    onSuccess: (savedTask) => {
      addTask(savedTask);
      queryClient.invalidateQueries({ queryKey: ['initial-tasks'] });
    },
  });

  function handleAddTask(newTask) {
    mutation.mutate(newTask);
  }

  if (isLoading && tasks.length === 0) return <p>Loading your tasks...</p>;
  if (isError && tasks.length === 0)
    return <p>Could not load starter tasks — you can still add your own.</p>;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Welcome, {user?.name}
      </h1>
      <StatsBar />
      <TaskForm onSubmit={handleAddTask} isSaving={mutation.isPending} />
      <FilterBar />
      <div className="flex flex-col gap-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
