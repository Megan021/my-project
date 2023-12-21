// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../App';

const ProtectedRoute = ({ allowedRoles, element: Element, ...rest }) => {
  const { state } = useContext(UserContext);
  const { userRole } = state;

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
