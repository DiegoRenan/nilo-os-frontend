import React from 'react'
import Main from '../../templates/Main'
import TicketForm from './TicketForm'

export default props =>
  <Main title="Editar Ticket" >
    <div className="ticket-edit">
      <div className="display-4">Editar Ticket</div>
      <TicketForm ticketId={props.match.params.id}
                    history={props.history}/>
    </div>
  </Main>
