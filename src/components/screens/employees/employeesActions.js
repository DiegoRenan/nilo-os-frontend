import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  EMPLOYEE_UPDATED,
  GET_EMPLOYEE,
  GET_EMPLOYEE_COMPANY
} from '../../../actions/actionTypes'

import alert from '../../../actions/alert'
import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { signup } from '../../../auth/authActions'

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
export const add = (employee, ownProps) => async (dispatch) => {
  try { 
    const response = await api.addEmployee(employee)
    
    dispatch({
      type: EMPLOYEE_ADDED, payload: response
    })
    
    notifySuccess("Colaborador criado com sucesso!")
    //ownProps.history.push(`/show_employee/${response.data.data.id}`)
    
  } catch (e) {
    console.log(e.response)
    e.response.data.errors.forEach(erro => {
      notifyError(erro.id.toUpperCase() + ": " + erro.title)
    }); 
  }
}

// // update a Employee
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

  ownProps.history.push(`/show_employee/${response.data.data.id}`)
}

// get a employee's company
export const getEmployeeCompany = (employeeId) => async (dispatch) => {
  let response = await api.getEmployeeCompany(employeeId)
  dispatch({
    type: GET_EMPLOYEE_COMPANY, payload: response
  })
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