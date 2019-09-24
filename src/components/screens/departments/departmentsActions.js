import {
  LOAD_DEPARTMENTS,
  DEPARTMENT_CHANGED,
  DEPARTMENT_ADDED,
  DEPARTMENT_UPDATED,
  GET_DEPARTMENT,
  GET_DEPARTMENT_COMPANY
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { notifyError, notifySuccess } from '../../../const/const'
import { setAuthHeader } from '../../../services/setAuthHeader'

// Load Departments
export function loadDepartments() {
  return dispatch => {
    api.loadDepartments()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_DEPARTMENTS, payload: resp })
      })
  }
}

// //Get input valeu 
export const changeDepartment = event => {
  return {
    type: DEPARTMENT_CHANGED,
    payload: event.target.value
  }
}

// create a Department
export const add = (department, historyProps) => {

  return dispatch => {
    api.addDepartment(department)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Departamento criado com sucesso!")

        dispatch({
          type: DEPARTMENT_ADDED, payload: resp
        })

        historyProps.push(`/show_department/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }

}

// // update a Department
export const update = (department, historyProps) => {
  return dispatch => {
    api.updateDepartment(department)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: DEPARTMENT_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_department/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

// get a department's company
export const getDepartmentCompany = (departmentId) => {
  return dispatch => {
    api.getDepartmentCompany(departmentId)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: GET_DEPARTMENT_COMPANY, payload: resp
        })
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}

//get department
export const getDepartment = (department_id) => {
  return dispatch => {
    api.getDepartment(department_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_DEPARTMENT, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}


// delete a Department
export const remove = (department_id) => {
  return dispatch => {
    api.deleteDepartment(department_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadDepartments())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
      })
  }
}