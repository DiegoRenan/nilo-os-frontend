import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { removeResponsible, getTicketResponsibles } from './ticketsActions'
import Button from '../../templates/Button'

class TicketResponsibles extends Component {

  handleRemoveResponsible(id, ticket_id){
    this.props.removeResponsible(id, ticket_id)
  }
  
  render() {
      const responsibles = this.props.responsibles || []
  
      return responsibles.map(e => (
        <span className="badge badge-light" key={e.id}>
          {e.attributes.employee.name}
          <Button
            style="danger btn-sm"
            icon="far fa-times-circle"
            onClick={() => this.handleRemoveResponsible(e.id, e.attributes.ticket.id)}
          />
        </span>
      ))

  }
  
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getTicketResponsibles,
  removeResponsible
}, dispatch)

const mapStateToProps = state => ({
  responsibles: state.ticketsState.responsibles
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketResponsibles)