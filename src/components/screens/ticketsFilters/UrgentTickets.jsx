import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'
import OrderBy from '../../templates/OrderBy'

const hash = {"priority": "urgent"}
export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Tickets Urgentes</div>
    <OrderBy 
    	q={hash}/>
    <TicketsList
      q={hash}
     />
  </Main>
