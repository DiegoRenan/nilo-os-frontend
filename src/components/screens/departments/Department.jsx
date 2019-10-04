import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../../templates/Main'
import DepartmentList from './DepartmentList'
import Grid from '../../templates/Grid';

export default props => {

  return (
    <Main title="Departamentos" >

      <div className="row">
        
        <Grid cols="9 9 9 9">
          <div className="display-4">Departamentos</div>
        </Grid>
        
        <Grid cols="3 3 3 3">
          <Link to="/new_department">
            <i className="fa fa-plus btn btn-primary"></i> {props.title}
          </Link>
        </Grid>

      </div>

      <div className="employees">
        <DepartmentList />
      </div>

    </Main>
  )
}
