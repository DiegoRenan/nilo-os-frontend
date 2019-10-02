import './TextArea.css'
import React from 'react'

export default props => {
  const { meta: { touched, error, warning } } = props
  return (
    <div>
      <textarea
        {...props.input}
        className={'boxsizingBorder form-control" ' + props.style}
        rows={props.rows}
       />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div >
  )
}