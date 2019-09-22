import { LOAD_TICKETS } from '../../../actions/actionTypes'
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

        console.log("LOAD_TICKETS RESP ", token)
        dispatch ({ type: LOAD_TICKETS, payload: resp })
      })
  }
}

