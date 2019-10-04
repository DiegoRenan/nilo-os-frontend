import React from 'react'

import Main from '../../templates/Main'
import SectorForm from './SectorForm'

export default props =>
  <Main title="Editar Setor" >
    <div className="sector-edit">
      <div className="display-4">Editar Setor</div>
      <SectorForm sectorId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
