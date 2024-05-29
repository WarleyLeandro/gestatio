import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'

import "./styles/global.css";

import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";

const PrivateRoutes = () => {
  let isAuthenticated = !!localStorage.getItem('token');
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  )
}

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Router>
    </>
  );
}
