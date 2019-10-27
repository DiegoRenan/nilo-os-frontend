import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './App'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {

  render() {
    const { user, validToken } = this.props.auth
    if (validToken) {
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <Auth />
    } else {
      return false
    }
  }

}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)