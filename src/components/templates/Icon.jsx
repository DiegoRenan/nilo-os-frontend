import './Icon.css'
import React from 'react'

export default props =>
  <i className={`fa fa-${props.icon} t-icon`}
    data-toggle={props.toggle}
    data-target={props.target}
  ></i>