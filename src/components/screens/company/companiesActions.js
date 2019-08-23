import { LOAD_COMPANIES, 
         COMPANY_CHANGED, 
         COMPANY_ADDED , 
         COMPANY_UPDATED, 
         GET_COMPANY}  from '../../../actions/actionTypes'

import alert from '../../../actions/alert'
import api from '../../../services/api'

//show/hidden Alerts
const hiddenAlert = (dispatch) => {
  setTimeout(() => {
    dispatch(
      alert({hidden: 'hidden' })
    )
  }, 5000);
}

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
export const add = (company) => async(dispatch) => {
  let response = await api.addCompany( company )
  dispatch({
    type: COMPANY_ADDED, payload: response 
  })
  dispatch(
    loadCompanies()
  )
  
  let status, statusText
  response.status === 201 && response.statusText === "Created" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}

// update a Company
export const update = (company, ownProps) => async(dispatch) => {
  let response = await api.updateCompany( company )
  dispatch({
    type: COMPANY_UPDATED, payload: response 
  })
  
  let status, statusText
  response.status === 200 && response.statusText === "OK" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )
  hiddenAlert(dispatch)
  
  ownProps.history.push(`/companyShow/${response.data.data.id}`)
}

// get a Company
export const getCompany = (company_id) => {
  return{ 
    type: GET_COMPANY,
    payload: api.getCompany(company_id)
  }
}

// delete a Company
export const remove = (company_id) => async(dispatch) => {
  let response = await api.deleteCompany(company_id)
  dispatch(
    loadCompanies()
  )

  let status = "error", statusText = "Error"
  response.status === 204 && response.statusText === "No Content" ? status = "success" : status = "error"
  status === "success" ? statusText = "Deletado" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}