import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

import Nav from './components/Nav/Nav';
// import Hamburger from './components/Nav/Hamburger';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Nav />} />
        {/* <Route path="/" element={<Hamburger />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
