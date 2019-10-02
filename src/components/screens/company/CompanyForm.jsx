import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';

import { add, update, getCompany } from './companiesActions'
import Button from '../../templates/Button'
import Input from '../../templates/form/Input'
import Grid from '../../templates/Grid'
import { connect } from 'react-redux';


const required = value => value ? undefined : 'Required'

class CompanyForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.companyId) {
      this.props.getCompany(this.props.companyId)
    }
  }

  onSubmit(values) {
    const obj = this.companyObj(values)

    if (this.props.companyId) {
      this.props.update(obj, this.props)
    } else {
      this.props.add(obj, this.props)
    }

  }

  companyObj(values) {
    const obj =
    {
      data: {
        type: "companies",
        id: this.props.companyId || '',
        attributes: {
          name: values.name || ''
        }
      }
    }
    return obj
  }

  render() {
    const { handleSubmit, submitting, reset, pristine } = this.props

    return (
      <div className="company-form">

        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >

          <div className="container">

            <div className="row mb-3">

              <Grid cols="10 10 10 10">
                <Field component={Input} type="text" name="name" validate={[required]} />
              </Grid>


              <Grid cols="2 2 2 2">

                <div className="row ">

                  <Grid cols="6 6 6 6">
                    <Button type="submit"
                      disabled={submitting}
                      icon="plus"
                      style="primary btn-block"
                    />
                  </Grid>

                  <Grid cols="6 6 6 6">
                    <button type="button"
                      className="btn btn-secondary btn-flat btn-block"
                      disabled={pristine || submitting}
                      onClick={reset}>X</button>
                  </Grid>

                </div>

              </Grid>

            </div>

          </div>

        </form>

      </div >
    )
  }
}

CompanyForm = reduxForm({ form: 'companyForm', enableReinitialize: true })(CompanyForm)
const mapDispatchToProps = dispatch => bindActionCreators({ add, update, getCompany }, dispatch)

CompanyForm = connect(
  state => ({
    initialValues: {
      company: state.companiesState.company
    }
  }),
  mapDispatchToProps
)(CompanyForm)

export default CompanyForm