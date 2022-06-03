import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import {Button} from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/add' element={<AddProduct />} />
          <Route exact path='/update' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
      {/* 
        <Header />
        <Route exact path='/login' element={Login}>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/add'>
          <AddProduct />
        </Route>
        <Route path='/update'>
          <UpdateProduct />
        </Route> 
      </BrowserRouter> */}
      <h1>JUSI NOT PUSSY</h1>
    </div>
  );
}

export default App;
