import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Graphs from './pages/Graphs';
import Users from './pages/Users';
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Login/" />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Dashboard/" element={<Dashboard />} />
        <Route path="/Dashboard/Home/" element={<Home />} />
        <Route path="/Dashboard/Settings/" element={<Settings />} />
        <Route path="/Dashboard/Graphs/" element={<Graphs />} />
        <Route path="/Dashboard/Users/" element={<Users />}/>
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;