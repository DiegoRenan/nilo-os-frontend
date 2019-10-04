import React from 'react'

import Main from '../../templates/Main'
import TypeForm from './TypeForm'

export default props =>
  <Main title="Novo Type" >
    <div className="type-new">
      <div className="display-4">Novo Tipo de Serviço</div>
      <TypeForm history={props.history}/>
    </div>
  </Main>
