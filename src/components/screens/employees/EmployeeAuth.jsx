import React from 'react'

export default props =>
  <div>
    <h6>Senha: </h6>
    <div className="row mb-3">

      <Grid cols="12 8 8 8">
        Senha: <Field component={Input} type="password" name="password" />
      </Grid>

      <Grid cols="12 8 8 8">
        Confirmar Senha: <Field component={Input}
          type="password"
          name="password_confirm"
          validate={[confirmation({ field: 'password' })]} />
      </Grid>

    </div>

  </div>
