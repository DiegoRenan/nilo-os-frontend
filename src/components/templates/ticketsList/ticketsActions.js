import { LOAD_TICKETS } from '../../../actions/actionTypes'
import api from '../../../services/api'

export const loadTickets = () => {
  return {
    type: LOAD_TICKETS,
    payload: api.loadTickets()
  }
}

