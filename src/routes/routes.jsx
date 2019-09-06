import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../components/screens/home/Home'
import MyTickets from '../components/screens/myTickets/MyTickets'
import ClosedTickets from '../components/screens/closedTickets/ClosedTickets'
import Company from '../components/screens/company/Company'
import CompanyEdit from '../components/screens/company/CompanyEdit'
import CompanyShow from '../components/screens/company/CompanyShow'
import Employees from '../components/screens/employees/Employee'
import EmployeeNew from '../components/screens/employees/EmployeeNew'
import EmployeeEdit from '../components/screens/employees/EmployeeEdit'
import EmployeeShow from '../components/screens/employees/EmployeeShow'

export default props => (
    <Switch>
      <Route path='/tickets' component={Home} />
      <Route path='/mytickets' component={MyTickets} />
      <Route path='/closedtickets' component={ClosedTickets} />

      <Route path='/companies' component={Company} />
      <Route path='/company/edit/:id' component={CompanyEdit} />
      <Route path='/company/:id' component={CompanyShow} />

      <Route path='/employees' component={Employees} />
      <Route path='/employee/new' component={EmployeeNew} />
      <Route path='/employee/edit/:id' component={EmployeeEdit} />
      <Route path='/employee/:id' component={EmployeeShow} />

      <Redirect from='*' to='/tickets' />
    </Switch>
)
