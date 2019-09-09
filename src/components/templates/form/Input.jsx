import './Input.css'
import React from 'react'

export default props => {
  const { meta: { touched, error, warning } } = props
  return (
    <div>
      <input type={props.type}
        {...props.input}
        className={'input ' + props.style}
        placeholder={props.placeholder} />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div >
  )
}


