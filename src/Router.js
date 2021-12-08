import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import UserPage from './pages/UserPage/UserPage';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage/:name" element={<UserPage />} />
        {localStorage.getItem('TOKEN') ? (
          <Route path="/mypage/:name" element={<MyPage />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
