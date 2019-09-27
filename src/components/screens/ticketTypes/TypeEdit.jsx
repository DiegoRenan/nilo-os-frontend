import React from 'react'

import Main from '../../templates/Main'
import TypeForm from './TypeForm'

export default props =>
  <Main title="Editar Tipo" >
    <div className="type-edit">
      <div className="display-4">Editar Tipo de Serviço</div>
      <TypeForm typeId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
