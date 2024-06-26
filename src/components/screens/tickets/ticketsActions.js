import {
  LOAD_TICKETS,
  GET_TICKET,
  GET_COMMENTS,
  GET_TICKET_RESPONSIBLES,
  LOAD_EMPLOYEES,
  TICKET_ADDED,
  TICKET_UPDATED,
  COMMENT_ADDED,
  LOAD_PRIORITIES,
  NEW_TICKET
} from '../../../actions/actionTypes'

import api from '../../../services/api'
import { setAuthHeader } from '../../../services/setAuthHeader'
import { notifyError, notifySuccess } from '../../../const/const'


export const loadTickets = (q = null, p = null) => {
  
  let filter = q ? `?${Object.keys(q)[0]}=${Object.values(q)[0]}` : ""
  let priority = p ? `&${Object.keys(p)[0]}=${Object.values(p)[0]}` : ""
  filter = `${filter}${priority}`
  
  return dispatch => {

    api.loadTickets(filter)
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_TICKETS, payload: resp })
      })
  }
}

export const loadTicketsUser = (user_id, q = null) => {
  let filter = q ? `?${Object.keys(q)[0]}=${Object.values(q)[0]}` : ""
  return dispatch => {
    api.loadTicketsUser(user_id, filter)
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_TICKETS, payload: resp })
      })
  }
}

export const newTicket = () => {
  return dispatch => {
    dispatch({ type: NEW_TICKET })
  }
}

export const loadPriorities = () => {

  return dispatch => {

    api.loadPriorities()
      .then(resp => {

        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({ type: LOAD_PRIORITIES, payload: resp })
      })
  }
}

// create a Employee
export const add = (ticket, historyProps) => {

  return dispatch => {
    api.addTicket(ticket)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Ticket enviado!")

        dispatch({
          type: TICKET_ADDED, payload: resp
        })

        historyProps.push(`/show_ticket/${resp.data.data.id}`)

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }

}

// // update a Employee
export const update = (ticket, historyProps) => {
  return dispatch => {
    api.updateTicket(ticket)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        dispatch({
          type: TICKET_UPDATED, payload: resp
        })

        notifySuccess("Atualizado")
        historyProps.push(`/show_ticket/${resp.data.data.id}`)
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error)
        );
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
          error => notifyError(error.id + ': ' + error.title)
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

        dispatch([getComments(obj.data.attributes.ticket_id), { type: COMMENT_ADDED }])

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }

}

export const closeTicket = (obj) => {

  return dispatch => {
    api.closeTicket(obj)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Enviado para Avaliação")

        dispatch(getTicket(obj.id))

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }

}

export const aproveTicket = (obj) => {

  return dispatch => {
    api.aproveTicket(obj)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Ticket Aprovado")

        dispatch(getTicket(obj.id))

      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }

}


// delete a Status
export const remove = (id) => {
  return dispatch => {
    api.deleteTicket(id)
      .then(resp => {
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]

        setAuthHeader(token, client, uid)

        notifySuccess("Removido")

        dispatch(loadTickets())
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => notifyError(error.id + ': ' + error.title)
        );
      })
  }
}


