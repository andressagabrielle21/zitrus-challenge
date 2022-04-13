import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDetails from './pages/viewDetails';
import Login from './pages/login';
import CreateUser from './pages/create';
import Home from './pages/home';
import { db } from './firebase-config';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/details/:id' element={<ViewDetails db={db}/>}/>
      <Route path='/create' element={<CreateUser/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

