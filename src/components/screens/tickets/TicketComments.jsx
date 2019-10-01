import React from 'react'
import Grid from '../../templates/Grid'

export default props => {

  const hashCode = (str) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  const intoRGB = (i) => {
    var hex = ((i >> 24) & 0xFF).toString(16) +
      ((i >> 16) & 0xFF).toString(16) +
      ((i >> 8) & 0xFF).toString(16) +
      (i & 0xFF).toString(16);

    hex += '000000';
    return hex.substring(0, 6);
  }

  const colorStyle = (str) => {
    return { color: `#` + intoRGB(hashCode(str)) }
  }


  const renderComments = () => {
    const comments = props.comments || []

    return comments.map(comment => (
      <div className="ticket-body mg-top-15">
        <span style={colorStyle(comment.attributes.employee)}>
          <strong>{comment.attributes.employee}</strong>
          <small>{": " + comment.attributes.created}</small><br />
        </span>
        <div className="comment-body mg-5" key={comment.id} >

          <div className="row">
            <Grid cols="12 12 12 12">
              {comment.attributes.body}
            </Grid>
          </div>
        </div>
      </div>
    ))
  }

  return (renderComments())
}