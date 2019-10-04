import React from 'react'

import Main from '../../templates/Main'
import StatusForm from './StatusForm'

export default props =>
  <Main title="Editar Status" >
    <div className="status-edit">
      <div className="display-4">Editar Status</div>
      <StatusForm statusId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
