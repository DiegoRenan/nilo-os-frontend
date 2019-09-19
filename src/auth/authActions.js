import { USER_FETCHED, TOKEN_VALIDATED } from '../actions/actionTypes'

import { url } from '../services/api'
import { notifyError, notifySuccess } from '../const/const'
import { setAuthHeader } from '../services/setAuthHeader'

export function signInUser(values) {
  return submit(values, 'auth/sign_in')
}

export function signup(values) {
  return submit(values, 'auth')
}

function submit(values, path) {
  return dispatch => {
    url.post(path, values)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        localStorage.setItem("access-token", token)
        localStorage.setItem("client", client)
        localStorage.setItem("uid", uid)

        setAuthHeader(token)
        dispatch([
          { type: USER_FETCHED, payload: resp.data }
        ])
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      url.get('auth/validate_token', { token })
        .then(resp => {
          setAuthHeader(resp.headers["access-token"])
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.success })
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false })
    }
  }
}