import {
  LOAD_STATUS,
  STATUS_CHANGED,
  STATUS_ADDED,
  STATUS_UPDATED,
  GET_STATUS
} from '../../../actions/actionTypes'

const INITIAL_STATE = { statuses: [], status: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_STATUS:
      return { ...state, statuses: action.payload.data, status: '' }

    case STATUS_CHANGED:
      return { ...state, status: action.payload }

    case STATUS_ADDED:
      return { ...state, status: '' }

    case STATUS_UPDATED:
      return { ...state, status: '' }

    case GET_STATUS:
      return {
        ...state,
        status: action.payload.data.data.attributes
      }

    default:
      return state
  }
}
