import {
  LOAD_SECTORS,
  SECTOR_CHANGED,
  SECTOR_ADDED,
  SECTOR_UPDATED,
  GET_SECTOR
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Sectors
export function loadSectors() {
  return dispatch => {
    api.loadSectors()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_SECTORS, payload: resp })
      })
  }
}

// //Get input valeu 
export const changeSector = event => {
  return {
    type: SECTOR_CHANGED,
    payload: event.target.value
  }
}

// create a Sector
export const add = (sector, historyProps) => {

  return dispatch => {
    api.addSector(sector)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Setor criado com sucesso!")

        dispatch({
          type: SECTOR_ADDED, payload: resp
        })

        historyProps.push(`/show_sector/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }

}

// // update a Sector
export const update = (sector, historyProps) => {
  return dispatch => {
    api.updateSector(sector)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: SECTOR_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_sector/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}

//get sector
export const getSector = (sector_id) => {
  return dispatch => {
    api.getSector(sector_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_SECTOR, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


// delete a Sector
export const remove = (sector_id) => {
  return dispatch => {
    api.deleteSector(sector_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadSectors())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
}
