import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'

const hash = {"priority": "important"}
export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Tickets Importantes</div>
    <TicketsList
      q={hash}
     />
  </Main>
