import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required, reset, confirmation } from 'redux-form-validators'

import { add, update, loadPriorities, getTicket, newTicket } from './ticketsActions'
import { loadCompanies, getCompanyDepartments } from '../company/companiesActions'
import { loadStatus } from '../ticketStatus/statusActions'
import { loadTypes } from '../ticketTypes/typeActions'
import { getDepartmentSectors } from '../departments/departmentsActions'
import Input from '../../templates/form/Input'
import Select from '../../templates/form/Select'
import TextArea from '../../templates/form/TextArea'
import Grid from '../../templates/Grid'
import Button from '../../templates/Button'
import If from '../../templates/If'

class TicketForm extends Component {

  componentWillMount() {
    this.props.loadCompanies()
    this.props.loadStatus()
    this.props.loadTypes()
    this.props.loadPriorities()
    if (this.props.ticketId) {
      this.props.getTicket(this.props.ticketId)
    } else {
      this.props.newTicket()
    }
  }

  companiesOptions() {
    let companies = this.props.companies || []
    return companies.map(company => (
      <option value={company.id} key={company.id}>{company.attributes.name}</option>
    ))
  }

  statusOptions() {
    let status = this.props.statuses || []
    return status.map(status => (
      <option value={status.id} key={status.id}>{status.attributes.status}</option>
    ))
  }

  typesOptions() {
    let types = this.props.types || []
    return types.map(type => (
      <option value={type.id} key={type.id}>{type.attributes.name}</option>
    ))
  }

  priorityOptions() {
    let priorities = this.props.priorities || []
    return priorities.map(priority => (
      <option value={priority.id} key={priority.id}>{priority.attributes.nivel}</option>
    ))
  }

  departmentsOptions() {
    const departments = this.props.departments
    return departments.map(department => (
      <option value={department.id} key={department.id}>{department.attributes.name}</option>
    ))
  }

  sectorsOptions() {
    let sectors = this.props.sectors || []
    return sectors.map(sector => (
      <option value={sector.id} key={sector.id}>{sector.attributes.name}</option>
    ))
  }

  companyOnChange(e) {
    this.props.getCompanyDepartments(e.target.value)
  }

  departmentOnChange(e) {
    this.props.getDepartmentSectors(e.target.value)
  }

  ticketObj(values) {
    const obj = {
      data: {
        type: "tickets",
        id: this.props.ticketId || '',
        attributes: {
          title: values.title || '',
          body: values.body || '',
          conclude_at: values.conclude_at || '',
          company_id: values.company || null,
          department_id: values.department || null,
          sector_id: values.sector || null,
          ticket_status_id: values.ticket_status || null,
          ticket_type_id: values.ticket_type || null,
          employee_id: localStorage.getItem("employee_id") || null,
          priority_id: values.ticket_priority || null
        }
      }
    }
    return obj
  }

  ticketUpdateObj(values) {
    const obj = {
      data: {
        type: "tickets",
        id: this.props.ticketId || '',
        attributes: {
          title: values.title || '',
          body: values.body || '',
          conclude_at: values.conclude_at || '',
          company_id: values.company || null,
          department_id: values.department || null,
          sector_id: values.sector || null,
          ticket_status_id: values.ticket_status || null,
          ticket_type_id: values.ticket_type || null,
          priority_id: values.ticket_priority || null
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    if (this.props.ticketId) {
      const obj = this.ticketUpdateObj(values)
      this.props.update(obj, this.props.history)
    } else {
      const obj = this.ticketObj(values)
      this.props.add(obj, this.props.history)
    }
  }

  render() {

    const { handleSubmit,
      pristine,
      reset,
      submitting } = this.props

    return (
      <div className="ticket-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >

            <div className="row mb-3">

              <Grid cols="12 12 4 4">
                Empresa*: <Field component={Select}
                  name="company"
                  onChange={e => this.companyOnChange(e)}
                  validate={[required()]}>
                  <option value="" disabled>Selecione uma Empresa</option>
                  {this.companiesOptions()}
                </Field>
              </Grid>

              <Grid cols="12 12 4 4">
                Departamento: <Field component={Select}
                  name="department"
                  onChange={e => this.departmentOnChange(e)}
                >
                  <option value="" disabled>Selecione o Departamento</option>
                  {this.departmentsOptions()}
                </Field>
              </Grid>

              <Grid cols="12 12 4 4">
                Setor: <Field component={Select} name="sector">
                  <option value="" disabled>Selecione o Setor</option>
                  {this.sectorsOptions()}
                </Field>
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 12 12 12">
                Titulo*: <Field component={Input} type="text" name="title" validate={[required()]} />
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 12 12 12">
                <Field component={TextArea} rows="6" name="body" validate={[required()]} />
              </Grid>

            </div>

            <div className="row mb-3">
              <Grid cols="12 6 4 4">
                Tipo de Serviço: <Field component={Select}
                  name="ticket_type">
                  <option value="" disabled>Selecione um Tipo de Serviço</option>
                  {this.typesOptions()}
                </Field>
              </Grid>
            </div>

            <If test={localStorage.getItem("admin") === "true" || localStorage.getItem("master") === "true"}>
              <div className="row mb-3">
                <Grid cols="12 4 4 4 ">
                  Concluir até: <Field component={Input} type="date" name="conclude_at" />
                </Grid>

                <Grid cols="12 4 4 4">
                  Prioridade: <Field component={Select}
                    name="ticket_priority_id">
                    <option value="" disabled>Selecione uma Prioridade</option>
                    {this.priorityOptions()}
                  </Field>
                </Grid>

                <Grid cols="12 4 4 4">
                  Status: <Field component={Select}
                    name="ticket_status">
                    <option value="" disabled>Selecione um Status</option>
                    {this.statusOptions()}
                  </Field>
                </Grid>

              </div>
            </If>
            <br />
            <br />
            <div className="row mb-3">

              <Grid cols="12 12 12 12">

                <div className="row ">

                  <Grid cols="6 6 6 6">
                    <button type="button"
                      className="btn btn-secondary btn-flat btn-block"
                      title="limpar"
                      disabled={pristine || submitting}
                      onClick={reset}>limpar</button>
                  </Grid>

                  <Grid cols="6 6 6 6">
                    <Button type="submit"
                      disabled={submitting}
                      class="success btn-block"
                      title="enviar"
                    />
                  </Grid>

                </div>

              </Grid>

            </div>

          </div>
        </form>

      </div>

    )
  }
}

TicketForm = reduxForm({
  form: 'ticketForm',
  required,
  enableReinitialize: true
})(TicketForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  update,
  loadCompanies,
  getCompanyDepartments,
  getDepartmentSectors,
  loadStatus,
  loadTypes,
  loadPriorities,
  getTicket,
  newTicket
}, dispatch)


TicketForm = connect(

  state => ({
    initialValues: {
      title: state.ticketsState.ticket.title,
      body: state.ticketsState.ticket.body
    },
    ticket: state.ticketsState.ticket,
    companies: state.ticketsState.companies,
    departments: state.ticketsState.departments,
    sectors: state.ticketsState.sectors,
    statuses: state.ticketsState.statuses,
    types: state.ticketsState.types,
    priorities: state.ticketsState.priorities
  }),
  mapDispatchToProps
)(TicketForm)

export default TicketForm
