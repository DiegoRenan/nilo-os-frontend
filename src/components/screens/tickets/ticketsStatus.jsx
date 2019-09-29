import React from 'react'

import ShowGridList from '../../templates/ShowGridList'
import Grid from '../../templates/Grid'
import If from '../../templates/If'
export default props => {

  const renderStatus = () => {
    const included = props.included || []

    return included.map(e => (
      <div>
        <If test={e.type == "ticket-statuses"} >
          <ShowGridList
            mb="0"
            label="Status"
            value={e.attributes.status}
          />
        </If>

        <If test={e.type == "ticket-types"}>
          <ShowGridList
            mb="0"
            label="Serviço"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "companies"}>
          <ShowGridList
            mb="0"
            label="Empresa"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "departments"}>
          <ShowGridList
            mb="0"
            label="Departamento"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "sectors"}>
          <ShowGridList
            mb="0"
            label="Setor"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "sectors"}>
          <ShowGridList
            mb="0"
            label="Setor"
            value={e.attributes.name}
          />
        </If>

      </div>
    ))

  }


  return (


    <div className="container status">
      <div className="row">
        <Grid cols="12 6 6 6">
          
          {renderStatus()}

        </Grid>
        <Grid cols="12 6 6 6">
            Responsaveis
      </Grid>
      </div>
      </div>
      )
}