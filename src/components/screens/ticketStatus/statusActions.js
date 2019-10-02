import {
  LOAD_STATUS,
  STATUS_CHANGED,
  STATUS_ADDED,
  STATUS_UPDATED,
  GET_STATUS
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Status
export function loadStatus() {
  return dispatch => {
    api.loadStatus()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_STATUS, payload: resp })
      })
  }
}

// //Get input valeu 
export const changeStatus = event => {
  return {
    type: STATUS_CHANGED,
    payload: event.target.value
  }
}

// create a Status
export const add = (status, historyProps) => {

  return dispatch => {
    api.addStatus(status)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Status criado com sucesso!")

        dispatch({
          type: STATUS_ADDED, payload: resp
        })

        historyProps.push(`/show_status/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
  
}

// // update a Status
export const update = (status, historyProps) => {
  return dispatch => {
    api.updateStatus(status)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: STATUS_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_status/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}

//get status
export const getStatus = (status_id) => {
  return dispatch => {
    api.getStatus(status_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_STATUS, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


// delete a Status
export const remove = (status_id) => {
  return dispatch => {
    api.deleteStatus(status_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadStatus())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}
