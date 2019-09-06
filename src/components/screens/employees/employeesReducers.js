import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED,
  LOAD_COMPANIES,
  GET_EMPLOYEE_COMPANY
} from '../../../actions/actionTypes'

const INITIAL_STATE = { employees: [], employee: [], companies: [] }

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
      let companyLink = action.payload.data.data[0].relationships.company.links.related 
      return { ...state, employee: action.payload.data.data[0].attributes, 
                         companyLink: companyLink}
    case LOAD_COMPANIES:
      let companies = action.payload.data || []
      return { ...state, companies: companies.data}
    case GET_EMPLOYEE_COMPANY:
      return { ...state, company: action.payload.data.data.attributes}
    default:
      return state
  }
}
