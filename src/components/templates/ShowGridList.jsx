import React from 'react'

import Grid from './Grid'

export default props => {
  const mb = props.mb || "3"
  return (
    <div className={`row mb-` + mb}>
      <Grid cols="3 3 3 3">
        <strong> {props.label} </strong>
      </Grid>
      <Grid cols="9 9 9 9">
        {props.value}
      </Grid>
    </div>
  )

}