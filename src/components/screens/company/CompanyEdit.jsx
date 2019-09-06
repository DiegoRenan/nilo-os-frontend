import React from 'react'

import Main from '../../templates/Main'
import CompanyForm from './CompanyForm'

export default props =>
  <Main title="Editar Empresa" >
    <div className="company-edit">
      <div className="display-4">Editar Empresa</div>
      <CompanyForm companyId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>