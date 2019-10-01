import './TicketsList.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { loadTickets } from './ticketsActions'

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
    return tickets.map(ticket => (
      <tr key={ticket.id}>
        <td><Icon icon={`circle-o ` + this.colorPriority(ticket.attributes.nivel)} /></td>
        <td><Link to={`/show_ticket/`+ticket.id}>{ticket.attributes.title}</Link></td>
        <td>{ticket.attributes.author}</td>
        <td><Icon icon='users' /></td>
        <td><Icon icon='hourglass-half' /></td>
        <td><Icon icon='edit' /></td>
        <td><Icon icon='trash' /></td>
      </tr>
    ))
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
