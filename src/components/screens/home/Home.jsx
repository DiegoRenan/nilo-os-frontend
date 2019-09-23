import './Home.css'
import React, { Component } from 'react'

import Main from '../../templates/Main'
import TicketsList from '../../templates/ticketsList/TicketsList'

export default props =>
  <Main title="Home" >
    <div className="display-4">Ticktes</div>
    <TicketsList />
  </Main>

