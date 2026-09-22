import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { useState } from 'react';

function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    login({ name, email });
    navigate('/dashboard');
  }

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">
          Log in to TaskFlow
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 
            focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 
            focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white 
          hover:bg-indigo-500 cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
