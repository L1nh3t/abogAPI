import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import  HomePage from  './Pages/Home/home.js';
import Login from './Pages/Login/Login.js';
import Somos from './components/quienesSomos.js';
import Lawyers from './Pages/Lawyers/Lawyers.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App (){
  return (

    <div className='App'>
    <Route exact path="/" component={HomePage}/>
    <Route exact path = "/login" exact component={Login}/>
    <Route exact path="/somos" component={Somos} />
    <Route exact path="/lawyers" component={Lawyers}/>
    </div>
  )
}

export default App;
