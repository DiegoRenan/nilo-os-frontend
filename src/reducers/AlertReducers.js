import { CRUD_EXECUTED, LOAD_COMPANIES } from '../actions/actionTypes'

const INITIAL_STATE = { http_code: '', message: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CRUD_EXECUTED:
      return {
        ...state, 
        http_code: action.payload.http_code, 
        message: action.payload.message,
        hidden: action.payload.hidden
      }
    default:
      return state
  }
}