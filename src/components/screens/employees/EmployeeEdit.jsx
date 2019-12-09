import React from 'react'

import Main from '../../templates/Main'
import EmployeeForm from './EmployeeForm'

export default props =>
  <Main title="Editar Colaborador" >
    <div className="employee-new">
      <div className="display-4">Editar Colaborador</div>
      <EmployeeForm employeeId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
