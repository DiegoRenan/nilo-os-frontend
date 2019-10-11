import './ClosedTickets.css'
import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'

export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Titckets Fechados</div>
    <TicketsList
      closedTickets={true}
     />
  </Main>