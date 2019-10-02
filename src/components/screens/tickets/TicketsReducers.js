import {
  LOAD_TICKETS,
  GET_TICKET,
  GET_COMMENTS,
  GET_TICKET_RESPONSIBLES,
  COMMENT_ADDED,
  LOAD_EMPLOYEES
} from "../../../actions/actionTypes";

const INITIAL_STATE = { tickets: [], comments: [], comment: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case LOAD_TICKETS:
      return { ...state, tickets: action.payload.data }

    case GET_TICKET:
      return {
        ...state, ticket: action.payload.data.data[0].attributes,
        included: action.payload.data.included,
        ticketId: action.payload.data.data[0].id
      }

    case GET_COMMENTS:
      return { ...state, comments: action.payload.data.data, comment: '' }
    
    case COMMENT_ADDED:
      return {...state, comment: ''}

    case GET_TICKET_RESPONSIBLES:
      return {
        ...state,
        responsibles: action.payload.data.data
      }

    case LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload.data.data
      }

    default:
      return state
  }
}