import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '../../templates/Grid'

class TicketComments extends Component {

  hashCode = (str) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intoRGB = (i) => {
    var hex = ((i >> 24) & 0xFF).toString(16) +
      ((i >> 16) & 0xFF).toString(16) +
      ((i >> 8) & 0xFF).toString(16) +
      (i & 0xFF).toString(16);

    hex += '000000';
    return hex.substring(0, 6);
  }

  colorStyle = (str) => {
    return { color: `#` + this.intoRGB(this.hashCode(str)) }
  }


  renderComments = () => {
    const comments = this.props.comments || []

    return comments.map(comment => (
      <div className="ticket-body mg-top-15" key={comment.id}>
        <span style={this.colorStyle(comment.attributes.employee)}>
          <strong>{comment.attributes.employee}</strong>
          <small>{": " + comment.attributes.created}</small><br />
        </span>
        <div className="comment-body mg-5"  >
          <div className="row">
            <Grid cols="12 12 12 12">
              {comment.attributes.body}
            </Grid>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (this.renderComments())
  }

}

const mapStateToProps = state => ({
  comments: state.ticketsState.comments
})

export default connect(mapStateToProps, null)(TicketComments)