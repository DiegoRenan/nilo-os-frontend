import {
  LOAD_TYPES,
  TYPE_CHANGED,
  TYPE_ADDED,
  TYPE_UPDATED,
  GET_TYPE
} from '../../../actions/actionTypes'

const INITIAL_STATE = { types: [], type: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_TYPES:
      return { ...state, types: action.payload.data, type: '' }

    case TYPE_CHANGED:
      return { ...state, type: action.payload }

    case TYPE_ADDED:
      return { ...state, type: '' }

    case TYPE_UPDATED:
      return { ...state, type: '' }

    case GET_TYPE:
      return {
        ...state,
        type: action.payload.data.data.attributes
      }

    default:
      return state
  }
}
