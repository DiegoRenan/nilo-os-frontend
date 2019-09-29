import {
  LOAD_DEPARTMENTS,
  DEPARTMENT_CHANGED,
  DEPARTMENT_ADDED,
  DEPARTMENT_UPDATED,
  GET_DEPARTMENT,
  GET_DEPARTMENT_COMPANY,
  LOAD_COMPANIES
} from '../../../actions/actionTypes'

const INITIAL_STATE = { departments: [], department: [], companies: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOAD_DEPARTMENTS:
      let data = action.payload.data || []
      return { ...state, departments: data, department: '' }

    case DEPARTMENT_CHANGED:
      return { ...state, department: action.payload }

    case DEPARTMENT_ADDED:
      return { ...state, department: '' }

    case DEPARTMENT_UPDATED:
      return { ...state, department: '' }

    case GET_DEPARTMENT:
      return {
        ...state,
        department: action.payload.data.data[0].attributes,
        sectors: action.payload.data.included
      }

    case LOAD_COMPANIES:
      return { ...state, companies: action.payload.data.data }

    case GET_DEPARTMENT_COMPANY:
      return { ...state, company: action.payload.data.data.attributes }

    default:
      return state
  }
}
