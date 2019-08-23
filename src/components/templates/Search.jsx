import './Search.css'
import React from 'react'

export default props =>
  <div id="search">
    <i className="fa fa-search" aria-hidden="true"></i>
    <input className="form-control form-control-sm ml-3 mr-5" type="text" placeholder="Pesquisa"
      aria-label="Search" />
  </div>