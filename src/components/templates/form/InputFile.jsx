import React from 'react'

export default props =>
  <input {...props.input} 
    type={props.type}
    id={props.id}
    className={`btn btn-secondary ` + props.className}
    value={props.value}
  ></input>