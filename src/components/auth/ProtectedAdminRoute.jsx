import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // Adjust path as needed

const ProtectedAdminRoute = ({ children }) => {
  // Check if auth bypass is enabled via environment variable
  const bypassAuth = import.meta.env.VITE_BYPASS_AUTH === 'true';
  
  if (bypassAuth) {
    console.warn('🚨 Authentication bypass is enabled - for development only!');
    return children;
  }

  const { user, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Check if user is authenticated and has admin role
  const isAdmin = user && user.role === 'admin';

  if (!isAdmin) {
    // Redirect to login or unauthorized page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;