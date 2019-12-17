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
  LOAD_PRIORITIES,
  NEW_TICKET
} from "../../../actions/actionTypes";

const INITIAL_STATE = {
  ticket: [],
  tickets: [],
  comments: [],
  companies: [],
  departments: [],
  sectors: [],
  statuses: [],
  relationships: [],
  comment: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_TICKETS:
      return { ...state, tickets: action.payload.data }

    case GET_TICKET:
    console.log(action.payload.data.data[0])

      return { 
        ...state, 
        ticket: action.payload.data.data[0].attributes ,
        company: action.payload.data.data[0].attributes['company-id'],
        department: action.payload.data.data[0].attributes['department-id'],
        sector: action.payload.data.data[0].attributes['sector-id'],
        type: action.payload.data.data[0].attributes['ticket-type-id'],
        conclude: action.payload.data.data[0].attributes['conclude'],
        conclude_at: action.payload.data.data[0].attributes['concludef'],
        priority: action.payload.data.data[0].attributes['priority-id'],
        author: action.payload.data.data[0].attributes.author,
        status: action.payload.data.data[0].attributes['ticket-status-id'],
        included: action.payload.data.included,
        ticketId: action.payload.data.data[0].id
      }

    case NEW_TICKET:
      return { ...state, 
                  body: '', 
                  title: '', 
                  ticket: {},
                  company: '',
                  conclude: '',
                  department: '',
                  sector: '',
                  author: '',
                  included: [],
                  ticketId: '',
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
      return { ...state, companies: action.payload.data.data, sectors: [] }

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
      return { ...state, statuses: action.payload.data.data }

    case LOAD_TYPES:
      return { ...state, types: action.payload.data.data }
    
    case LOAD_PRIORITIES:
      return { ...state, priorities: action.payload.data.data }

    default:
      return state
  }
}