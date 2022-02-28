import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Connexion from './Pages/Connexion';
import Login from './Pages/Connexion/Login';
import SignUp from './Pages/Connexion/SignUp';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
