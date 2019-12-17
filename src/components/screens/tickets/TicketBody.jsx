import React from 'react'
import Grid from '../../templates/Grid'

export default props =>
  <div className="ticket-body mg-5">
    
    <div className="row">
      <Grid cols="12 3 3 3">
        <strong>{ props.author }</strong><br />
        <small>{props.ticket.created}</small><br />
        <strong>Previsão de entrega: </strong><br />
        <small>{props.conclude}</small><br />
      </Grid>

      <Grid cols="12 3 3 3">
        { props.ticket.body }
      </Grid>
    </div>
    
  </div>