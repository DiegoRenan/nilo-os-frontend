import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'

const hash = {"priority": "urgent"}
export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Tickets Urgentes</div>
    <TicketsList
      q={hash}
     />
  </Main>
