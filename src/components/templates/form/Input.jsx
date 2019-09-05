import './Input.css'
import React from 'react'

export default props =>
  <input type={props.type}
          { ...props.input}
         className={'input ' + props.style}
         placeholder={props.placeholder} />