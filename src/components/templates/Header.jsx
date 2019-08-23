import './Header.css'
import React from 'react'

import Search from './Search'
import Alert from './Notification'
import Add from './Add'
import Tool from './Tool'

export default props =>
  <header className="header" id="header">
    <nav className="navbar navbar-dark bg-primary mx-auto">
      <a className="navbar-brand" href="#/">Nilo</a>
      <div className="nav-items form-inline md-form form-sm mx-auto d-none d-md-inline-flex">
        <Search />
        <Add />
        <Alert />
        <Tool />
      </div>
    </nav>
  </header>