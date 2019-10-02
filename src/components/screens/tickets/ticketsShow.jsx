import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Ticket.css'
import Main from '../../templates/Main'
import { 
  getTicket, 
  getComments, 
  getTicketResponsibles,
  loadEmployees,
} from './ticketsActions'
import Icon from '../../templates/Icon'
import Button from '../../templates/Button'
import TicketsStatus from './ticketsStatus'
import TicketBody from './TicketBody'
import TicketComments from './TicketComments'
import Modal from '../../templates/Modal'
import AddResponsible from './AddResponsible';

class TicketsShow extends Component {

  componentWillMount() {
    this.props.getTicket(this.props.match.params.id)
    this.props.getTicketResponsibles(this.props.match.params.id)
    this.props.loadEmployees()

  }

  componentDidMount() {
    this.props.getComments(this.props.match.params.id)
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

  render() {
    const obj = this.props.ticket || []
    const included = this.props.included || []
    const employees = this.props.employees || []

    return (
      <Main title="Type" >
        <h1>
          {<Icon icon={`circle-o ` + this.colorPriority(obj.nivel)} />}
          {obj.title}
        </h1>

        <Button
            style="secondary btn-sm"
            icon="fas fa-users"
            toggle="modal" 
            target="#exampleModal"
          />

        <Modal
          modal_id="exampleModal"
          modal_id_label="exampleModalLabel"
          modal_title="Adicionar Responsável"
          >
            <AddResponsible 
              ticketId={this.props.ticketId}
              responsibles={this.props.responsibles}
              employees={employees}
            />
        </Modal>
        
        <div className="card types">

          <TicketsStatus
            included={included}
            nivel={obj.nivel}
          />

          <TicketBody
            ticket={obj}
            ticketId={this.props.ticketId}
          />

        </div>

        <div className="mg-5 pd-5">
          <TicketComments />
        </div>

      </Main>
    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticketsState.ticket,
  included: state.ticketsState.included,
  ticketId: state.ticketsState.ticketId,
  comments: state.ticketsState.comments,
  responsibles: state.ticketsState.responsibles,
  employees: state.ticketsState.employees
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getTicket,
  getComments,
  getTicketResponsibles,
  loadEmployees
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsShow)