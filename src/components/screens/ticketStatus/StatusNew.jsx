import React from 'react'

import Main from '../../templates/Main'
import StatusForm from './StatusForm'

export default props =>
  <Main title="Novo Status" >
    <div className="status-new">
      <div className="display-4">Novo Status</div>
      <StatusForm history={props.history}/>
    </div>
  </Main>
