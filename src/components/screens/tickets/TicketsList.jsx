import './TicketsList.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Button from '../../templates/Button'
import { loadTickets } from './ticketsActions'
import Modal from '../../templates/Modal'
import AddResponsible from './AddResponsible'

import Icon from '../../templates/Icon'

class TicketsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadTickets()
  }

  colorPriority(priority) {

    if (priority === 'urgent') {
      return 'text-danger'
    }

    if (priority === 'important') {
      return 'text-warning'
    }

    return 'text-light'
  }

  renderRows() {
    let tickets = this.props.tickets || []
    return tickets.map((ticket, index) => (
      <tr key={ticket.id}>
        <td><Icon icon={`circle-o ` + this.colorPriority(ticket.attributes.nivel)} /></td>
        <td><Link to={`/show_ticket/` + ticket.id}>{ticket.attributes.title}</Link></td>
        <td>{ticket.attributes.author}</td>
        <td>
          <Button
            style="secondary btn-sm mg-l-5"
            icon="fas fa-users"
            toggle="modal"
            target={`#m` + index + `m`}
          />
          {this.renderModal(ticket, `m` + index + `m`)}
        </td>
        <td><Icon icon='hourglass-half' /></td>
        <td><Icon icon='edit' /></td>
        <td><Icon icon='trash' /></td>
      </tr>
    ))
  }

  renderResponsibles(ticket) {
    let responsibles = ticket.attributes.responsibles || []
    return responsibles.map((responsible, index) => (
      <li className="list-group-item" key={index}>
        {responsible}
      </li>
    ))
  }

  renderModal(ticket, id) {
    return (
      <Modal
        modal_id={id}
        modal_id_label={id + `Label`}
        modal_title="Responsaveis"
      >
        <ul className="list-group">{this.renderResponsibles(ticket)}</ul>

      </Modal>
    )
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Prio.</th>
              <th>Título</th>
              <th>Autor</th>
              <th> Resp </th>
              <th> - </th>
              <th> - </th>
              <th> - </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ tickets: state.ticketsState.tickets.data })
const mapDispatchToProps = dispatch => bindActionCreators({ loadTickets }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
