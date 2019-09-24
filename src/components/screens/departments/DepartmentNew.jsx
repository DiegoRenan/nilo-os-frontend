import React from 'react'

import Main from '../../templates/Main'
import DepartmentForm from './DepartmentForm'

export default props =>
  <Main title="Novo Colaborador" >
    <div className="department-new">
      <div className="display-4">Novo Departamento</div>
      <DepartmentForm history={props.history}/>
    </div>
  </Main>
