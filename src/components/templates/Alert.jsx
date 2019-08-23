import './Alert.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = { hidden: 'hidden'}

  }
  
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({...this.state, hidden: this.props.hidden})
    }, 1000);
  }

  render() {
    return (
      <section className="alert">
        <div className={`alert-box alert-` + this.props.http_code + ` ` + this.state.hidden }>
          {this.props.message}
        </div>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  http_code: state.alertState.http_code,
  message: state.alertState.message,
  hidden: state.alertState.hidden
})

export default connect(mapStateToProps)(Alert)