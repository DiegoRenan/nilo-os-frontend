import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { removeResponsible, getTicketResponsibles, addResponsible } from './ticketsActions'
import Button from '../../templates/Button'
import Grid from '../../templates/Grid'
import If from '../../templates/If'

class AddResponsibles extends Component {

  handleRemoveResponsible(id, ticket_id) {
    this.props.removeResponsible(id, ticket_id)
  }

  handleAddResponsible(employee_id) {
    const ticket_id = this.props.ticketId || ''

    const obj = {
      data: {
        type: "responsibles",
        attributes: {
          ticket_id: ticket_id,
          employee_id: employee_id
        }
      }
    }

    this.props.addResponsible(obj)
  }

  employeesNotIn() {
    let responsibles = this.props.responsibles || []
    const employeesNotIn = []
    responsibles.map(e => {
      employeesNotIn.push(e.attributes.employee.id)
    })

    return (employeesNotIn)
  }


  renderEmployees() {
    let employees = this.props.employees || []

    const vetor = this.employeesNotIn()

    return employees.map(e => (
      <If test={!vetor.includes(e.id)}>
        <li className="list-group-item" key={e.id}>
          {vetor.includes(e.id)}
          <div className="row">
            <Grid cols="8 8 8 8">{e.attributes.name}</Grid>
            <Grid cols="4 4 4 4">
              <Button
                style="success btn-sm"
                icon="far fa-plus"
                onClick={() => this.handleAddResponsible(e.id)}
              />
            </Grid>
          </div>
        </li>
      </If>
    ))

  }

  renderResponsibles() {
    const responsibles = this.props.responsibles || []

    return responsibles.map(e => (
      <li className="list-group-item" key={e.id}>
        <div className="row">
          <Grid cols="8 8 8 8">{e.attributes.employee.name}</Grid>
          <Grid cols="4 4 4 4">
            <Button
              style="danger btn-sm"
              icon="far fa-times-circle"
              onClick={() => this.handleRemoveResponsible(e.id, e.attributes.ticket.id)}
            />
          </Grid>
        </div>
      </li>

    ))
  }

  render() {
    return (
      <div>
        <ul className="list-group">{this.renderResponsibles()}</ul>
        <ul className="list-group">{this.renderEmployees()}</ul>
      </div>
    )
  }

}


const mapDispatchToProps = dispatch => bindActionCreators({
  getTicketResponsibles,
  removeResponsible,
  addResponsible
}, dispatch)

export default connect(null, mapDispatchToProps)(AddResponsibles)
