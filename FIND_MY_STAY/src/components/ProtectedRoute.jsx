// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token'); // or any login flag you store

  if (!isLoggedIn) {
    alert('Please login to continue!');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
