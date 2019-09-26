import React from 'react'

import Main from '../../templates/Main'
import SectorForm from './SectorForm'

export default props =>
  <Main title="Novo Setor" >
    <div className="sector-new">
      <div className="display-4">Novo Setor</div>
      <SectorForm history={props.history}/>
    </div>
  </Main>
