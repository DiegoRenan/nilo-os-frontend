import {
  LOAD_TYPES,
  TYPE_CHANGED,
  TYPE_ADDED,
  TYPE_UPDATED,
  GET_TYPE
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Types
export function loadTypes() {
  return dispatch => {
    api.loadTypes()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_TYPES, payload: resp })
      })
  }
}

// //Get input valeu 
export const changeType = event => {
  return {
    type: TYPE_CHANGED,
    payload: event.target.value
  }
}

// create a Type
export const add = (type, historyProps) => {

  return dispatch => {
    api.addType(type)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Tipo criado com sucesso!")

        dispatch({
          type: TYPE_ADDED, payload: resp
        })

        historyProps.push(`/show_type/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }

}

// // update a Type
export const update = (type, historyProps) => {
  return dispatch => {
    api.updateType(type)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: TYPE_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_type/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}

//get type
export const getType = (type_id) => {
  return dispatch => {
    api.getType(type_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_TYPE, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


// delete a Type
export const remove = (type_id) => {
  return dispatch => {
    api.deleteType(type_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadTypes())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}
