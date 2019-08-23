import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Routes from '../routes/routes'
import Alert from '../components/templates/Alert'
import Footer from '../components/templates/Footer'


export default props =>
  <HashRouter>
    <div className="app">
      <div className="d-md-none d-none d-md-block">
        <Nav />
      </div>
      <Alert />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
