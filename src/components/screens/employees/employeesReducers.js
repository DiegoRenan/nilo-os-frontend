import profile from './profile.png'
import {
  LOAD_EMPLOYEES,
  EMPLOYEE_CHANGED,
  EMPLOYEE_ADDED,
  GET_EMPLOYEE,
  EMPLOYEE_UPDATED,
  LOAD_COMPANIES,
  GET_COMPANY_DEPARTMENTS,
  GET_DEPARTMENT_SECTORS,
  NEW_EMPLOYEE
} from '../../../actions/actionTypes'

const INITIAL_STATE = {
  employees: [],
  employee: [],
  company: '',
  companies: [],
  department: '',
  departments: [],
  avatar: profile
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      console.log(action.payload.data)
      return { ...state, employees: action.payload.data, employee: '' }

    case EMPLOYEE_CHANGED:
      return { ...state, employee: action.payload }

    case EMPLOYEE_ADDED:
      return { ...state, employee: '' }

    case EMPLOYEE_UPDATED:
      return { ...state, employee: '' }

    case GET_EMPLOYEE:
      return {
        ...state, 
        employee: action.payload.data.data[0].attributes,
        company: action.payload.data.data[0].attributes["company-id"],
        c_name: action.payload.data.data[0].attributes["company-name"],
        department: action.payload.data.data[0].attributes["department-id"],
        d_name: action.payload.data.data[0].attributes["department-name"],
        sector: action.payload.data.data[0].attributes["sector-id"],
        s_name: action.payload.data.data[0].attributes["sector-name"],
        name: action.payload.data.data[0].attributes.name,
        cpf: action.payload.data.data[0].attributes.cpf,
        email: action.payload.data.data[0].attributes.email,
        born: action.payload.data.data[0].attributes.born,
        cep: action.payload.data.data[0].attributes.cep,
        avatar: action.payload.data.data[0].attributes.avatar || profile,
        street: action.payload.data.data[0].attributes.street,
        number: action.payload.data.data[0].attributes.number,
        master: action.payload.data.data[0].attributes.master,
        district: action.payload.data.data[0].attributes.district,
        city: action.payload.data.data[0].attributes.city,
        uf: action.payload.data.data[0].attributes.uf
      }

    case NEW_EMPLOYEE:
      return { 
        ...state, 
          employee: '',
          company: '',
          department: '',
          sector: '',
          name: '',
          cpf: '',
          email: '',
          born: '',
          cep: '',
          avatar: profile,
          street: '',
          number: '',
          district: '',
          city: '',
          uf: ''}

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