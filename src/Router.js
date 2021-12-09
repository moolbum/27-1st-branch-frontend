import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/detailPage/DetailPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/listPage" element={<ListPage />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
