import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../../templates/Main'
import EmployeeList from './EmployeeList'
import Grid from '../../templates/Grid';

export default props => {

  return (
    <Main title="Colaboradores" >

      <div className="row">
        
        <Grid cols="12 12 9 9">
          <div className="display-4">Colaboradores</div>
        </Grid>
        
        <Grid cols="12 12 3 3">
          <Link to="/new_employee" className="btn btn-success">
            Add Colaborador
          </Link>
        </Grid>

      </div>

      <div className="employees">
        <EmployeeList />
      </div>

    </Main>
  )
}
