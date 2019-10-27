import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required } from 'redux-form-validators'

import { add, getStatus, update } from './statusActions'
import Input from '../../templates/form/Input'
import Grid from '../../templates/Grid'

class StatusForm extends Component {

  componentWillMount() {
    if (this.props.statusId) {
      this.props.getStatus(this.props.statusId)
    }
  }

  sectorObj(values) {
    const obj = {
      data: {
        type: "ticket-statuses",
        id: this.props.statusId || '',
        attributes: {
          status: values.status || ''
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.sectorObj(values)
    if (this.props.statusId) {
      this.props.update(obj, this.props.history)
    } else {
      this.props.add(obj, this.props.history)
    }
  }


  render() {

    const { handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props

    return (
      <div className="sector-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Status*: <Field component={Input} type="text" name="status" validate={[required()]} />
              </Grid>

            </div>

            <button type="submit"
              className="btn btn-primary btn-flat ml-auto m-2"
              disabled={submitting} >
              Salvar</button>

            <button type="button"
              className="btn btn-secondary btn-flat ml-auto"
              disabled={pristine || submitting}
              onClick={reset}>Limpar Campos</button>
          </div>
        </form>

      </div>

    )

  }
}

StatusForm = reduxForm({ form: 'statusForm', required, enableReinitialize: true })(StatusForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  getStatus,
  update
}, dispatch)

StatusForm = connect(
  state => ({
    initialValues: state.statusState.status
  }),
  mapDispatchToProps
)(StatusForm)

export default StatusForm
