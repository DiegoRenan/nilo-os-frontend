import {
  LOAD_TICKETS,
  GET_TICKET,
  GET_COMMENTS,
  GET_TICKET_RESPONSIBLES,
  LOAD_EMPLOYEES,
  COMMENT_ADDED
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { setAuthHeader } from '../../../services/setAuthHeader'
import { notifyError, notifySuccess } from '../../../const/const'


export const loadTickets = () => {

  return dispatch => {

    api.loadTickets()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_TICKETS, payload: resp })
      })
  }
}

export const getTicket = (id) => {

  return dispatch => {

    api.getTicket(id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_TICKET, payload: resp })
      })

  }

}

export const getComments = (ticketId) => {

  return dispatch => {

    api.getComments(ticketId)
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_COMMENTS, payload: resp })
      })
  }
}

// get ticket Responsible
export const getTicketResponsibles = (ticket_id) => {
  return dispatch => {
    api.getTicketResponsibles(ticket_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: GET_TICKET_RESPONSIBLES, payload: resp })

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }
}

// delete a Responsible
export const removeResponsible = (responsible_id, ticket_id) => {
  console.log("Remove: " + responsible_id)
  return dispatch => {
    api.removeResponsible(responsible_id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido responsável")
        
        dispatch(getTicketResponsibles(ticket_id))

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }
}

// add responsible
export const addResponsible = (obj) => {

  return dispatch => {
    api.addResponsible(obj)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Responsável adicionado")

        dispatch([loadEmployees(), getTicketResponsibles(obj.data.attributes.ticket_id)])

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
  
}

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

export const addComments = (obj) => {

  return dispatch => {
    api.addComments(obj)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)
        
        notifySuccess("Resposta enviada")

        dispatch([getComments(obj.data.attributes.ticket_id), {type: COMMENT_ADDED}])

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id +': '+error.title)
        );
      })
  }
  
}


