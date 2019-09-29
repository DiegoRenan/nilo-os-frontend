import './Home.css'
import React from 'react'

import Main from '../../templates/Main'
import TicketsList from  '../tickets/TicketsList'

export default props =>
  <Main title="Home" >
    <div className="display-4">Ticktes</div>
    <TicketsList />
  </Main>

