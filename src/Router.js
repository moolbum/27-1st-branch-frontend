import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/detailPage/DetailPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
