import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED,
  LOAD_COMPANIES,
  GET_COMPANY_DEPARTMENTS
} from '../../../actions/actionTypes'

const INITIAL_STATE = { employees: [], employee: [], companies: [], departments: [] }

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
      const department = []
      
      if (action.payload.data.data[0].relationships.department.data !== null){
        department = action.payload.data.included[1].attributes || []
      }

      return {
        ...state, employee: action.payload.data.data[0].attributes,
        company: action.payload.data.included[0].attributes,
        department: department
      }

    case LOAD_COMPANIES:
      let companies = action.payload.data || []
      return { ...state, companies: companies.data }
    
    case GET_COMPANY_DEPARTMENTS:
      const departments = action.payload.data || []
      return { ...state, departments: departments.data }

    default:
      return state
  }
}
