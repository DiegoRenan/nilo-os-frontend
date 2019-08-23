import './TicketsList.css'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadTickets } from './ticketsActions'

import Icon from '../Icon'

class TicketsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadTickets()
  }

  renderRows() {
    let tickets = this.props.tickets || []
    return tickets.map(ticket => (
      <tr key={ticket.id}>
        <td><Icon icon='circle-o' /></td>
        <td>{ticket.attributes.title}</td>
        <td> Fulano </td>
        <td><Icon icon='users' /></td>
        <td><Icon icon='hourglass-half' /></td>
        <td><Icon icon='edit' /></td>
        <td><Icon icon='trash' /></td>
      </tr>
    ))
  }

  render () {
    return (
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
    )
  }
}

const mapStateToProps = state => ({ tickets: state.ticketsState.tickets.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadTickets}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
