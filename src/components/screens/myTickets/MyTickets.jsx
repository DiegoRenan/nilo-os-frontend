import './MyTickets.css'
import React from 'react'

import Main from '../../templates/Main'
import TicketsList from '../tickets/TicketsList'

export default props => 
  <Main title="Meus Tickets" >
    <div className="display-4">Meus Tickets</div>
    <TicketsList
      user_id={localStorage.getItem("employee_id")}
     />
  </Main>