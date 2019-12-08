import React from 'react'

export default props =>
  <input {...props.input} 
    type={props.type}
    className="form-control-file"
    value={props.value}
  ></input>