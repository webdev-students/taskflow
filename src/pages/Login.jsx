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
    <div>
      <h1>Log in to TaskFlow</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
