import './Select.css'
import React from 'react'

export default props => {
  const { meta: { touched, error, warning } } = props
  return (
    <div>
      <select className="select form-control"
        {...props.input}>
        {props.children}
      </select>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
} 