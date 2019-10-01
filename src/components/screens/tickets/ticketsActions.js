import { LOAD_TICKETS, GET_TICKET, GET_COMMENTS } from '../../../actions/actionTypes'
import api from '../../../services/api'
import { setAuthHeader } from '../../../services/setAuthHeader'


export const loadTickets = () => {
  
  return dispatch => {

    api.loadTickets()
      .then(resp => {
        
        const token = resp.headers["access-token"]
        const client = resp.headers["client"]
        const uid = resp.headers["uid"]
        
        setAuthHeader(token, client, uid)

        dispatch ({ type: LOAD_TICKETS, payload: resp })
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

        dispatch ({ type: GET_TICKET, payload: resp })
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

        dispatch ({ type: GET_COMMENTS, payload: resp })
      })
  }
}

