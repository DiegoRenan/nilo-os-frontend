import { LOAD_TICKETS, GET_TICKET } from "../../../actions/actionTypes";

const INITIAL_STATE = { tickets: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return { ...state, tickets: action.payload.data}
    
    case GET_TICKET:
      console.log(action.payload.data.data[0].attributes)
      return {...state, ticket: action.payload.data.data[0].attributes,
                        included: action.payload.data.included}

    default:
      return state
  }
}