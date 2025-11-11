// ProtectedRoutes.js
import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './authSlice';
import useAuth from '../../hooks/useAuth';

export const ProtectedRoutes = ({ allowedRoles }) => {
    const { roles, isLoggedIn, email } = useAuth();
    const location = useLocation();
    console.log(isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const content = (
        ["buyer", "seller", "user", "admin"].some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )

    return content
};
