import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { generateRequireSignInWrapper } from 'redux-token-auth'


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
import Departments from '../components/screens/departments/Department'
import DepartmentNew from '../components/screens/departments/DepartmentNew'
import DepartmentShow from '../components/screens/departments/DepartmentShow'
import DepartmentEdit from '../components/screens/departments/DepartmentEdit'
import Sectors from '../components/screens/sectors/Sector'
import SectorNew from '../components/screens/sectors/SectorNew'
import SectorShow from '../components/screens/sectors/SectorShow'
import SectorEdit from '../components/screens/sectors/SectorEdit'
import SignIn from '../auth/auth'

export default props => (
    <Switch>
      <Route path='/login' component={SignIn} />
      <Route path='/tickets' component={Home} />
      <Route path='/mytickets' component={MyTickets} />
      <Route path='/closedtickets' component={ClosedTickets} />

      <Route path='/companies' component={Company} />
      <Route path='/edit_company/:id' component={CompanyEdit} />
      <Route path='/show_company/:id' component={CompanyShow} />

      <Route path='/employees' component={Employees} />
      <Route path='/new_employee' component={EmployeeNew} />
      <Route path='/edit_employee/:id' component={EmployeeEdit} />
      <Route path='/show_employee/:id' component={EmployeeShow} />

      <Route path='/departments' component={Departments} />
      <Route path='/new_department' component={DepartmentNew} />
      <Route path='/show_department/:id' component={DepartmentShow} />
      <Route path='/edit_department/:id' component={DepartmentEdit} />

      <Route path='/sectors' component={Sectors} />
      <Route path='/new_sector' component={SectorNew} />
      <Route path='/show_sector/:id' component={SectorShow} />
      <Route path='/edit_sector/:id' component={SectorEdit} />

      <Redirect from='*' to='/tickets' />
    </Switch>
)
