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
  aproveTicket,
  closeTicket
} from './ticketsActions'
import Icon from '../../templates/Icon'
import Button from '../../templates/Button'
import TicketsStatus from './ticketsStatus'
import TicketBody from './TicketBody'
import TicketComments from './TicketComments'
import Modal from '../../templates/Modal'
import AddResponsible from './AddResponsible'
import AddComments from './AddComments'
import If from '../../templates/If'

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

  statusObj() {
    const obj = {
        id: this.props.match.params.id || null,
        employee_id: localStorage.getItem("employee_id") || null
    }

    return obj
  }

  closeTicket() {
    const obj = this.statusObj()
    this.props.closeTicket(obj)
  }

  aproveTicket() {
    const obj = this.statusObj()
    this.props.aproveTicket(obj)
  }

  render() {
    const obj = this.props.ticket || []
    const included = this.props.included || []
    const employees = this.props.employees || []
    const author = this.props.author || []

    return (
      <Main title="Type" >
        <h1>
          {<Icon icon={`circle-o ` + this.colorPriority(obj.nivel)} />}
          {obj.title}
        </h1>

        <div className="d-flex flex-row-reverse mg-5">
          <If test={localStorage.getItem("admin") == "true" || localStorage.getItem("master") == "true"} >
            <Button
              style="secondary btn-sm mg-l-5"
              icon="fas fa-users"
              toggle="modal"
              target="#exampleModal"
            />
          </If>

          <If test={localStorage.getItem("admin") == "true" || 
                    localStorage.getItem("master") == "true" ||
                    localStorage.getItem("uid") == author.email
                    } >
            <Button
              style="secondary btn-sm mg-l-5"
              title="Concluir"
              onClick={() => this.closeTicket()}
              disabled={ !(this.props.status == "ABERTO") }
            />
          </If>
         
          <If test={localStorage.getItem("admin") == "true"} >
            <Button
              style="secondary btn-sm mg-l-5"
              title="Aprovar"
              onClick={() => this.aproveTicket()}
            />
          </If>

        </div>
        
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
            author={author.name}
            ticket={obj}
            ticketId={this.props.ticketId}
          />

        </div>

        <div className="mg-5 pd-5">
          <TicketComments />
        </div>

        <div className="mg-5 pd-5">
          <AddComments
            ticket_id={this.props.ticketId} />
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
  employees: state.ticketsState.employees,
  author: state.ticketsState.author,
  status: state.ticketsState.status
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getTicket,
  getComments,
  getTicketResponsibles,
  loadEmployees,
  closeTicket,
  aproveTicket
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsShow)