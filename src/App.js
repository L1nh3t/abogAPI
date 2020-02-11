import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Saludo from './components/saludo';
import navbar from './components/navbar';
import {Login} from './components/Login/Login.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import  {HomePage} from  './Pages/Home/home.js';

// function App(){
//   return (
//     <div>
//     <navbar/>
//     <Saludo/>
//     </div>
//   );
// }

function App (){
  return (
    
    <div className='App'>
    <HomePage></HomePage>
    <Login></Login>
    </div>
  )
}

export default App;
