import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED,
  LOAD_COMPANIES,
  GET_COMPANY_DEPARTMENTS,
  GET_DEPARTMENT_SECTORS
} from '../../../actions/actionTypes'

const INITIAL_STATE = {
  employees: [],
  employee: [],
  company: {},
  companies: [],
  department: [],
  departments: [],
  avatar: ''
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
      let company = []
      let department = []
      let sector = []

      let included = action.payload.data.included

      included.map(hash => {
        if (hash.type === "companies")
          company = hash.attributes
        if (hash.type === "departments")
          department = hash.attributes
        if (hash.type === "sectors")
          sector = hash.attributes
      })

      return {
        ...state, employee: action.payload.data.data[0].attributes,
        company: company,
        department: department,
        sector: sector
      }

    case LOAD_COMPANIES:
      return { ...state, companies: action.payload.data.data }

    case GET_COMPANY_DEPARTMENTS:
      return { ...state, departments: action.payload.data.data }

    case GET_DEPARTMENT_SECTORS:
      return { ...state, sectors: action.payload.data.data }

    default:
      return state
  }
}
