import { LOAD_TICKETS } from "../../../actions/actionTypes";

const INITIAL_STATE = { tickets: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      let data = action.payload.data || []
      return { ...state, tickets: data}
    default:
      return state
  }
}