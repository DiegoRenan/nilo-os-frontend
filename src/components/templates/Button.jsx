import React from 'react'

import Icon from './Icon'

export default props =>
  <button className={'btn btn-' + props.style} >
    <Icon icon={props.icon}></Icon>
  </button>