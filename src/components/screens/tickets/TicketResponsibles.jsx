import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { removeResponsible, getTicketResponsibles } from './ticketsActions'
import Button from '../../templates/Button'
import If from '../../templates/If'

class TicketResponsibles extends Component {

  handleRemoveResponsible(id, ticket_id){
    this.props.removeResponsible(id, ticket_id)
  }
  
  render() {
      const responsibles = this.props.responsibles || []
  
      return responsibles.map(e => (
        <span className="badge badge-light" key={e.id}>
          {e.attributes.employee.name}
          <If test={localStorage.getItem("admin") == "true" || localStorage.getItem("master") == "true"} >
            <Button
              style="danger btn-sm"
              icon="far fa-times-circle"
              onClick={() => this.handleRemoveResponsible(e.id, e.attributes.ticket.id)}
            />
          </If>
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