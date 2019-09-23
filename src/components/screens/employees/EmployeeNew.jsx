import React from 'react'

import Main from '../../templates/Main'
import EmployeeForm from './EmployeeForm'

export default props =>
  <Main title="Novo Colaborador" >
    <div className="employee-new">
      <div className="display-4">Novo Colaborador</div>
      <EmployeeForm history={props.history}/>
    </div>
  </Main>
