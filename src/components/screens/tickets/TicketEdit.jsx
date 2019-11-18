import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../../templates/Main'
import TicketForm from './TicketForm'

import { getTicket } from './ticketsActions'
import { 
	getCompanyDepartments,
} from '../company/companiesActions'
import { getDepartmentSectors } from '../departments/departmentsActions'

class TicketEdit extends Component  {
	componentWillMount(){
		this.props.getTicket(this.props.match.params.id)
	}

	render () {
		if(this.props.company)
			this.props.getCompanyDepartments(this.props.company)
		if(this.props.department) 
			this.props.getDepartmentSectors(this.props.department)
		
		return (
		  <Main title="Editar Ticket" >
		    <div className="ticket-edit">
		      <div className="display-4">Editar Ticket</div>
		      <TicketForm ticketId={this.props.match.params.id}
		                    history={this.props.history}/>
		    </div>
		  </Main>
	  )
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
 	getCompanyDepartments,
  getDepartmentSectors,
  getTicket
}, dispatch)

const mapStateToProps = state => ({ 
	company: state.ticketsState.company,
	department: state.ticketsState.department 
})

TicketEdit = connect( 
	mapStateToProps,
  mapDispatchToProps
)(TicketEdit)

export default TicketEdit