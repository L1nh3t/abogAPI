import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Saludo from './components/saludo';
import navbar from './components/navbar';
import Box from '@material-ui/core/Box';
// import { BrowserRouter, Route, Link } from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import  HomePage from  './Pages/Home/home.js';
import {Login} from './Pages/Login/Login.js';
import {details} from './Pages/Details/details.js';
import { Route } from 'react-router-dom';

import NavBar from "./"


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
    <Route path = "/login" exact component={Login}/>
    <Route path ="/" exact component={HomePage}/>

    <Route exact path ="/details">
    <details></details>
    </Route>

    </div>
  )
}

export default App;
