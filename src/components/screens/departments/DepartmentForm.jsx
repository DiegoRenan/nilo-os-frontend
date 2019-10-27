import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required } from 'redux-form-validators'

import { add, getDepartment, update } from './departmentsActions'
import { loadCompanies } from '../company/companiesActions'
import Input from '../../templates/form/Input'
import Select from '../../templates/form/Select'
import Grid from '../../templates/Grid'

class DepartmentForm extends Component {

  componentWillMount() {
    if (this.props.departmentId) {
      this.props.getDepartment(this.props.departmentId)
    }
    this.props.loadCompanies()
  }

  companiesOptions(companies) {
    return companies.map(company => (
      <option value={company.id} key={company.id}>{company.attributes.name}</option>
    ))
  }

  departmentObj(values) {
    const obj = {
      data: {
        type: "departments",
        id: this.props.departmentId || '',
        attributes: {
          name: values.name || '',
          company_id: values.companies || null
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.departmentObj(values)
    if (this.props.departmentId) {
      this.props.update(obj, this.props.history)
    } else {
      this.props.add(obj, this.props.history)
    }
  }


  render() {

    const { handleSubmit,
      pristine,
      reset,
      submitting,
      companies } = this.props

    return (
      <div className="department-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >

            <div className="row mb-3">

              <Grid cols="12 4 4 4">
                Empresa*: <Field component={Select} name="companies" validate={[required()]}>
                  <option value="" disabled>Selecione uma Empresa</option>
                  {this.companiesOptions(companies)}
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

DepartmentForm = reduxForm({ form: 'departmentForm', required, enableReinitialize: true })(DepartmentForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  getDepartment,
  update,
  loadCompanies
}, dispatch)

DepartmentForm = connect(
  state => ({
    initialValues: state.departmentState.department,
    companies: state.departmentState.companies
  }),
  mapDispatchToProps
)(DepartmentForm)

export default DepartmentForm
