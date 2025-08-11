// ProtectedRoutes.js
import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsAuthenticated } from './authSlice';

export const ProtectedRoutes = ({ children, requireVerification = false }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  // If not authenticated at all, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If verification is required and user is not verified, redirect to verification page
  if (requireVerification && user && !user.is_verified) {
    return <Navigate to="/verify" state={{ from: location }} replace />;
  }

  // If used as layout route (with nested routes), render Outlet
  // If used with children prop, render children
  return children ? children : <Outlet />;
};