import {
  LOAD_COMPANIES,
  COMPANY_CHANGED,
  COMPANY_ADDED,
  COMPANY_UPDATED,
  GET_COMPANY
} from '../../../actions/actionTypes'

import { notifyError, notifySuccess } from '../../../const/const'
import api from '../../../services/api'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Companies
export function loadCompanies() {
  return dispatch => {
    api.loadCompanies()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_COMPANIES, payload: resp })
      })
  }
}

//Get input valeu 
export const changeCompany = event => {
  return {
    type: COMPANY_CHANGED,
    payload: event.target.value
  }
}

// create a Company
export const add = (company) => {
  return dispatch => {
    api.addCompany(company)
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: COMPANY_ADDED, payload: resp
        })

        dispatch(
          loadCompanies()
        )

        notifySuccess("Salvo")
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

// update a Company
export const update = (company, ownProps) => {

  return dispatch => {
    api.updateCompany(company)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Atualizado")

        dispatch({ type: COMPANY_UPDATED, payload: resp })

        ownProps.history.push(`/show_company/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

// get a Company
export const getCompany = (company_id) => {
  return dispatch => {
    api.getCompany(company_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_COMPANY, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

// delete a Company
export const remove = (company_id) => {

  return dispatch => {
    api.deleteCompany(company_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch( loadCompanies() )
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id+" "+error.title)
        );
      })
  }

}