import './Home.css'
import React from 'react'

import Main from '../../templates/Main'
import TicketsList from  '../tickets/TicketsList'
import OrderBy from '../../templates/OrderBy'
export default props =>
  <Main title="Home" >
    <div className="display-4">Ticktes</div>
    <OrderBy screen="home"/>
    <TicketsList />
  </Main>

