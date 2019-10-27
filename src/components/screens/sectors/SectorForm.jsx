import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required } from 'redux-form-validators'

import { add, getSector, update } from './sectorsActions'
import { loadDepartments } from '../departments/departmentsActions'
import Input from '../../templates/form/Input'
import Select from '../../templates/form/Select'
import Grid from '../../templates/Grid'

class SectorForm extends Component {

  componentWillMount() {
    if (this.props.sectorId) {
      this.props.getSector(this.props.sectorId)
    }
    this.props.loadDepartments()
  }

  departmentsOptions() {
    const departments = this.props.departments || []
    return departments.map(department => (
      <option value={department.id} key={department.id}>{department.attributes.name}</option>
    ))
  }

  sectorObj(values) {
    const obj = {
      data: {
        type: "sectors",
        id: this.props.sectorId || '',
        attributes: {
          name: values.name || '',
          department_id: values.departments || null
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.sectorObj(values)
    if (this.props.sectorId) {
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

              <Grid cols="12 4 4 4">
                Departamento*: <Field component={Select} name="departments" validate={[required()]}>
                  <option value="" disabled>Selecione um Departamento</option>
                  {this.departmentsOptions()}
                </Field>
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Nome*: <Field component={Input} type="text" name="name" validate={[required()]} />
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

SectorForm = reduxForm({ form: 'sectorForm', required, enableReinitialize: true })(SectorForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  getSector,
  update,
  loadDepartments
}, dispatch)

SectorForm = connect(
  state => ({
    initialValues: state.sectorState.sector,
    departments: state.sectorState.departments
  }),
  mapDispatchToProps
)(SectorForm)

export default SectorForm
