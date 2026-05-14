import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import './App.css';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path="foto/:id"
              element={
                <ProtectedRoute>
                  <Photo />
                </ProtectedRoute>
              }
            />
            <Route
              path="perfil/:user"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
