import {
  LOAD_TICKETS,
  GET_TICKET,
  GET_COMMENTS,
  GET_TICKET_RESPONSIBLES,
  COMMENT_ADDED,
  LOAD_EMPLOYEES,
  LOAD_COMPANIES,
  GET_COMPANY_DEPARTMENTS,
  GET_DEPARTMENT_SECTORS,
  LOAD_STATUS,
  LOAD_TYPES,
  LOAD_PRIORITIES
} from "../../../actions/actionTypes";

const INITIAL_STATE = {
  ticket: [],
  tickets: [],
  comments: [],
  companies: [],
  departments: [],
  sectors: [],
  status: [],
  comment: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_TICKETS:
        console.log(action.payload.data)
      return { ...state, tickets: action.payload.data }

    case GET_TICKET:
   
      return {
        ...state, ticket: action.payload.data.data[0].attributes,
        author: action.payload.data.data[0].attributes.author,
        status: action.payload.data.included[1].attributes.status,
        included: action.payload.data.included,
        ticketId: action.payload.data.data[0].id
      }

    case GET_COMMENTS:
      return { ...state, comments: action.payload.data.data, comment: '' }

    case COMMENT_ADDED:
      return { ...state, comment: '' }

    case GET_TICKET_RESPONSIBLES:
      return {
        ...state,
        responsibles: action.payload.data.data
      }

    case LOAD_COMPANIES:
      return { ...state, companies: action.payload.data.data }

    case LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload.data.data
      }

    case GET_COMPANY_DEPARTMENTS:
      return { ...state, departments: action.payload.data.data }

    case GET_DEPARTMENT_SECTORS:
      return { ...state, sectors: action.payload.data.data }

    case LOAD_STATUS:
      return { ...state, status: action.payload.data.data }

    case LOAD_TYPES:
      return { ...state, types: action.payload.data.data }
    
    case LOAD_PRIORITIES:
      return { ...state, priorities: action.payload.data.data }

    default:
      return state
  }
}