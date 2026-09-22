import { NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

function NavBar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }
  return (
    <div>
      <nav>
        <NavLink to="/dashboard">TaskFlow</NavLink>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </div>
  );
}

export default NavBar;
