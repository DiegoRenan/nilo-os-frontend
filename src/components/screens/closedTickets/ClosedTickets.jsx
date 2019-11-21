import './ClosedTickets.css'
import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'
import OrderBy from '../../templates/OrderBy'

export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Tickets Fechados</div>
     <OrderBy 
    	screen="closedTickets"/>
    <TicketsList
      closedTickets={true}/>
  </Main>