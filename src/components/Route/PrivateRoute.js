// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isLogin = !!localStorage.getItem("mangotoken");

const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
