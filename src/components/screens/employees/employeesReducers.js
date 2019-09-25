import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED,
  LOAD_COMPANIES,
  GET_COMPANY_DEPARTMENTS
} from '../../../actions/actionTypes'

const INITIAL_STATE = { 
  employees: [], 
  employee: [], 
  companies: [], 
  department: [], 
  departments: [] 
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return { ...state, employees: action.payload.data, employee: '' }
      
    case EMPLOYEE_CHANGED:
      return { ...state, employee: action.payload }

    case EMPLOYEE_ADDED:
      return { ...state, employee: '' }

    case EMPLOYEE_UPDATED:
      return { ...state, employee: '' }

    case GET_EMPLOYEE:
      
      console.log(action.payload.data.data[0].relationships.department.data)
      const department = []
      if(action.payload.data.data[0].relationships.department.data !== null){
        department = action.payload.data.included[1].attributes
      }

      return {
        ...state, employee: action.payload.data.data[0].attributes,
        company: action.payload.data.included[0].attributes,
        department: department
      }

    case LOAD_COMPANIES:
      return { ...state, companies: action.payload.data.data}
    
    case GET_COMPANY_DEPARTMENTS:
      return { ...state, departments: action.payload.data.data }

    default:
      return state
  }
}
