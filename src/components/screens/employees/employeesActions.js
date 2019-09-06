import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  EMPLOYEE_UPDATED,
  GET_EMPLOYEE
} from '../../../actions/actionTypes'

import alert from '../../../actions/alert'
import api from '../../../services/api'

// //show/hidden Alerts
const hiddenAlert = (dispatch) => {
  setTimeout(() => {
    dispatch(
      alert({ hidden: 'hidden' })
    )
  }, 5000);
}

// Load Employees
export const loadEmployees = () => {
  return {
    type: LOAD_EMPLOYEES,
    payload: api.loadEmployees()
  }
}

// //Get input valeu 
export const changeEmployee = event => {
  return {
    type: EMPLOYEE_CHANGED,
    payload: event.target.value
  }
}

// create a Employee
export const add = (employee) => async (dispatch) => {
  let response = await api.addEmployee(employee)
  dispatch({
    type: EMPLOYEE_ADDED, payload: response
  })

  dispatch(
    loadEmployees()
  )

  let status, statusText
  response.status === 201 && response.statusText === "Created" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}

// // update a Company
export const update = (employee, ownProps) => async (dispatch) => {
  let response = await api.updateEmployee(employee)
  dispatch({
    type: EMPLOYEE_UPDATED, payload: response
  })

  let status, statusText
  response.status === 200 && response.statusText === "OK" ? status = "success" : status = "error"
  status === "success" ? statusText = "Salvo" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )
  hiddenAlert(dispatch)

  ownProps.history.push(`/employee/${response.data.data.id}`)
}

// get a Company
export const getEmployee = (employee_id) => {
  return {
    type: GET_EMPLOYEE,
    payload: api.getEmployee(employee_id)
  }
}

// delete a Employee
export const remove = (employee_id) => async (dispatch) => {
  let response = await api.deleteEmployee(employee_id)
  dispatch(
    loadEmployees()
  )

  let status = "error", statusText = "Error"
  response.status === 204 && response.statusText === "No Content" ? status = "success" : status = "error"
  status === "success" ? statusText = "Deletado" : statusText = "Error"

  dispatch(
    alert({ http_code: status, message: statusText, hidden: '' })
  )

  hiddenAlert(dispatch)
}