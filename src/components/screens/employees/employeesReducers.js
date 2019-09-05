import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED
} from '../../../actions/actionTypes'

const INITIAL_STATE = { employees: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      let data = action.payload.data || []
      return { ...state, employees: data, employee: '' }
    case EMPLOYEE_CHANGED:
      return { ...state, employee: action.payload }
    case EMPLOYEE_ADDED:
      return { ...state, employee: '' }
    case EMPLOYEE_UPDATED:
      return { ...state, employee: '' }
    case GET_EMPLOYEE:
      return { ...state, employee: action.payload.data.data[0].attributes}
    default:
      return state
  }
}
