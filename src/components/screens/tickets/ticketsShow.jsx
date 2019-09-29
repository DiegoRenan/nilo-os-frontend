import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Ticket.css'
import Main from '../../templates/Main'
import { getTicket } from './ticketsActions'
import Icon from '../../templates/Icon'
import TicketsStatus from './ticketsStatus'

class TicketsShow extends Component {

  componentWillMount() {
    this.props.getTicket(this.props.match.params.id)
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
    
    return (
      <Main title="Type" >
        <h1>
          {<Icon icon={`circle-o ` + this.colorPriority(obj.nivel)} />}
          { obj.title }
        </h1>

        <div className="types">

          <TicketsStatus 
            included={included}
            nivel={obj.nivel}
          />

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticketsState.ticket,
  included: state.ticketsState.included
})

const mapDispatchToProps = dispatch => bindActionCreators({ getTicket }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TicketsShow)