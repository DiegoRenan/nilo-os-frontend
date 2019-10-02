import React from 'react'

import Main from '../../templates/Main'
import TicketForm from './TicketForm'

export default props =>
  <Main title="Abrir Ticket" >
    <div className="Ticket-new">
      <div className="display-4">Abrir Ticket</div>
      <TicketForm history={props.history}/>
    </div>
  </Main>
