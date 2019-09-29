import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import TicketsReducers from '../components/screens/tickets/TicketsReducers'
import CompaniesReducers from '../components/screens/company/CompaniesReducers'
import AlertReducers from './AlertReducers'
import AuthReducers from '../auth/authReducer'
import EmployeeReducers from '../components/screens/employees/employeesReducers'
import DepartmentReducers from '../components/screens/departments/departmentReducer'
import SectorReducers from '../components/screens/sectors/sectorReducer'
import StatusReducers from '../components/screens/ticketStatus/statusReducer'
import TypeReducers from '../components/screens/ticketTypes/typeReducer'
import { reduxTokenAuthReducer } from 'redux-token-auth'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers,
  employeeState: EmployeeReducers,
  departmentState: DepartmentReducers,
  sectorState: SectorReducers,
  statusState: StatusReducers,
  typesState: TypeReducers, 
  alertState: AlertReducers,
  auth: AuthReducers,
  reduxTokenAuth: reduxTokenAuthReducer,
  form: formReducer
})