import { CRUD_EXECUTED } from './actionTypes'

export default alert = (message) => {
  return {
    type: CRUD_EXECUTED,
    payload: message
  }
}