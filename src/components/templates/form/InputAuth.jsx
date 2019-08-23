import './Input.css'
import React from 'react'

export default props =>
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text"> <i className={`fa fa-`+props.icon}></i> </span>
      </div>
      <input { ...props.input}
             name={props.name}
             type={props.type}
             className="form-control"  />
    </div>
  </div>