import React from 'react'

import ShowGridList from '../../templates/ShowGridList'
import If from '../../templates/If'
import TicketResponsibles from './TicketResponsibles'

export default props => {

  const renderStatus = () => {
    const included = props.included || []

    return included.map(e => (
      <div>
        <If test={e.type == "ticket-statuses"} key="ticket-statuses">
          <ShowGridList
            mb="0"
            label="Status"
            value={e.attributes.status}
          />
        </If>

        <If test={e.type == "ticket-types"} key="ticket-types">
          <ShowGridList
            mb="0"
            label="Serviço"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "companies"} key="companies">
          <ShowGridList
            mb="0"
            label="Empresa"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "departments"} key="departments">
          <ShowGridList
            mb="0"
            label="Departamento"
            value={e.attributes.name}
          />
        </If>

        <If test={e.type == "sectors"} key="sectors">
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
    <div className="status">
      <div className="row mg-5">
        <div className="col-6">
          {renderStatus()}
        </div>
        <div className="col-6">
          <strong>Responsaveis:</strong><br />
          <TicketResponsibles />
        </div>
      </div>
    </div>
  )
}