import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main/Main';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/detailPage/DetailPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import UserPage from './pages/UserPage/UserPage';
import MyPage from './pages/MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
        <Route path="/listPage" element={<ListPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage/:user_id" element={<UserPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
