import { TOKEN_VALIDATED, USER_FETCHED }from '../actions/actionTypes'

const userKey = 'access-token'
const INITIAL_STATE = {
  user: localStorage.getItem(userKey),
  validToken: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        return { ...state, validToken: false, user: null }
      }
    case USER_FETCHED:
      return { ...state, user: action.payload, validToken: true}
    default: 
      return state
  }
}