import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  EMPLOYEE_UPDATED,
  GET_EMPLOYEE,
  GET_EMPLOYEE_COMPANY
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Employees
export function loadEmployees() {
  return dispatch => {
    api.loadEmployees()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_EMPLOYEES, payload: resp })
      })
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
export const add = (employee, historyProps) => {

  return dispatch => {
    api.addEmployee(employee)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Colaborador criado com sucesso!")

        dispatch({
          type: EMPLOYEE_ADDED, payload: resp
        })

        historyProps.push(`/show_employee/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+ error.title)
        );
      })
  }

}

// // update a Employee
export const update = (employee, historyProps) => {
  return dispatch => {
    api.updateEmployee(employee)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: EMPLOYEE_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_employee/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

// get a employee's company
export const getEmployeeCompany = (employeeId) => {
  return dispatch => {
    api.getEmployeeCompany(employeeId)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: GET_EMPLOYEE_COMPANY, payload: resp
        })
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


//get employee
export const getEmployee = (employee_id) => {
  return dispatch => {
    api.getEmployee(employee_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_EMPLOYEE, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


// delete a Employee
export const remove = (employee_id) => {
  return dispatch => {
    api.deleteEmployee(employee_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadEmployees())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}