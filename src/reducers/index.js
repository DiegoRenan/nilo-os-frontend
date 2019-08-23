import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import TicketsReducers from '../components/templates/ticketsList/TicketsReducers'
import CompaniesReducers from '../components/screens/company/CompaniesReducers'
import AlertReducers from './AlertReducers'
import AuthReducers from '../auth/authReducer'

export default combineReducers({
  ticketsState: TicketsReducers,
  companiesState: CompaniesReducers,
  alertState: AlertReducers,
  auth: AuthReducers,
  form: formReducer
})