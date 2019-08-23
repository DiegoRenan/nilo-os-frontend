import './auth.css'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signin } from './authActions'
import Input from '../components/templates/form/InputAuth'

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit(values) {
    const { signin } = this.props
    signin(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
        <aside className="login-container">
          <div className="card col-sm-4 mx-auto">
            <article className="card-body">
              <div className="login-logo"></div>
              <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
              <hr />
              <p className="text-success text-center">OsApp</p>
              <div className="login-box-body">
                <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
                  <Field component={Input} type="email" name="email" label="email" icon="user" />
                  <Field component={Input} type="password" name="password" label="password" icon="lock" />
                  <button type="submit"
                    className="btn btn-primary btn-block btn-flat" >
                    Entrar
                  </button>
                </form>
              </div>
            </article>
          </div>
        </aside>
    )

  }

}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)
