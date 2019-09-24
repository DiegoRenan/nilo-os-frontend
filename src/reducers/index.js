import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import TicketsReducers from '../components/templates/ticketsList/TicketsReducers'
import CompaniesReducers from '../components/screens/company/CompaniesReducers'
import AlertReducers from './AlertReducers'
import AuthReducers from '../auth/authReducer'
import EmployeeReducers from '../components/screens/employees/employeesReducers'
import DepartmentReducers from '../components/screens/departments/departmentReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers,
  employeeState: EmployeeReducers,
  departmentState: DepartmentReducers,
  alertState: AlertReducers,
  auth: AuthReducers,
  reduxTokenAuth: reduxTokenAuthReducer,
  form: formReducer
})