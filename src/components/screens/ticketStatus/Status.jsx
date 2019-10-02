import React from 'react'
import { Link } from 'react-router-dom'
import './Status.css'

import Main from '../../templates/Main'
import StatusList from './StatusList'
import Grid from '../../templates/Grid';

export default props => {

  return (
    <Main title="Status" >

      <div className="row">
        
        <Grid cols="9 9 9 9">
          <div className="display-4">Status</div>
        </Grid>
        
        <Grid cols="3 3 3 3">
          <Link to="/new_status">
            <i className="fa fa-plus btn btn-primary"></i> {props.title}
          </Link>
        </Grid>

      </div>

      <div className="status">
        <StatusList />
      </div>

    </Main>
  )
}
