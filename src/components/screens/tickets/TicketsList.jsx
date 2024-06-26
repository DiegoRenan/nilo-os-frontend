import './TicketsList.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import Button from '../../templates/Button'
import { 
  loadTickets, 
  remove, 
  loadTicketsUser
 } from './ticketsActions'
import Modal from '../../templates/Modal'
import If from '../../templates/If'
import Icon from '../../templates/Icon'

class TicketsList extends Component {

  componentDidMount() {
    if (this.props.user_id) {
      this.props.loadTicketsUser(this.props.user_id)
    }
    else {
      let q = this.props.q ? this.props.q : null
      this.props.loadTickets(q)
    }
  }

  removeTicket(id) {

    confirmAlert({
      title: 'Confirma pra Deletar',
      message: `Todas as informações deste ticket incluindo os comentário serão permanentemente excluídos. 
                Deseja continuar?`,
      buttons: [
        {
          label: 'Confirmar',
          onClick: () => this.props.remove(id)
        },
        {
          label: 'Cancelar',
          onClick: () => { }
        }
      ]
    });

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

  renderStatus(ticket){
    if(ticket.attributes.status === "ABERTO"){
      return (<Icon icon='envelope-open text-success' />) 
    }
    if(ticket.attributes.status === "AGUARDANDO_APROVAÇÃO"){
      return (<Icon icon='hourglass-half text-muted' />) 
    }
    if(ticket.attributes.status === "CONCLUÍDO"){
      return (<Icon icon="envelope text-secondary" />) 
    }
  }

  ticketsList(ticket, index) {
    return (<tr key={ticket.id}>
      <td>
        <Icon icon={`circle-o ` + this.colorPriority(ticket.attributes.nivel)} />
      </td>
      
      <td>
        <Link to={`/show_ticket/` + ticket.id}>{ticket.attributes.title}</Link>
      </td>

      <td>
        {ticket.attributes.author.name}
      </td>
      
      <td>
        {this.renderStatus(ticket)}
      </td>

      <td>
        <Button
          class="secondary btn-sm mg-l-5"
          icon="fas fa-users"
          toggle="modal"
          target={`#m` + index + `m`}
        />
        {this.renderModal(ticket, `m` + index + `m`)}
      </td>

      <If test={localStorage.getItem("admin") === "true" || localStorage.getItem("master") === "true"}>
        <td><Link to={`/edit_ticket/` + ticket.id}><Icon icon='edit' /></Link></td>
      </If>

      <If test={localStorage.getItem("admin") === "true"}>
        <td>
          <Link to="#" onClick={() => this.removeTicket(ticket.id)} ><Icon icon='trash' /></Link>
        </td>
      </If>

    </tr>
    )
  }

  renderRows() {
    let tickets = this.props.tickets || []
    const closedTickets = this.props.closedTickets

    if (closedTickets) {
      return tickets.map((ticket, index) => (
        <If test={ticket.attributes.status === "CONCLUÍDO"}>
          {this.ticketsList(ticket, index)}
        </If>
      ))
    } else {
      return tickets.map((ticket, index) => (
        <If test={!(ticket.attributes.status === "CONCLUÍDO")}>
          {this.ticketsList(ticket, index)}
        </If>
      ))
    }
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
              <th> Status </th>
              <th> - </th>
              <If test={localStorage.getItem("admin") === "true" || localStorage.getItem("master") === "true"}>
                <th> - </th>
              </If>
              <If test={localStorage.getItem("admin") === "true"}>
                <th> - </th>
              </If>
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
const mapDispatchToProps = dispatch => bindActionCreators({ 
                                                            loadTickets, 
                                                            remove, 
                                                            loadTicketsUser
                                                           }, 
                                                           dispatch
                                                          )
export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
