import { toastr } from 'react-redux-toastr'
import { USER_FETCHED, TOKEN_VALIDATED } from '../actions/actionTypes';

import { url } from '../services/api'

export function signin(values) {
  return submit(values, 'auth/sign_in')
}

export function signup(values) {
  return submit(values, 'auth')
}

function submit(values, path) {
  console.log("Values" + values )
  return dispatch => {
    url.post(path, values)
      .then(resp => {
        dispatch([
          { type: USER_FETCHED, payload: resp.data}
        ])
      })
      .catch(e => {
        console.log(e)
        e.response.data.errors.forEach(
          error => toastr.error('erro', error)
        );
      })
  }
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
  return dispatch => {
    if(token) {
      url.get('auth/validate_token', { token })
        .then(resp => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid})
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false })
    }
  }
}