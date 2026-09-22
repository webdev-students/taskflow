import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route
          path="tasks/:taskId"
          element={
            <ProtectedRoute>
              <TaskDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
