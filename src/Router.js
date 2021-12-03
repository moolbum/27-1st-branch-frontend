import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage/ListPage';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/listPage" element={<ListPage />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
