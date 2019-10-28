import { USER_FETCHED, TOKEN_VALIDATED } from '../actions/actionTypes'

import api, { url}  from '../services/api'
import { notifyError } from '../const/const'
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

        localStorage.setItem("employee_id", resp.data.data.employee_id)
        localStorage.setItem("master", resp.data.data.master)
        localStorage.setItem("admin", resp.data.data.admin)

        setAuthHeader(token, client, uid)

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
      
    api.isTokenValid(token)
        .then(resp => {
          console.log('validateToken? ' + resp.data.success)
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.success })
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false })
    }
  }
}