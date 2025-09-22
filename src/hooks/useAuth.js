// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCurrentUser,
  selectCurrentUserId,
  selectCurrentToken,
  selectIsAuthenticated,
  selectIsAuthenticatedAndVerified,
  setCredentials,
  setUserData,
  clearCredentials,
} from '../features/auth/authSlice';
import {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyMutation,
}  from '../features/auth/authApiSlice';
import { useGetUserByIdQuery, useUpdateUserMutation } from '../features/user/userApiSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selectors
  const user = useSelector(selectCurrentUser);
  const userId = useSelector(selectCurrentUserId);
  const token = useSelector(selectCurrentToken);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAuthenticatedAndVerified = useSelector(selectIsAuthenticatedAndVerified);

  // RTK Query mutations
  const [loginMutation, { isLoading: isLoggingIn }] = useLoginMutation();
  const [registerMutation, { isLoading: isRegistering }] = useRegisterMutation();
  const [verifyMutation, { isLoading: isVerifying }] = useVerifyMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [updateUserMutation, { isLoading: isUpdating }] = useUpdateUserMutation();

  // Get user data query (only if authenticated)
  const {
    data: userData,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useGetUserByIdQuery(userId, {
    skip: !userId, // Skip query if no userId
  });

  // Login function
  const login = async (email, password) => {
    try {
      const result = await loginMutation({ email, password }).unwrap;
      
      if (result.status === 'success') {
        // Get complete user data
        const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/users/${result.user_id}`, {
          headers: {
            'Authorization': `Bearer ${result.auth_token}`,
          },
        });
        
        if (userResponse.ok) {
          const completeUserData = await userResponse.json();
          
          // Set credentials in Redux
          dispatch(setCredentials({
            user_id: result.user_id,
            auth_token: result.auth_token,
            user: completeUserData,
          }));
          
          return { success: true, message: result.message };
        }
      }
      
      return { success: false, message: result.message };
    } catch (error) {
      return { 
        success: false, 
        message: error.data?.message || 'Login failed' 
      };
    }
  };

  // Register function
  const register = async (fullName, email, password) => {
    try {
      const result = await registerMutation({
        full_name: fullName,
        email,
        password,
      }).unwrap;
      
      return {
        success: true,
        message: result.message,
        status: result.status,
        verificationToken: result.verification_token,
      };
    } catch (error) {
      return {
        success: false,
        message: error.data?.message || 'Registration failed',
      };
    }
  };

  // Verify email function
  const verifyEmail = async (token) => {
    try {
      const result = await verifyMutation({ token }).unwrap;
      return {
        success: true,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.data?.message || 'Verification failed',
      };
    }
  };

  // Update user function
  const updateUser = async (userData) => {
    try {
      const result = await updateUserMutation({
        id: userId,
        ...userData,
      }).unwrap;
      
      // Update user data in Redux state
      const updatedUser = { ...user, ...userData };
      dispatch(setUserData(updatedUser));
      
      return {
        success: true,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.data?.message || 'Update failed',
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Call logout API to clear token on server
      await logoutMutation().unwrap;
    } catch (error) {
      // Even if API call fails, we still want to logout locally
      console.log('Logout API call failed, but clearing local credentials');
    } finally {
      // Clear Redux state and localStorage
      dispatch(clearCredentials());
      navigate('/login');
    }
  };

  // Refresh user data
  const refreshUserData = async () => {
    if (userId) {
      try {
        const result = await refetchUser();
        if (result.data) {
          dispatch(setUserData(result.data));
        }
      } catch (error) {
        console.error('Failed to refresh user data:', error);
      }
    }
  };

  return {
    // State
    user,
    userId,
    token,
    isAuthenticated: true,
    isAuthenticatedAndVerified: true,

    // Loading states
    isLoggingIn: true,
    isRegistering,
    isVerifying,
    isLoggingOut,
    isUpdating,
    isLoadingUser,
    
    // Functions
    login,
    register,
    verifyEmail,
    updateUser,
    logout,
    refreshUserData,
    
    // Additional utilities
    isVerified: user?.is_verified || false,
    userEmail: user?.email || '',
    userName: user?.full_name || '',
    businessName: user?.business_name || '',
  };
};

// You can also keep the default export for backward compatibility
export default useAuth;