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
    <div className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink
          to="/dashboard"
          className="text-lg font-semibold text-gray-900"
        >
          TaskFlow
        </NavLink>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium 
            text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
