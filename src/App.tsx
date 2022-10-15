import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./views/Login/LoginPage";
import RegisterPage from "./views/Register/RegisterPage";
import ErrorPage from "./views/Error/ErrorPage";
import HomePage from "./views/Home/HomePage";
import UserPage from "./views/Users/UserPage";
import PostsPage from "./views/Posts/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='users' element={<UserPage/>}>
              <Route path=':id' element={<div>UserDetails</div>}/>
          </Route>
          <Route path='posts' element={<PostsPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
