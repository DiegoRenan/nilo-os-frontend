import React from 'react'

import Grid from './Grid'

export default props =>
  <div className='row mb-3'>
    <Grid cols="2 2 2 2">
      <strong> {props.label} </strong>
    </Grid>
    <Grid cols="10 10 10 10">
      {props.value}
    </Grid>
  </div>