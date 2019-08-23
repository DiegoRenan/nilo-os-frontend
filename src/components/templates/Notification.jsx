import './Notification.css'
import React from 'react'

export default props => 
  <form className="dropdown">
    <i className="fa fa-bell" id="dropdownMenuAlert" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />    <div className="dropdown-menu" aria-labelledby="dropdownMenuAlert">
      <a className="dropdown-item" href="#/">Action</a>
      <a className="dropdown-item" href="#/">Another action</a>
      <a className="dropdown-item" href="#/">Something else here</a>
    </div>
  </form>