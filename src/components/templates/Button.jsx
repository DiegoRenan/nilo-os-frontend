import React from 'react'

import Icon from './Icon'

export default props =>
  <button className={'btn btn-' + props.style}
    onClick={props.onClick}
    data-toggle={props.toggle}
    data-target={props.target}
  >
    {props.title}
    <Icon icon={props.icon}></Icon>
  </button>