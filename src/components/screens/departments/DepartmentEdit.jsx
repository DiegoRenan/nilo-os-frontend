import React from 'react'

import Main from '../../templates/Main'
import DepartmentForm from './DepartmentForm'

export default props =>
  <Main title="Editar Departamento" >
    <div className="departament-edit">
      <div className="display-4">Editar Departamento</div>
      <DepartmentForm departmentId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
