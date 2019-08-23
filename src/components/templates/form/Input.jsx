import './Input.css'
import React from 'react'

export default props =>
  <input type={props.type}
         className={'input ' + props.style}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange} />