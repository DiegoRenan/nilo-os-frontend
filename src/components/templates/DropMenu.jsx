import './DropMenu.css'
import React from 'react'

export default props =>
  <ul className="nav flex-column drop-menu">
    <li className="nav-item">
      <a className="nav-link active" href={`#collapseItems-${props.title}`} data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">
        <i className={`fa fa-${props.icon}`}></i>   {props.title}
      </a>
      <div className="items" id={`collapseItems-${props.title}`}>
        {props.children}
      </div>
    </li>
  </ul>