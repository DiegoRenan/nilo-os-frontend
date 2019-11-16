import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'
import OrderBy from '../../templates/OrderBy'

const hash = {"priority": "important"}
export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Tickets Importantes</div>
    <OrderBy 
    	q={hash}/>
    <TicketsList
      q={hash}
     />
  </Main>
