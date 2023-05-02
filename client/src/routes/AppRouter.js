import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Landing from '../components/Landing';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signup" element={<Signup messages={""}/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
