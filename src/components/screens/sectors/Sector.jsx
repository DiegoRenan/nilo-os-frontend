import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../../templates/Main'
import SectorList from './SectorList'
import Grid from '../../templates/Grid';

export default props => {

  return (
    <Main title="Setores" >

      <div className="row">
        
        <Grid cols="9 9 9 9">
          <div className="display-4">Setores</div>
        </Grid>
        
        <Grid cols="3 3 3 3">
          <Link to="/new_sector">
            <i className="fa fa-plus btn btn-primary"></i> {props.title}
          </Link>
        </Grid>

      </div>

      <div className="sectors">
        <SectorList />
      </div>

    </Main>
  )
}
