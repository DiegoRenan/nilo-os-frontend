import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Ticket.css'
import Main from '../../templates/Main'
import { getTicket, getComments } from './ticketsActions'
import Icon from '../../templates/Icon'
import TicketsStatus from './ticketsStatus'
import TicketBody from './TicketBody'
import TicketComments from './TicketComments'

class TicketsShow extends Component {

  componentWillMount() {
    this.props.getTicket(this.props.match.params.id)
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
    const comments = this.props.comments || []
    const responsibles = this.props.responsibles || []
    
    return (
      <Main title="Type" >
        <h1>
          {<Icon icon={`circle-o ` + this.colorPriority(obj.nivel)} />}
          { obj.title }
        </h1>

        <div className="card types">

          <TicketsStatus 
            included={included}
            nivel={obj.nivel}
            responsibles={responsibles}
          />

          <TicketBody 
            ticket={obj}
            ticketId={this.props.ticketId}
           />

        </div>

        <div className="mg-5 pd-5">
          <TicketComments 
              comments={comments} />
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
  responsibles: state.ticketsState.responsibles
})

const mapDispatchToProps = dispatch => bindActionCreators({ getTicket, getComments }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsShow)