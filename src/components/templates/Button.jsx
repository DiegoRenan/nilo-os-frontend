import React from 'react'

import Icon from './Icon'

export default props =>
  <button className={'btn btn-' + props.style} onClick={() => props.onClick(props.data) }>
    <Icon icon={props.icon}></Icon>
  </button>