import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import UserPage from './pages/UserPage/UserPage';
import MyPage from './pages/MyPage/MyPage';
// import { isLogin } from './pages/MyPage/isLogin';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userpage/:name" element={<UserPage />} />
        {localStorage.getItem('TOKEN') ? (
          <Route path="/mypage/:name" element={<MyPage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
