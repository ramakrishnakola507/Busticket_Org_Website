// src/utils/ProtectedRoute.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Or your custom loading component
  }
  
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
