import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required } from 'redux-form-validators'

import { add, getType, update } from './typeActions'
import Input from '../../templates/form/Input'
import Grid from '../../templates/Grid'

class TypeForm extends Component {

  componentWillMount() {
    if (this.props.typeId) {
      this.props.getType(this.props.typeId)
    }
  }

  sectorObj(values) {
    const obj = {
      data: {
        type: "ticket-types",
        id: this.props.typeId || '',
        attributes: {
          name: values.name || ''
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.sectorObj(values)
    if (this.props.typeId) {
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
      <div className="type-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Tipo*: <Field component={Input} type="text" name="name" validate={[required()]} />
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

TypeForm = reduxForm({ form: 'typeForm', required, enableReinitialize: true })(TypeForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  getType,
  update
}, dispatch)

TypeForm = connect(
  state => ({
    initialValues: state.typesState.type
  }),
  mapDispatchToProps
)(TypeForm)

export default TypeForm
