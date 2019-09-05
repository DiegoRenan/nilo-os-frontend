import './Select.css'
import React from 'react'

export default props =>
  <select className="select form-control"
          { ...props.input}>
    { props.children }
  </select>