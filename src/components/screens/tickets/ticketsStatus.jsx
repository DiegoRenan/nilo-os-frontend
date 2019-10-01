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

  const renderResponsibles = () => {
    const responsibles = props.responsibles || []

    return responsibles.map(e => (
      <span class="badge badge-light" key={e.id}>{e.name}</span>
    ))
  }

  return (


    <div className="status">
      <div className="row mg-5">
        <div className="col-6">
          {renderStatus()}
        </div>
        <div className="col-6">
          <strong>Responsaveis:</strong>
          {renderResponsibles()}
        </div>
      </div>
    </div>
  )
}