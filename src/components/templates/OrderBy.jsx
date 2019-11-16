import './OrderBy.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
	loadTickets,
	loadTicketsUser } from '../screens/tickets/ticketsActions'
import Grid from './Grid'

class OrderBy extends Component {

	getParams(valeu) {
		switch (valeu) {
		case '1':
		  return {order: "updated_at"}
		case '2':
			return {order: "title"}
		case '3':
			return {order: "created_at"}
		default:
			return false;
		}
	}

  orderOnChange(e) {
  	let screen = this.props.screen
  	switch (screen) {
    case 'home':
    	this.props.loadTickets(this.getParams(e.target.value))
    	break;
    case 'myTickets':
    	this.props.loadTicketsUser(this.props.user_id, this.getParams(e.target.value))
    	break;
    case 'closedTickets':
      this.props.loadTickets(this.getParams(e.target.value))
      break;
    default:
      let q = this.props.q ? this.props.q : null
    	this.props.loadTickets(this.getParams(e.target.value), q);
    }
  }

  render() {
    return (
      <div className="">
        <div className="d-flex flex-row-reverse">
          <Grid cols="12 12 4 4">
            <select
            	defaultValue="1"
            	className="form-control"
              onChange={e => this.orderOnChange(e)}>
         			<option value="1" 
				 							key="1">
				 							Atualização</option>
				 			<option value="2" 
				 							key="2">
				 							Alfabética</option>
				 			<option value="3" 
				 							key="3">
				 							Criação</option>
            </select>
          </Grid>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  loadTickets,
  loadTicketsUser
}, dispatch)


OrderBy = connect(null, mapDispatchToProps)(OrderBy)
export default OrderBy
