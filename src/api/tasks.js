export async function fetchInitialTasks() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=8',
  );
  if (!res.ok) throw new Error('Failed to fetch the initial tasks');

  const data = await res.json();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: '',
    category: 'Work',
    priority: 'Medium',
    dueDate: '',
    completed: item.completed,
  }));
}

export async function saveTaskToApi(task) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error('Failed to save task');
  return res.json();
}
