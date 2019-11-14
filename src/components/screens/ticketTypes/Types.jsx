import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../../templates/Main'
import TypeList from './TypeList'
import Grid from '../../templates/Grid';

export default props => {

  return (
    <Main title="Type" >

      <div className="row">
        
        <Grid cols="9 9 9 9">
          <div className="display-4">Tipos de Tickets</div>
        </Grid>
        
        <Grid cols="3 3 3 3">
          <Link to="/new_type">
            <i className="fa fa-plus btn btn-primary"></i> {props.title}
          </Link>
        </Grid>

      </div>

      <div className="type">
        <TypeList />
      </div>

    </Main>
  )
}
