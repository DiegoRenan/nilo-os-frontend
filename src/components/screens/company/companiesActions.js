import {
  LOAD_COMPANIES,
  COMPANY_CHANGED,
  COMPANY_ADDED,
  COMPANY_UPDATED,
  GET_COMPANY
} from '../../../actions/actionTypes'

import { toast } from 'react-toastify'
import { notifyError, notifySuccess } from '../../../const/const'
import api from '../../../services/api'


// Load Companies
export const loadCompanies = () => {
  return {
    type: LOAD_COMPANIES,
    payload: api.loadCompanies()
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
export const add = (company) => async (dispatch) => {
  let response = await api.addCompany(company)

  dispatch({
    type: COMPANY_ADDED, payload: response
  })

  dispatch(
    loadCompanies()
  )

  let status, statusText
  response.status === 201 && response.statusText === "Created" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  if (status === "success")
    notifySuccess("Salvo")
  else
    notifyError("Erro ao salvar")

}

// update a Company
export const update = (company, ownProps) => async (dispatch) => {
  let response = await api.updateCompany(company)
  dispatch({
    type: COMPANY_UPDATED, payload: response
  })

  let status, statusText
  response.status === 200 && response.statusText === "OK" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  if (status === "success")
    notifySuccess("Atualizado")
  else
    notifyError("Erro ao atualizar")

  ownProps.history.push(`/show_company/${response.data.data.id}`)
}

// get a Company
export const getCompany = (company_id) => async (dispatch) => {
  let response = await api.getCompany(company_id)
  dispatch({
    type: GET_COMPANY,
    payload: response
  })
}

// delete a Company
export const remove = (company_id) => async (dispatch) => {
  let response = await api.deleteCompany(company_id)
  dispatch(
    loadCompanies()
  )

  let status = "error", statusText = "Error"
  response.status === 204 && response.statusText === "No Content" ? status = "success" : status = "error"
  status === "success" ? statusText = "Deletado" : statusText = "Error"

  if (status === "success")
    notifySuccess("Removido")
  else
    notifyError("Erro ao remover")

}