import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import Header from '../components/Header';
import Login from '../components/Login';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/logout" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
