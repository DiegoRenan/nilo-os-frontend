import { LOAD_TICKETS, GET_TICKET, GET_COMMENTS } from "../../../actions/actionTypes";

const INITIAL_STATE = { tickets: [], comments: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return { ...state, tickets: action.payload.data }

    case GET_TICKET:
      console.log(action.payload.data.data[0].attributes.responsibles)
      return {
        ...state, ticket: action.payload.data.data[0].attributes,
        included: action.payload.data.included,
        ticketId: action.payload.data.data[0].id,
        responsibles: action.payload.data.data[0].attributes.responsibles
      }

    case GET_COMMENTS:
      return { ...state, comments: action.payload.data.data }

    default:
      return state
  }
}