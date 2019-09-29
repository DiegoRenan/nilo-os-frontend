import React from 'react'

import Grid from './Grid'

export default props => {
  const mb = props.mb || "3"
  return (
    <div className={`row mb-` + mb}>
      <Grid cols="2 2 2 2">
        <strong> {props.label} </strong>
      </Grid>
      <Grid cols="10 10 10 10">
        {props.value}
      </Grid>
    </div>
  )

}